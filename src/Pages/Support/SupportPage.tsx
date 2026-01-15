import {
  ChevronDown,
  ChevronLeft,
  Ellipsis,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Printer,
  Star,
} from "lucide-react";
import { UndoIcon } from "../../Icons";
import User1 from "../../assets/customer2.png";

export default function SupportPage() {
  return (
    <div className="grid grid-cols-12 gap-8 m-12">
      {/* left section*/}
      <div className="col-span-9 space-y-8">
        <div className="flex justify-between items-center">
          {/* left */}
          <button className="flex items-center bg-white dark:bg-[#1D1E24] dark:text-white p-4 rounded-lg text-dark2 border border-transparent cursor-pointer hover:border-primary transition-all duration-300 ease-in-out">
            <ChevronLeft stroke="#A0AEC0" />
            Support Details
          </button>

          {/* right */}
          <div className="flex items-center gap-5">
            <button className="flex items-center bg-white dark:bg-[#1D1E24] dark:text-white p-4 rounded-lg text-dark2 gap-2 border border-transparent cursor-pointer hover:border-primary transition-all duration-300 ease-in-out">
              <Printer stroke="#A0AEC0" size={20} />
              Print order
            </button>
            <button className="flex items-center gap-2 bg-white dark:bg-[#1D1E24] dark:text-white p-4 rounded-lg text-dark2 border border-transparent cursor-pointer hover:border-primary transition-all duration-300 ease-in-out">
              <UndoIcon stroke="#A0AEC0" />
              Refund amount
            </button>
            <button className="flex gap-2 items-center bg-white dark:bg-[#1D1E24] dark:text-white p-4 rounded-lg text-dark2 border border-transparent cursor-pointer hover:border-primary transition-all duration-300 ease-in-out">
              More actions
              <ChevronDown size={18} stroke="#A0AEC0" />
            </button>
          </div>
        </div>

        {/* main content */}
        <div className="grid grid-cols-2 gap-12 py-8 px-6 bg-white dark:bg-[#1D1E24] dark:text-white rounded-lg">
          {/* left */}
          <div className="">
            <form className="space-y-5">
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-medium text-dark2 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-medium text-dark2 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
                  />
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-medium text-dark2 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="font-medium text-dark2 dark:text-white">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg  w-full shrink-0 focus:outline focus:outline-primary"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold mt-8">Support Issues</h3>
              <div className="flex flex-col gap-2 w-full mb-8">
                <label className="font-semibold">Title</label>
                <input
                  type="email"
                  className="h-14 px-4 bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg w-full shrink-0 focus:outline focus:outline-primary"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold">Description</label>

                <textarea className="h-45 px-4 resize-none bg-dark4 dark:bg-[#23262B] dark:text-white rounded-lg w-full shrink-0 focus:outline focus:outline-primary"></textarea>
              </div>

              <div className="flex items-center justify-end">
                {" "}
                <button
                  type="submit"
                  className="py-3.5 px-12 bg-primary text-white font-semibold rounded-lg mt-2 cursor-pointer hover:bg-green-600 transition-all duration-300 ease-in-out"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>

          {/* right */}
          <div className="">
            <div className="flex items-center gap-4">
              <button className="px-4 py-3 bg-primary text-white font-medium rounded-lg cursor-pointer">
                Your inbox
              </button>

              <button className="px-4 py-3 border-2 border-dark3 dark:border-primary  font-medium rounded-lg cursor-pointer">
                Done
              </button>

              <button className="px-4 py-3 border-2 border-dark3 dark:border-primary  font-medium rounded-lg cursor-pointer">
                Saved
              </button>
            </div>

            {/* recent support  */}
            <div className="py-8 px-6 border border-dark3 dark:border-gray-700 rounded-lg mt-5">
              <h3 className="text-lg font-medium">Recent Support</h3>

              {/* card container */}
              <div className="mt-5 space-y-3">
                <div className=" flex gap-5 px-4 py-8 rounded-lg ">
                  <div>
                    <img
                      src={User1}
                      alt=""
                      className="w-10.5 h-10.5 rounded-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-dark2 dark:text-white">
                      Joel Becker <span>12h</span>
                    </h4>

                    <h3 className="text-dark2 font-semibold dark:text-white">
                      When is the Sketch version available for download?
                    </h3>

                    <p className="text-sm text-dark2 my-4 dark:text-white">
                      "Love this so much! What tools do you use to create your
                      3d illustrations?"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <MessageSquare
                          size={15}
                          fill="#A3A6AB"
                          stroke="#A3A6AB"
                        />
                      </div>

                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <Star size={15} fill="#A3A6AB" stroke="#A3A6AB" />
                      </div>

                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <Ellipsis size={15} fill="#A3A6AB" stroke="#A3A6AB" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex gap-5 px-4 py-8 rounded-xl bg-primary text-white">
                  <div>
                    <img
                      src={User1}
                      alt=""
                      className="w-10.5 h-10.5 rounded-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold ">
                      Joel Becker <span>12h</span>
                    </h4>

                    <h3 className="font-semibold">
                      When is the Sketch version available for download?
                    </h3>

                    <p className="text-sm  my-4">
                      "Love this so much! What tools do you use to create your
                      3d illustrations?"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <MessageSquare
                          size={15}
                          fill="#7ADC9E"
                          stroke="#7ADC9E"
                        />
                      </div>

                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <Star size={15} fill="#7ADC9E" stroke="#7ADC9E" />
                      </div>

                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <Ellipsis size={15} fill="#7ADC9E" stroke="#7ADC9E" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex gap-5 px-4 py-8 rounded-lg">
                  <div>
                    <img
                      src={User1}
                      alt=""
                      className="w-10.5 h-10.5 rounded-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-dark2 dark:text-white">
                      Joel Becker <span>12h</span>
                    </h4>

                    <h3 className="text-dark2 font-semibold dark:text-white">
                      When is the Sketch version available for download?
                    </h3>

                    <p className="text-sm text-dark2 my-4 dark:text-white">
                      "Love this so much! What tools do you use to create your
                      3d illustrations?"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <MessageSquare
                          size={15}
                          fill="#A3A6AB"
                          stroke="#A3A6AB"
                        />
                      </div>

                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <Star size={15} fill="#A3A6AB" stroke="#A3A6AB" />
                      </div>

                      <div className="border border-dark3 rounded-full inline-block p-2">
                        {" "}
                        <Ellipsis size={15} fill="#A3A6AB" stroke="#A3A6AB" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid place-items-center">
                  <button className="text-sm font-semibold border border-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white cursor-pointer transition-all duration-300 ease-in-out text-white hover:bg-white hover:text-black bg-black rounded-xl py-4 px-14">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right section*/}
      <div
        className="col-span-3 space-y-10
      "
      >
        <div className="bg-white dark:bg-[#1D1E24] dark:text-white rounded-lg p-8">
          <div className="border-b border-dark3 dark:border-gray-700">
            <h3 className="text-xl font-bold">Customer</h3>
            <div className="flex items-center justify-between my-6">
              <div className="flex items-center justify-center gap-4">
                <img src={User1} alt="" />
                <div>
                  <p className="font-semibold">Darcel Ballentine</p>
                  <p className="text-sm text-dark2 font-medium">10 orders</p>
                </div>
              </div>
              <Mail stroke="#22C55E" />
            </div>
          </div>

          {/* contact info */}
          <div className="pb-8 mt-5 space-y-4 border-b border-dark3 dark:border-gray-700">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold">Contact Information</h4>
              <p className="text-primary text-sm font-medium cursor-pointer">
                Edit
              </p>
            </div>

            <div className="flex items-center gap-4 text-dark2 font-medium">
              <Mail size={20} />
              <p>markparker@mail.com</p>
            </div>

            <div className="flex items-center gap-4 text-dark2 font-medium">
              <Phone size={20} />
              <p>(671) 555-0110</p>
            </div>
          </div>

          {/* shipping address */}
          <div className="pb-8 mt-5 space-y-4 border-b border-dark3 dark:border-gray-700">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold">Shipping Address</h4>
              <p className="text-primary text-sm font-medium cursor-pointer">
                Edit
              </p>
            </div>

            <div className="flex items-center gap-3 text-dark2">
              <MapPin size={20} />
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>

          {/* present address */}
          <div className="pb-8 mt-5 space-y-4 ">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold">Present Address</h4>
              <p className="text-primary text-sm font-medium cursor-pointer">
                Edit
              </p>
            </div>

            <div className="flex items-center gap-3 text-dark2">
              <MapPin size={20} />
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
        </div>

        {/* note */}
        <div className="bg-white dark:bg-[#1D1E24] dark:text-white rounded-lg p-8">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-bold">Note</h4>
            <p className="text-primary text-sm font-medium cursor-pointer">
              Edit
            </p>
          </div>
          <p className="text-dark2 font-medium">No notes from customer.</p>
        </div>

        {/* completed pr5ofile */}

        <div className="p-8 rounded-lg bg-[#EDF2F7] dark:bg-[#1D1E24] dark:text-white">
          <div className="flex items-center gap-4">
            <LoaderCircle size={50} stroke="#22C55E" />

            <div>
              <div className="space-y-1">
                <h3 className="font-bold ">Complete profile</h3>
                <p className="text-sm text-dark2 font-medium">
                  Complete your profile to unlock all features
                </p>
              </div>
            </div>
          </div>
          <button className="bg-primary text-sm font-semibold rounded-lg text-white py-3 w-full mt-5">
            Verify Identity
          </button>
        </div>
      </div>
    </div>
  );
}
