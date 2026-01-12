import { ChevronDown, Funnel, MapPin, Search } from "lucide-react";
import GenarelDropdownComponent from "../../Components/Ui/GenarelDropdownComponent";

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

  return (
    <div className="grid grid-cols-12 gap-8 m-12">
      {/* left */}
      <div className="col-span-9 space-y-8">
        {/*table */}

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
      </div>

      {/* right */}
      <div
        className="col-span-3
      "
      ></div>
    </div>
  );
}
