import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { AppleIcon, GoogleIcon } from "../../Icons";

export default function SigninPage() {
  const [showPassword, SetShowPassword] = useState<boolean>(false);
  return (
    <div className="max-w-200 flex justify-end px-30 py-19">
      <div className="w-112.5  text-center ">
        <div className="space-y-2">
          <h3 className="text-4xl font-semibold">Sign in to Bankco.</h3>
          <p className="font-medium text-dark2">Send, spend and save smarter</p>
        </div>

        {/* google & apple btn */}
        <div className="w-full flex items-center gap-5 my-8">
          <button className="w-1/2 flex items-center justify-center rounded-xl gap-2 h-14.5 border border-dark3 font-medium">
            <GoogleIcon /> Sign In with Google
          </button>

          <button className="w-1/2 flex items-center justify-center rounded-xl gap-2 h-14.5 border border-dark3 font-medium">
            <AppleIcon />
            Sign In with Apple
          </button>
        </div>

        {/* devider */}
        <div className="grid grid-cols-3 items-center">
          <div className=" h-[.3px] bg-dark3"></div>
          <p className="text-dark2">Or Continue With</p>

          <div className=" h-[.3px] bg-dark3"></div>
        </div>

        {/* input field */}

        <form className="my-6 space-y-5">
          <input
            type="text"
            placeholder="Username or email"
            className="h-14 border border-dark3  px-4 rounded-lg w-full focus:outline focus:outline-primary"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-14 border border-dark3 px-4 rounded-lg w-full focus:outline focus:outline-primary"
            />

            {/* show hide icon */}

            <div
              onClick={() => SetShowPassword((prev) => !prev)}
              className="absolute right-4 top-4.5 z-40 cursor-pointer"
            >
              {showPassword ? <EyeOff stroke="gray" /> : <Eye stroke="gray" />}
            </div>
          </div>

          {/* forget password */}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p className="font-semibold">Remember me</p>
            </div>

            <p className="text-primary underline font-semibold cursor-pointer">
              Forget password?
            </p>
          </div>

          <button
            className="bg-primary text-white h-14 w-full rounded-lg font-semibold my-2 cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p className="text-cente font-medium">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>

        <div className="space-y-5 mt-21">
          <ul className="text-dark2 text-sm flex items-center gap-6 justify-center">
            <li>Terms & condition</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>English</li>
          </ul>

          <p className="text-center text-dark2 text-sm">
            @ 2023 Bankco. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
