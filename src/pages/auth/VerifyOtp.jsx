import OTPInput from "react-otp-input";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useLocation, Navigate } from "react-router";
import { useToast } from "../../context/ToastContext";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const email = location.state?.email;
  const type = location.state?.type; // "register" or "reset"

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  if (!email || !type) {
    return <Navigate to="/auth/login" replace />;
  }

  const onSubmit = async data => {
    try {
      setLoading(true);
      const endpoint = type === "register" ? "/auth/register/verify-otp" : "/auth/password/reset/verify";

      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email, otp: data.otp }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || json.error || "Verification failed");
      }

      showToast("OTP verified successfully!", "success");

      if (type === "register") {
        navigate("/auth/login");
      } else {
        navigate("/auth/reset-password", { state: { email, otp: data.otp } });
      }
    } catch (err) {
      console.error(err);
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResendLoading(true);
      const endpoint = type === "register" ? "/auth/register/resend-otp" : "/auth/password/reset/resend";

      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || json.error || "Resend failed");
      }

      showToast("OTP resent to your email", "success");
    } catch (err) {
      console.error(err);
      showToast(err.message || "Something went wrong", "error");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8">
      <h2 className="auth_title">OTP Verification</h2>
      <p className="auth_sub_title">
        Please enter the code that has been sent to {email}
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
                value: 4,
                message: "OTP must be 4 digits",
              },
            }}
            render={({ field }) => (
              <OTPInput
                {...field}
                value={field.value || ""}
                onChange={field.onChange}
                numInputs={4}
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
        <button type="submit" disabled={loading} className="auth_btn disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>

      <p className="block w-full text-center text-sm text-[#919eab] font-inter mt-4 2xl:mt-5">
        Don’t receive the code?{" "}
        <button type="button" onClick={handleResend} disabled={resendLoading} className="text-blue-500 font-semibold cursor-pointer hover:underline disabled:opacity-50">
          {resendLoading ? "Resending..." : "Resend"}
        </button>
      </p>
    </div>
  );
};

export default VerifyOtp;
