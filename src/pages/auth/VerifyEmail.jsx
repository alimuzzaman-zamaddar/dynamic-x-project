import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useToast } from "../../context/ToastContext";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/auth/password/reset/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || json.error || "Request failed");
      }

      showToast("OTP sent to your email!", "success");
      navigate("/auth/verify-otp", { state: { email: data.email, type: "reset" } });
    } catch (err) {
      console.error(err);
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
      <h2 className="auth_title">Forgot Password</h2>
      <p className="auth_sub_title">
        Enter the email address associated with your account
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3.5 2xl:space-y-5"
      >
        {/* Email */}
        <div>
          <label htmlFor="email" className="auth_label">
            Work Email
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

        {/* Submit */}
        <button type="submit" disabled={loading} className="auth_btn disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? "Sending..." : "Verify"}
        </button>
      </form>

      <p className="block w-full text-center text-sm text-[#919eab] font-inter mt-4 2xl:mt-5">
        Remember your password?{" "}
        <Link
          to="/auth/login"
          className="text-blue-500 font-semibold cursor-pointer hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default VerifyEmail;
