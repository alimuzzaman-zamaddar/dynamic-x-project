import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HidePassSvg,
  ShowPassSvg,
} from "../../components/SvgContainer/SvgContainer";
import { Link, useNavigate } from "react-router";
import { useToast } from "../../context/ToastContext";
import { useAuth } from "../../context/AuthContext";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const Login = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || json.error || "Login failed");
      }

      const token = json.token || json.data?.access_token || json.data?.token;
      if (token) {
        login(token, json.data?.user || json.data);
      }

      showToast("Login successful!", "success");
      navigate("/");
    } catch (err) {
      console.error(err);
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
      <h2 className="auth_title">Welcome Back!</h2>
      <p className="auth_sub_title">
        Professional 3D printing service for prototyping and production. Over
        100+ materials available with lead times as fast as 24 hours.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3.5 2xl:space-y-5"
      >
        {/* Email */}
        <div>
          <label htmlFor="email" className="auth_label">
            Email
          </label>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className={`auth_input ${
              errors.email
                ? "border-red-500 placeholder:text-red-500"
                : "border-[#CFD3D4]"
            }`}
          />
        </div>

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
              className={`auth_input !pe-9 ${
                errors.password
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

        {/* Forgot pass */}
        <div className="flex justify-end items-center mb-4 text-sm font-inter text-[#677079] -mt-1">
          <Link
            to="/auth/verify-email"
            className="text-secondary-blue hover:underline font-medium text-sm cursor-pointer"
          >
            Forgot Password
          </Link>
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading} className="auth_btn disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="block w-full text-center text-sm text-[#919eab] font-inter mt-4 2xl:mt-5">
        Don’t have an Account?{" "}
        <Link
          to="/auth/register"
          className="text-blue-500 font-semibold cursor-pointer hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
