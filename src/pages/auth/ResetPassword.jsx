import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../../context/ToastContext";
import { useNavigate, useLocation, Navigate } from "react-router";
import { HidePassSvg, ShowPassSvg, } from "../../components/SvgContainer/SvgContainer";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const email = location.state?.email;
  const otp = location.state?.otp;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!email || !otp) {
    return <Navigate to="/auth/login" replace />;
  }

  const onSubmit = async data => {

    if (data.password !== data.password_confirmation) {
      showToast("Passwords do not match", "error");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/auth/password/reset/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          password: data.password,
          password_confirmation: data.password_confirmation,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || json.error || "Password reset failed");
      }

      showToast("Password reset successfully!", "success");
      navigate("/auth/success-message");
    } catch (err) {
      console.error(err);
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
        <h2 className="auth_title">Reset Password</h2>
        <p className="auth_sub_title">Create your new password</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3.5 md:space-y-4.5"
        >
          {/* Password */}
          <div>
            <label htmlFor="password" className="auth_label">
              Enter password
            </label>

            <div className="relative">
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Password"
                {...register("password", { required: true })}
                className={`auth_input pe-9! ${errors.password
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-[#CFD3D4]"
                  }`}
              />
              <p
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <ShowPassSvg /> : <HidePassSvg />}
              </p>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="password" className="auth_label">
              Confirm password
            </label>

            <div className="relative">
              <input
                type={!showConfirmPassword ? "password" : "text"}
                placeholder="Confirm Password"
                {...register("password_confirmation", { required: true })}
                className={`auth_input pe-9! ${errors.password_confirmation
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-[#CFD3D4]"
                  }`}
              />
              <p
                onClick={() => setShowConfirmPassword(prev => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showConfirmPassword ? <ShowPassSvg /> : <HidePassSvg />}
              </p>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading} className="auth_btn disabled:opacity-70 disabled:cursor-not-allowed">
            {loading ? "Creating..." : "Create Password"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
