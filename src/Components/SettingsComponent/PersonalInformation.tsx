import { Pencil } from "lucide-react";
import CoverImage from "../../assets/cover.jpg";
import UserProfile from "../../assets/profileImageLarge.png";

export default function PersonalInformation() {
  return (
    <div className=" grid grid-cols-6 gap-10">
      {/* left */}
      <div className=" col-span-4">
        <h3 className="text-2xl font-bold border-b border-dark3 pb-5">
          Personal Information's
        </h3>

        <form className="space-y-5 py-7">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">First Name</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Last Name</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Email</label>
              <input
                type="email"
                className="h-14 px-4 bg-dark4 rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold mt-8">Personal Address</h3>
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">
                Country or Region
              </label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">City</label>
              <input
                type="text"
                placeholder="Washington"
                className="h-14 px-4 bg-dark4 rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Address</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Postal Code</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold mt-8">Social Information</h3>
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Facebook</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Twitter</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Linkedin</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-dark2">Youtube</label>
              <input
                type="text"
                className="h-14 px-4 bg-dark4 rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            {" "}
            <button
              type="submit"
              className="py-3.5 px-4 bg-primary text-white font-semibold rounded-lg mt-2 cursor-pointer hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>

      {/* right */}
      <div className=" col-span-2">
        <div className="space-y-3 mt-20">
          <h3 className="text-lg font-bold">Update Profile</h3>
          <p className="text-md text-[#a0aec0]">
            Profile of at least Size{" "}
            <span className="text-black">300x300.</span>
            Gifs work too. <span className="text-black">Max 5mb.</span>
          </p>

          <div className="grid place-items-center">
            <div className="relative h-40 w-40 ">
              <img
                src={UserProfile}
                alt="profile image"
                className="w-full h-full"
              />

              <div className="bg-primary p-2 rounded-full  inline-block absolute right-0 bottom-4 cursor-pointer">
                <Pencil size={15} fill="white" stroke="white" />
              </div>
            </div>
          </div>
        </div>

        {/* update cover */}
        <div className="mt-8 space-y-3">
          <h3 className="text-lg font-bold">Update Cover</h3>
          <p className="text-md text-[#a0aec0]">
            Cover of at least Size <span className="text-black">1170x920</span>
          </p>

          <div className="w-full relative">
            <img
              src={CoverImage}
              alt="cover image"
              className="w-full object-cover"
            />
            <div className="bg-primary p-2 rounded-full  inline-block absolute right-4 bottom-4 cursor-pointer">
              <Pencil size={15} fill="white" stroke="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
