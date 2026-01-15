import { Eye, EyeOff } from "lucide-react";
import { useReducer } from "react";
import { SecurityImage } from "../../Icons";

export default function Security() {
  const initialvalue = { oldPass: false, newPass: false };

  function reducer(state, action) {
    switch (action.type) {
      case "oldPass": {
        return { ...state, oldPass: !state.oldPass };
      }
      case "newPass": {
        return {
          ...state,
          newPass: !state.newPass,
        };
      }

      default:
        return state;
    }
  }

  const [showPassword, dispatch] = useReducer(reducer, initialvalue);

  return (
    <div className="grid grid-cols-12 items-center gap-20">
      {/* left */}
      <div className="col-span-7 space-y-6">
        <h3 className="text-2xl font-bold">Password</h3>
        <p className="text-sm text-[#a0aec0]">Change or view your password.</p>
        {/* old password */}
        <div className="space-y-2">
          <label className="text-sm text-[#a0aec0] font-medium block">
            Old Password
          </label>

          <div
            onClick={() => dispatch({ type: "oldPass" })}
            className="relative"
          >
            <input
              type={showPassword.oldPass === true ? "text" : "password"}
              placeholder="Password"
              className="h-14 bg-[#FAFAFA] dark:bg-[#23262B] dark:text-white px-4 rounded-lg w-full focus:outline focus:outline-primary"
            />

            {/* show hide icon */}

            <div className="absolute right-4 top-4.5 z-40 cursor-pointer">
              {showPassword.oldPass ? (
                <EyeOff stroke="gray" />
              ) : (
                <Eye stroke="gray" />
              )}
            </div>
          </div>
        </div>

        {/* new password */}
        <div className="space-y-2">
          <label className="text-sm text-[#a0aec0] font-medium block">
            New Password
          </label>

          <div className="relative">
            <input
              type={showPassword.newPass === true ? "text" : "password"}
              placeholder="Password"
              className="h-14 bg-[#FAFAFA] dark:bg-[#23262B] dark:text-white px-4 rounded-lg w-full focus:outline focus:outline-primary"
            />

            {/* show hide icon */}

            <div
              onClick={() => dispatch({ type: "newPass" })}
              className="absolute right-4 top-4.5 z-40 cursor-pointer"
            >
              {showPassword.newPass ? (
                <EyeOff stroke="gray" />
              ) : (
                <Eye stroke="gray" />
              )}
            </div>
          </div>

          <p className="text-sm text-[#a0aec0]">Minimum 6 characters</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-primary text-white text-sm font-semibold px-4 py-3 rounded-lg">
            Save Change
          </button>
        </div>
      </div>

      {/* right */}
      <div className="col-span-5 mt-10">
        <SecurityImage />
      </div>
    </div>
  );
}
