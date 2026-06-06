import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('dx_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  const clearAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('dx_user');
    setUser(null);
  };

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      if (res.ok && json.success && json.data) {
        setUser(json.data);
        localStorage.setItem('dx_user', JSON.stringify(json.data));
      } else if (res.status === 401) {
        clearAuth();
      } else {
        console.warn('Profile fetch failed, keeping stored auth state if available.', json);
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      // Keep existing auth state on network errors to avoid logging out users
      // unnecessarily after payment redirects or transient connectivity issues.
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    if (userData) {
      setUser(userData);
      localStorage.setItem('dx_user', JSON.stringify(userData));
    }
    fetchProfile();
  };

  const logout = () => {
    clearAuth();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
