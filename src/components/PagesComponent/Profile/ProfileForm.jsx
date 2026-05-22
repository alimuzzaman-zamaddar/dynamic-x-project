import React, { useState, useEffect } from 'react'
import { ChevronDown, Eye, EyeOff, LogOut, Trash2, X, AlertTriangle } from 'lucide-react'
import Profile from "../../../assets/img/product/profile.png"
import { useAuth } from "../../../context/AuthContext"
import { useToast } from "../../../context/ToastContext"

export default function ProfileForm() {
  const { user, logout, fetchProfile } = useAuth();
  const { showToast } = useToast();
  const [countryCode, setCountryCode] = useState('+62');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Security States
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [savingPersonal, setSavingPersonal] = useState(false);
  const [savingContact, setSavingContact] = useState(false);
  const [savingSecurity, setSavingSecurity] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    type: 'logout',
    title: '',
    message: '',
    actionButtonText: '',
  });

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone?.replace(countryCode, '') || '');
    }
  }, [user]);

  const handleUpdateProfile = async (type) => {
    const setSaving = type === 'personal' ? setSavingPersonal : setSavingContact;
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/auth/profile/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          email,
          phone: `${countryCode}${phone}`
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.error || "Failed to update profile");
      showToast("Profile updated successfully", "success");
      fetchProfile();
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast("Please fill in all password fields", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }
    setSavingSecurity(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/auth/profile/update-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          current_password: currentPassword,
          password: newPassword,
          password_confirmation: confirmPassword
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.error || "Failed to update password");
      showToast("Password updated successfully", "success");
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setSavingSecurity(false);
    }
  };

  const openConfirmation = (type) => {
    if (type === 'logout') {
      setConfirmModal({
        isOpen: true,
        type: 'logout',
        title: 'Confirm Logout',
        message: 'Are you sure you want to log out of your session?',
        actionButtonText: 'Log Out',
      });
    } else if (type === 'delete') {
      setConfirmModal({
        isOpen: true,
        type: 'delete',
        title: 'Delete Account Permanently',
        message: 'Are you absolutely sure? This will permanently delete your account data and configurations. This operation cannot be reversed.',
        actionButtonText: 'Delete Account',
      });
    }
  };

  const closeConfirmation = () => {
    setConfirmModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleConfirmedAction = () => {
    closeConfirmation();
    if (confirmModal.type === 'logout') {
      executeLogout();
    } else if (confirmModal.type === 'delete') {
      executeDeleteAccount();
    }
  };

  const executeDeleteAccount = async () => {
    setDeleting(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/auth/profile/delete`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || data.error || "Failed to delete account");
      }

      showToast("Account deleted successfully", "success");
      logout();
      window.location.href = '/';
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setDeleting(false);
    }
  };

  const executeLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/auth/logout`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
    } catch (err) {
      console.error(err);
    }
    logout();
    window.location.href = '/';
    showToast("Logged out successfully", "success");
  };

  return (
    <div className="w-full bg-white pb-10 relative">
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl border border-slate-100 transform transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl flex items-center justify-center ${confirmModal.type === 'delete' ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-700'}`}>
                {confirmModal.type === 'delete' ? <AlertTriangle size={24} /> : <LogOut size={24} />}
              </div>
              <button onClick={closeConfirmation} className="text-slate-400 hover:text-slate-600 transition p-1 rounded-xl hover:bg-slate-50 cursor-pointer">
                <X size={20} />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">{confirmModal.title}</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">{confirmModal.message}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={closeConfirmation}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmedAction}
                className={`w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-sm text-white transition cursor-pointer ${confirmModal.type === 'delete' ? 'bg-red-600 hover:bg-red-700 shadow-sm' : 'bg-black hover:bg-slate-800'
                  }`}
              >
                {confirmModal.actionButtonText}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="lg:text-3xl text-xl text-[#0D0D12] font-medium">Personal & Contact Information</h1>
          <p className="text-sm text-slate-400 mt-1">
            Maintain your personal and contact information from here
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => openConfirmation('logout')} className="w-12 h-12 rounded-2xl border border-red-200 bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition cursor-pointer">
            <LogOut size={20} />
          </button>
          <button onClick={() => openConfirmation('delete')} disabled={deleting} className="w-12 h-12 rounded-2xl border border-red-200 bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition disabled:opacity-50 cursor-pointer">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className='w-full space-y-10'>
        {/* Row 1: Personal Info */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full items-start lg:items-center">
          <div className="flex flex-col items-center sm:items-start shrink-0">
            <h5 className='text-sm font-semibold text-[#262626] mb-3 hidden lg:block invisible'>Avatar</h5>
            <img
              src={user?.avatar || Profile}
              alt="Profile Avatar"
              className='w-16 h-16 rounded-full object-cover shrink-0'
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full">
              <h5 className='text-sm font-semibold text-[#262626] mb-1'>Personal Info</h5>
              <label htmlFor="fullName" className='text-xs font-normal text-[#63716E] mt-2 mb-1 block'>Full Name</label>
              <input
                id="fullName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Niko Pradana'
                className='p-4 rounded-2xl bg-[#F7F7F7] w-full text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:bg-slate-100 transition-colors border-0'
              />
            </div>
            <button disabled={savingPersonal} onClick={() => handleUpdateProfile('personal')} className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-2xl font-medium shrink-0 hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer">
              {savingPersonal ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        {/* Row 2: Contact Info */}
        <div className="w-full">
          <h5 className='text-sm font-semibold text-[#262626] mb-1'>Contact Info</h5>
          <div className="flex flex-col lg:flex-row gap-4 items-end w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="w-full">
                <label className='text-xs font-normal text-[#63716E] mt-2 mb-1 block'>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='niko.pradana@company.com'
                  className='p-4 rounded-2xl bg-[#F7F7F7] w-full text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:bg-slate-100 transition-colors border-0'
                />
              </div>

              <div className="w-full">
                <label className='text-xs font-normal text-[#63716E] mt-2 mb-1 block'>Phone Number</label>
                <div className="flex items-center rounded-2xl bg-[#F7F7F7] overflow-hidden px-4 focus-within:bg-slate-100 transition-colors h-13">
                  <div className="relative flex items-center gap-1.5 shrink-0 pr-2">
                    <img
                      src="https://flagcdn.com/w20/us.png"
                      alt="Country Flag"
                      className="w-5 h-3.5 object-cover rounded-sm"
                    />
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none bg-transparent pr-4 py-2 text-sm font-medium text-slate-700 focus:outline-none cursor-pointer border-none ring-0 focus:ring-0"
                    >
                      <option value="+62">+62</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <ChevronDown size={14} className="text-slate-500 absolute right-0 pointer-events-none" />
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='813 7788 2244'
                    className='py-2 bg-transparent w-full text-sm text-slate-700 placeholder-slate-500 focus:outline-none border-0 ring-0 focus:ring-0'
                  />
                </div>
              </div>
            </div>
            <button disabled={savingContact} onClick={() => handleUpdateProfile('contact')} className="w-full lg:w-auto bg-black text-white px-10 py-4 rounded-2xl font-medium shrink-0 hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer">
              {savingContact ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        {/* Row 3: Security */}
        <div className="w-full">
          <h5 className='text-sm font-semibold text-[#262626] mb-1'>Security</h5>
          <div className="flex flex-col lg:flex-row gap-4 items-end w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

              {/* Current Password Field */}
              <div className="w-full relative">
                <label className='text-xs text-[#63716E] font-normal mt-2 mb-2 block'>Current Password</label>
                <div className="relative w-full h-13">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder='Current Password'
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className='w-full h-full pl-4 pr-10 rounded-2xl bg-transparent border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-slate-300 transition-colors'
                  />
                  <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
                    {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* New Password Field */}
              <div className="w-full relative">
                <label className='text-xs font-normal text-[#63716E] mt-2 mb-2 block'>New Password</label>
                <div className="relative w-full h-13">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder='New Password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className='w-full h-full pl-4 pr-10 rounded-2xl bg-transparent border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-slate-300 transition-colors'
                  />
                  <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password Field */}
              <div className="w-full relative">
                <label className='text-xs text-[#63716E] font-normal mt-2 mb-2 block'>Confirm New Password</label>
                <div className="relative w-full h-13">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder='Confirm New Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='w-full h-full pl-4 pr-10 rounded-2xl bg-transparent border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-slate-300 transition-colors'
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

            </div>
            <button disabled={savingSecurity} onClick={handleUpdatePassword} className="w-full lg:w-auto bg-black text-white px-10 py-4 rounded-2xl font-medium shrink-0 hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer h-13 lg:mt-0 mt-2">
              {savingSecurity ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}