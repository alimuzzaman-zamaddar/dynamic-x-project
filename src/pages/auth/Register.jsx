import { Link, useNavigate } from "react-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HidePassSvg,
  ShowPassSvg,
} from "../../components/SvgContainer/SvgContainer";
import { useToast } from "../../context/ToastContext";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {

    if (data.password !== data.password_confirmation) {
      showToast("Passwords do not match", "error");
      return;
    }

    const { name, surname, ...rest } = data;
    const payload = {
      ...rest,
      name: `${name || ""} ${surname || ""}`.trim(),
      agree_to_terms: 1
    };

    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || json.error || "Registration failed");
      }

      showToast("Registration successful!", "success");
      navigate("/auth/verify-otp", { state: { email: data.email, type: "register" } });
    } catch (err) {
      console.error(err);
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
      <h2 className="auth_title">Create Account</h2>
      {/* <p className="auth_sub_title">
        Professional 3D printing service for prototyping and production. Over
        100+ materials available with lead times as fast as 24 hours.
      </p> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 md:space-y-3.5 2xl:space-y-5"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="email" className="auth_label">
            Name
          </label>

          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className={`auth_input ${errors.name
              ? "border-red-500 placeholder:text-red-500"
              : "border-[#CFD3D4]"
              }`}
          />
        </div>
        <div>
          <label htmlFor="surname" className="auth_label">
            SurName
          </label>

          <input
            type="text"
            placeholder="SurName"
            {...register("surname", { required: true })}
            className={`auth_input ${errors.surname
              ? "border-red-500 placeholder:text-red-500"
              : "border-[#CFD3D4]"
              }`}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="auth_label">
            Email
          </label>

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className={`auth_input ${errors.email
              ? "border-red-500 placeholder:text-red-500"
              : "border-[#CFD3D4]"
              }`}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="email" className="auth_label">
            Create Password
          </label>

          <div className="relative">
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter Password"
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
          <label htmlFor="email" className="auth_label">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={!showConfirmPassword ? "password" : "text"}
              placeholder="Confirm Password"
              {...register("password_confirmation", { required: true })}
              className={`auth_input !pe-9 ${errors.password_confirmation
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
          {loading ? "Registering..." : "Get Started"}
        </button>
      </form>

      <p className="block w-full text-center text-sm text-[#919EAB] font-inter mt-4 2xl:mt-5">
        Already Have an Account?{" "}
        <Link
          to="/auth/login"
          className="text-secondary-blue font-semibold cursor-pointer hover:underline text-blue-500"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Register;
