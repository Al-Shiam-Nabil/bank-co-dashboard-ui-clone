import {
  Bookmark,
  ChevronDown,
  ClipboardList,
  Dot,
  Download,
  Ellipsis,
  Funnel,
  MapPin,
  Search,
  Share2,
  Star,
} from "lucide-react";
import GenarelDropdownComponent from "../../Components/Ui/GenarelDropdownComponent";
import User2 from "../../assets/customer2.png";
import User1 from "../../assets/user1.png";

export default function UserPage() {
  const dropdownInfo = [
    {
      data: "bangladesh",
    },
    {
      data: "India",
    },
    {
      data: "Nepal",
    },
  ];

  const usersArr = [
    {
      id: 1,
      name: "Abdur Rohman",
      designation: "Finance managers",
      location: "Jakarta, Indonesia•",
      time: "2 days ago",
      status: "Full Time",
      experiance: "Senior Level",
      avatar: User1,
      isMarked: true,
    },
    {
      id: 2,
      name: "Ajoy Sarker",
      designation: "Investors",
      location: "Jakarta, Indonesia•",
      time: "2 days ago",
      status: "Full Time",
      experiance: "Senior Level",
      avatar: User1,
      isMarked: false,
    },

    {
      id: 3,
      name: "Mohammad Ali",
      designation: "Boarrd Members",
      location: "Jakarta, Indonesia•",
      time: "2 days ago",
      status: "Full Time",
      experiance: "Junior Level",
      avatar: User1,
      isMarked: false,
    },
    {
      id: 4,
      name: "Abdullah Mamun",
      designation: "Finance managers",
      location: "Jakarta, Indonesia•",
      time: "2 days ago",
      status: "Part Time",
      experiance: "Senior Level",
      avatar: User1,
      isMarked: false,
    },
    {
      id: 5,
      name: "Sheikh Rakib",
      designation: "Accountants",
      location: "Jakarta, Indonesia•",
      time: "2 days ago",
      status: "Full Time",
      experiance: "Senior Level",
      avatar: User1,
      isMarked: false,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-8 m-12">
      {/* left */}
      <div className="col-span-9">
        {/* search */}

        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex  items-center gap-8">
            <div className="relative flex-1 ">
              <input
                type="text"
                className=" h-full w-full py-2  pl-15 pr-5 outline-none border-r border-dark3 "
                placeholder="Job title , company or Keywords"
              />

              <div className="absolute top-1 left-5">
                <Search stroke="gray" />
              </div>
            </div>

            <div>
              <GenarelDropdownComponent dropdownInfo={dropdownInfo}>
                <div className="flex items-center w-76.5 border-r border-dark3">
                  <MapPin stroke="gray" />
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      className=" px-3 py-2 mr-3 w-full outline-none"
                    />
                    <ChevronDown stroke="gray" />
                  </div>
                </div>
              </GenarelDropdownComponent>
            </div>

            <div className="flex items-center gap-10">
              <Funnel stroke="gray" size={18} />
              <button className="bg-dark2 text-sm font-medium py-3 px-10 rounded-lg text-white cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* users info table */}

        <table className="w-full border-separate border-spacing-y-4">
          <thead>
            <tr></tr>
          </thead>

          <tbody>
            {usersArr.map((user, index) => (
              <tr
                key={user.id}
                className={`${index % 2 ? "bg-transparent" : "bg-white"}`}
              >
                <td className=" rounded-l-xl p-4">
                  <div className="flex items-center gap-4">
                    {user?.isMarked ? (
                      <Star stroke="#f6a723" fill="#f6a723" />
                    ) : (
                      <Star stroke="#cbd5e0" fill="#cbd5e0" />
                    )}

                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="shrink-0  "
                    />

                    <div>
                      <h3 className="text-lg font-bold">{user?.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1 font-medium text-base">
                          {user?.designation} <Dot size={14} />
                        </span>
                        <span>{user?.location}</span>
                        <span>{user?.time}</span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-lg ${
                      user?.status?.toLowerCase() === "full time"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {user?.status}
                  </span>
                </td>

                {/* experiance */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-lg ${
                      user?.experiance?.toLowerCase() === "senior level"
                        ? "bg-orange-100 text-orange-400"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {user?.experiance}
                  </span>
                </td>

                {/* message btn */}

                <td className=" rounded-r-xl p-4">
                  <div className="flex items-center justify-end gap-5">
                    <button className="text-sm font-semibold text-white cursor-pointer bg-primary rounded-xl px-11 py-3">
                      Message
                    </button>
                    <Ellipsis stroke="gray" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* right */}
      <div
        className="col-span-3 bg-white rounded-lg p-12 mt-12
      "
      >
        <div className="text-center space-y-2 relative border-b border-dark3 pb-8">
          <div className="absolute left-[50%] -top-20 translate-x-[-50%]">
            <img src={User1} alt="user" />
          </div>

          <h3 className="text-xl font-bold">Abdur Rohman</h3>
          <p className="text-dark2 font-medium ">
            Finance managers • Jakarta, Indonesia • 2 days ago
          </p>

          <div className=" grid place-items-center">
            <div className="relative flex items-center">
              <img
                src={User2}
                alt=""
                className="border-white border-4 rounded-full w-10 h-10 object-contain"
              />
              <img
                src={User2}
                alt=""
                className="border-white border-4 rounded-full w-10 h-10 object-contain"
              />
              <img
                src={User2}
                alt=""
                className="absolute left-5 border-white border-4 rounded-full w-10 h-10 object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-4">
            <div className="border border-dark2 group hover:border-primary hover:bg-primary rounded-full inline-block p-2 cursor-pointer">
              <Bookmark className="text-dark2 group-hover:text-white" />
            </div>

            <div className="border border-dark2 group hover:border-primary hover:bg-primary rounded-full inline-block p-2 cursor-pointer">
              <Share2 className="text-dark2 group-hover:text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-5 py-8 border-b border-dark3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-dark2">Experience</p>

            <p className="text sm font-semibold">2-4 Years</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-dark2">Seniority Level</p>

            <p className="text sm font-semibold"> Senior Level</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-dark2">Employment</p>

            <p className="text sm font-semibold"> Full Time</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-dark2">Salary</p>

            <p className="text sm font-semibold">$250-300</p>
          </div>
        </div>

        {/* files */}
        <div className="py-8  border-b border-dark3">
          <p className="text-sm text-dark2 font-medium mb-4">Files</p>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#E4FDED]">
              <div className="text-sm flex items-center gap-3 ">
                <div className="bg-white p-2 rounded-lg ">
                  <ClipboardList className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Overview.pdf</h3>
                  <p className="text-dark2">50kb</p>
                </div>
              </div>

              <div>
                <Download />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-[#E4FDED]">
              <div className="text-sm flex items-center gap-3 ">
                <div className="bg-white p-2 rounded-lg ">
                  <ClipboardList className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Overview.pdf</h3>
                  <p className="text-dark2">50kb</p>
                </div>
              </div>

              <div>
                <Download />
              </div>
            </div>
          </div>
        </div>

        {/* hireing agent */}
        <div className="mt-8">
          <p className="text-sm font-medium text-dark2">Hiring Agent</p>

          <div className="flex items-center gap-4 my-4">
            <img src={User2} alt="" />
            <div>
              <h4 className="font-semibold">Annette Black</h4>
              <p className="text-sm font-medium text-primary">
                HR Specialist • <span className="text-dark2">4 Yrs Exp</span>
              </p>
            </div>
          </div>

          <div className="grid place-items-center mt-8">
            <button className="text-white bg-primary rounded-lg font-semibold py-3 px-7 cursor-pointer">
              Add to Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
