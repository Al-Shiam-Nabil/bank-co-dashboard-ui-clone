import {
  ArrowUpDown,
  Calendar1,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import DropdownComponent from "./DropdownComponent";

type TableDataType = {
  name: string;
  email: string;
  location: string;
  spent: string;
  avatar: string;
};

type PropsType = {
  tableData: TableDataType[];
};

export default function TableComponent({ tableData }: PropsType) {
  const dropdownInfo = [
    {
      data: "Jan 10 - Jan 16",
    },
    {
      data: "Jan 10 - Jan 16",
    },
    {
      data: "Jan 10 - Jan 16",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#1D1E24] dark:text-white py-5  px-6  rounded-lg">
      {/* search bar */}
      <div className="w-full flex  items-center gap-5">
        <div className="relative h-14 w-full">
          <input
            type="text"
            className=" h-full w-full bg-dark5 dark:bg-[#23262B] flex-1 rounded-lg pl-15 pr-5 focus:outline-1 focus:outline-primary"
            placeholder="Search by name, email, or others..."
          />

          <div className="absolute top-4 left-5">
            <Search stroke="#1a202c" />
          </div>
        </div>

        {/* filter */}
        <button className="w-25 h-14 border border-dark3 dark:bg-[#23262B] dark:border-none shrink-0  flex items-center gap-2 justify-center bg-dark5 rounded-lg">
          <SlidersHorizontal />{" "}
          <span className="text-primary font-medium">Filters</span>
        </button>
      </div>

      {/* dropdown */}
      <div className=" grid grid-cols-4 gap-6 mt-5">
        <DropdownComponent title="Location" dropdownInfo={dropdownInfo} />
        <DropdownComponent title="Amount Spent" dropdownInfo={dropdownInfo} />
        <DropdownComponent
          title="Transaction list Date"
          icon={<Calendar1 />}
          dropdownInfo={dropdownInfo}
        />
        <DropdownComponent
          title="Type of transaction"
          dropdownInfo={dropdownInfo}
        />
      </div>

      {/* main table */}

      <div className="mt-5">
        <table className="w-full px-6">
          <thead>
            <tr className="text-dark2 grid grid-cols-4 border-b border-dark3 dark:border-gray-700 w-full py-5">
              <th className="flex items-center gap-8 ">
                <input type="checkbox" className="" />
                <span className="flex items-center gap-3 text-base font-medium">
                  {" "}
                  Customer name <ArrowUpDown size={16} />
                </span>
              </th>
              <th className="flex items-center gap-3 text-base font-medium">
                Email <ArrowUpDown size={16} />
              </th>
              <th className="flex items-center gap-3 text-base font-medium">
                Location <ArrowUpDown size={16} />
              </th>
              <th className="flex items-center gap-3 text-base font-medium">
                Spent <ArrowUpDown size={16} />
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className=" grid grid-cols-4 border-b border-dark3 dark:border-gray-700 w-full py-5"
              >
                <td className="flex items-center gap-8 ">
                  <input type="checkbox" className="" />
                  <div className="flex items-center gap-3 text-base font-medium">
                    <img src={data?.avatar} alt={data?.name} />
                    <p className=" font-semibold">{data?.name}</p>
                  </div>
                </td>
                <td className="flex items-center gap-3 text-base font-medium">
                  {data?.email}
                </td>
                <td className="flex items-center gap-3 text-base font-medium">
                  {data?.location}
                </td>
                <td className="flex items-center gap-3 text-base font-medium">
                  <div className="flex justify-between items-center w-full">
                    <p>{data?.spent}</p>

                    <Ellipsis stroke="#A0AEC0" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold text-dark2">Show result:</p>
            <button className="flex items-center gap-5 p-3  border border-dark3 dark:border-gray-700 rounded-lg">
              3 <ChevronDown size={16} stroke="#A0AEC0" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-dark2">
            <ChevronLeft className="mr-4" />
            <button className="bg-[#D9FBE6] dark:bg-[#23262B] px-6 py-2.5 text-primary dark:text-white rounded-lg">
              1
            </button>
            <button className="hover:bg-[#D9FBE6] px-6 py-2.5 hover:text-primary rounded-lg">
              2
            </button>
            <ChevronRight className="ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
