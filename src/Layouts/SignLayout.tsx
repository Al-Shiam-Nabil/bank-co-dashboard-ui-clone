import { Outlet } from "react-router";
import { FullLogo } from "../Icons";
import DottedSignin from "../assets/dottedSignin.svg";
import SignInImage from "../assets/signin.svg";
import SqureSignin from "../assets/squareSignin.svg";
import VlineSignin from "../assets/vlineSignin.svg";

export default function SignLayout() {
  return (
    <div className="flex  ">
      {/* left */}
      <div className="w-1/2 min-h-screen bg-white p-10">
        {/* logo */}
        <div>
          <FullLogo />
        </div>

        {/* content */}
        <div>
          <Outlet />
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 min-h-screen bg-[#F6FAFF] p-10  relative">
        <div className="absolute ">
          <img src={SqureSignin} alt="" />
        </div>

        <div className="absolute right-10">
          <img src={VlineSignin} alt="" />
        </div>
        <div className=" max-w-200 text-center">
          <img src={SignInImage} alt="" />

          <div className="max-w-125 mx-auto space-y-4">
            <h3 className="text-4xl font-semibold">Speady, Easy and Fast</h3>
            <p className="text-sm font-medium text-dark2">
              BankCo. help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </p>
          </div>
        </div>

        <div className="absolute bottom-10">
          <img src={DottedSignin} alt="" />
        </div>
      </div>
    </div>
  );
}
