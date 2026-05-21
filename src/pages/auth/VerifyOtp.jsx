import OTPInput from "react-otp-input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);
    navigate("/auth/reset-password");
  };

  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
      <h2 className="auth_title">OTP Verification</h2>
      <p className="auth_sub_title">
        Please enter the code that has been sent to J****s@smartyair.com
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* OTP Input */}
        <div className="mt-5">
          <Controller
            name="otp"
            control={control}
            rules={{
              required: "OTP is required",
              minLength: {
                value: 6,
                message: "OTP must be 6 digits",
              },
            }}
            render={({ field }) => (
              <OTPInput
                {...field}
                value={field.value || ""}
                onChange={field.onChange}
                numInputs={6}
                renderInput={props => <input {...props} />}
                containerStyle={"flex items-center !gap-2 justify-center"}
                inputStyle={`mx-auto !w-10 md:!h-12 !h-10 md:!w-12 xl:!w-14 xl:!h-14 border border-[#CFD3D4] md:rounded-[12px] rounded-[8px] text-lg font-medium text-black bg-gray-50 outline-none`}
              />
            )}
          />
          {errors.otp && (
            <p className="text-red-600 mt-2 text-sm text-center">
              {errors.otp.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="auth_btn">
          Verify
        </button>
      </form>

      <p className="block w-full text-center text-sm text-[#919eab] font-inter mt-4 2xl:mt-5">
        Don’t receive the code?{" "}
        <button className="text-blue-500 font-semibold cursor-pointer hover:underline">
          Resend
        </button>
      </p>
    </div>
  );
};

export default VerifyOtp;
