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
import Customer1 from "../../assets/customer1.png";
import Customer2 from "../../assets/customer2.png";
import Customer3 from "../../assets/customer3.png";
import DropdownComponent from "./DropdownComponent";

export default function TableComponent() {
  const tableData = [
    {
      name: "Devon Lane",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer1,
    },
    {
      name: "Bessie Cooper",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer2,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
  ];

  return (
    <div className="w-full bg-white py-5  px-6 mt-7 rounded-lg">
      {/* search bar */}
      <div className="w-full flex  items-center gap-5">
        <div className="relative h-14 w-full">
          <input
            type="text"
            className=" h-full w-full bg-dark5 flex-1 rounded-lg pl-15 pr-5 focus:outline-1 focus:outline-primary"
            placeholder="Search by name, email, or others..."
          />

          <div className="absolute top-4 left-5">
            <Search stroke="#1a202c" />
          </div>
        </div>

        {/* filter */}
        <button className="w-25 h-14 border border-dark3 shrink-0  flex items-center gap-2 justify-center bg-dark5 rounded-lg">
          <SlidersHorizontal />{" "}
          <span className="text-primary font-medium">Filters</span>
        </button>
      </div>

      {/* dropdown */}
      <div className=" grid grid-cols-4 gap-6 mt-5">
        <DropdownComponent title="Location" />
        <DropdownComponent title="Amount Spent" />
        <DropdownComponent title="Transaction list Date" icon={<Calendar1 />} />
        <DropdownComponent title="Type of transaction" />
      </div>

      {/* main table */}

      <div className="mt-5">
        <table className="w-full px-6">
          <tr className="text-dark2 grid grid-cols-4 border-b border-dark3 w-full py-5">
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

          {tableData.map((data, index) => (
            <tr
              key={index}
              className=" grid grid-cols-4 border-b border-dark3 w-full py-5"
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
        </table>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold text-dark2">Show result:</p>
            <button className="flex items-center gap-5 p-3  border border-dark3 rounded-lg">
              3 <ChevronDown size={16} stroke="#A0AEC0" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-dark2">
            <ChevronLeft className="mr-4" />
            <button className="bg-[#D9FBE6] px-6 py-2.5 text-primary rounded-lg">
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
