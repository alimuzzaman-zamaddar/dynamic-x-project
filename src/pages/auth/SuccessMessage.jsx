import React from "react";
import verifyImg from "../../assets/img/verify.png";

const SuccessMessage = () => {
  return (
    <div className="p-4.5 md:p-5 xl:p-6 2xl:p-8 flex flex-col items-center justify-center">
      <img src={verifyImg} alt="icon" className="mb-5" />
      <h2 className="auth_title ">Reset Password Successfully</h2>
      <p className="text-base text-[#6F6F6F]">
        your elements are ready for monitoring
      </p>
    </div>
  );
};

export default SuccessMessage;
