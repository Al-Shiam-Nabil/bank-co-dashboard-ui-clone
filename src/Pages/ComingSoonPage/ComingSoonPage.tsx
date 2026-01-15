import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router";

export default function ComingSoonPage() {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="w-3xl space-y-5 dark:text-white">
        <h2 className="text-center  text-5xl font-semibold">
          We are coming soon
        </h2>

        <p className="text-center  text-dark2 dark:text-white text-xl ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry`s standard dummy text ever since the 1500s,
        </p>
        {/* count down */}
        <div className="grid grid-cols-4 max-w-141 h-28 gap-10 mx-auto my-10">
          <div className="border-2 border-[#b7ffd1] rounded-lg flex items-center flex-col justify-center">
            <h3 className="text-5xl font-semibold">0</h3>
            <p className="text-dark2 adrk:text-white font-medium">Days</p>
          </div>
          <div className="border-2 border-[#b7ffd1] rounded-lg flex items-center flex-col justify-center">
            <h3 className="text-5xl font-semibold">0</h3>
            <p className="text-dark2 adrk:text-white font-medium">Days</p>
          </div>
          <div className="border-2 border-[#b7ffd1] rounded-lg flex items-center flex-col justify-center">
            <h3 className="text-5xl font-semibold">0</h3>
            <p className="text-dark2 adrk:text-white font-medium">Days</p>
          </div>
          <div className="border-2 border-[#b7ffd1] rounded-lg flex items-center flex-col justify-center">
            <h3 className="text-5xl font-semibold">0</h3>
            <p className="text-dark2 adrk:text-white font-medium">Days</p>
          </div>
        </div>

        {/* subscribe */}

        <div className="max-w-115.5 mx-auto my-18">
          <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>

          <div className="h-15 relative">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-[#EDF2F7] dark:bg-[#1D1E24] w-full h-full px-7 pr-35 rounded-lg focus:outline focus:outline-primary"
            />

            <button className="bg-primary text-white h-full w-31.75 rounded-r-lg absolute right-0 cursor-pointer font-semibold  hover:bg-primary/90">
              Subscribe
            </button>
          </div>
        </div>

        {/* social icon */}
        <div className="flex items-center gap-4 justify-center">
          <div className="bg-[#EDF2F7] dark:bg-[#1D1E24] rounded-lg inline-block p-2 cursor-pointer group hover:bg-primary transition-all duration-300 ease-in-out">
            <Instagram className="text-gray-600 group-hover:text-white" />
          </div>

          <div className="bg-[#EDF2F7] dark:bg-[#1D1E24] rounded-lg inline-block p-2 cursor-pointer group hover:bg-primary transition-all duration-300 ease-in-out">
            <Twitter className="text-gray-600 group-hover:text-white" />
          </div>

          <div className="bg-[#EDF2F7] dark:bg-[#1D1E24] rounded-lg inline-block p-2 cursor-pointer group hover:bg-primary transition-all duration-300 ease-in-out">
            <Facebook className="text-gray-600 group-hover:text-white" />
          </div>

          <div className="bg-[#EDF2F7] dark:bg-[#1D1E24] rounded-lg inline-block p-2 cursor-pointer group hover:bg-primary transition-all duration-300 ease-in-out">
            <Linkedin className="text-gray-600 group-hover:text-white" />
          </div>
        </div>

        {/* go back */}
        <div className="grid place-items-center mt-25 ">
          <button
            onClick={() => navigate(-1)}
            className="bg-primary text-white font-semibold py-3.5 px-10 rounded-lg cursor-pointer hover:bg-primary/90"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
