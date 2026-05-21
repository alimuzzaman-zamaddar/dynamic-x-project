import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HidePassSvg,
  ShowPassSvg,
} from "../../components/SvgContainer/SvgContainer";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);
  };

  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
      <h2 className="auth_title">Create Account</h2>
      <p className="auth_sub_title">
        Professional 3D printing service for prototyping and production. Over
        100+ materials available with lead times as fast as 24 hours.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 md:space-y-3.5 2xl:space-y-5"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="email" className="auth_label">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className={`auth_input ${
              errors.name
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
            className={`auth_input ${
              errors.email
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
              className={`auth_input !pe-9 ${
                errors.password_confirmation
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
        <button type="submit" className="auth_btn">
          Get Started
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
