import { Outlet } from "react-router";
import authBg from "../assets/img/login.jpg";

const AuthLayout = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="px-3 md:px-10 xl:px-0 max-w-6xl 2xl:max-w-7xl mx-auto my-5 xl:my-10 flex items-center gap-8 xl:gap-10 w-full">
        {/* Left */}
        <div className="hidden lg:block flex-1 w-full">
          <figure className="h-170 xl:h-190 2xl:h-205 rounded-2xl w-full">
            <img
              src={authBg}
              alt="auth_bg"
              placeholder="blur"
              className="object-cover h-full rounded-2xl w-full"
            />
          </figure>
        </div>

        {/* Right */}
        <div className="shrink-0 w-full lg:w-[420px] xl:w-[520px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
