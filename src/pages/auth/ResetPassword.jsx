import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HidePassSvg,
  ShowPassSvg,
} from "../../components/SvgContainer/SvgContainer";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);
    navigate("/auth/success-message");
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
            <label htmlFor="password" className="auth_label">
              Confirm password
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
            Create Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
