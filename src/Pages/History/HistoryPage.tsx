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
import ChattingComponent from "../../Components/Ui/ChattingComponent";
import DropdownComponent from "../../Components/Ui/DropdownComponent";
import MyWalletComponent from "../../Components/Ui/MyWalletComponent";

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

export default function HistoryPage() {
  const tableData = [
    {
      name: "Devon Lane",
      date: "Apr 20, 2023",
      amount: "$3,987.00",
      paymentStatus: "paid",
      status: "cancelled",
      avatar: Customer1,
    },
    {
      name: "Devon Lane",
      date: "Apr 20, 2023",
      amount: "$3,987.00",
      paymentStatus: "unpaid",
      status: "cancelled",
      avatar: Customer2,
    },
    {
      name: "Devon Lane",
      date: "Apr 20, 2023",
      amount: "$3,987.00",
      paymentStatus: "paid",
      status: "cancelled",
      avatar: Customer3,
    },
    {
      name: "Devon Lane",
      date: "Apr 20, 2023",
      amount: "$3,987.00",
      paymentStatus: "paid",
      status: "approved",
      avatar: Customer3,
    },
    {
      name: "Devon Lane",
      date: "Apr 20, 2023",
      amount: "$3,987.00",
      paymentStatus: "unpaid",
      status: "cancelled",
      avatar: Customer3,
    },
    {
      name: "Devon Lane",
      date: "Apr 20, 2023",
      amount: "$3,987.00",
      paymentStatus: "paid",
      status: "cancelled",
      avatar: Customer3,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-8 m-12">
      {/* left */}
      <div className="col-span-9 space-y-8">
        {/*table */}

        <div className="col-span-full mb-12">
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
              <DropdownComponent
                title="Amount Spent"
                dropdownInfo={dropdownInfo}
              />
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
                  <tr className="text-dark2 grid grid-cols-5 border-b border-dark3 dark:border-gray-700 w-full py-5">
                    <th className="flex items-center gap-8 ">
                      <input type="checkbox" className="" />
                      <span className="flex items-center gap-3 text-base font-medium">
                        {" "}
                        Customer name <ArrowUpDown size={16} />
                      </span>
                    </th>
                    <th className="flex items-center gap-3 text-base font-medium">
                      Date <ArrowUpDown size={16} />
                    </th>
                    <th className="flex items-center gap-3 text-base font-medium">
                      Amount <ArrowUpDown size={16} />
                    </th>
                    <th className="flex items-center gap-3 text-base font-medium">
                      Payment <ArrowUpDown size={16} />
                    </th>

                    <th className="flex items-center gap-3 text-base font-medium">
                      Status <ArrowUpDown size={16} />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((data, index) => (
                    <tr
                      key={index}
                      className=" grid grid-cols-5 border-b border-dark3 dark:border-gray-700 w-full py-5"
                    >
                      <td className="flex items-center gap-8 ">
                        <input type="checkbox" className="" />
                        <div className="flex items-center gap-3 text-base font-medium">
                          <img src={data?.avatar} alt={data?.name} />
                          <p className=" font-semibold">{data?.name}</p>
                        </div>
                      </td>
                      <td className="flex items-center gap-3 text-base font-medium">
                        {data?.date}
                      </td>
                      <td className="flex items-center gap-3 text-base font-medium">
                        {data?.amount}
                      </td>
                      <td className="flex items-center gap-3 text-base font-medium">
                        <div
                          className={`${
                            (data?.paymentStatus).toLocaleLowerCase() === "paid"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-500"
                          }  text-sm font-semibold py-1.5 px-4 rounded-md capitalize`}
                        >
                          {data?.paymentStatus}
                        </div>
                      </td>
                      <td className="flex items-center gap-3 text-base font-medium">
                        <div className="flex justify-between items-center w-full">
                          <p
                            className={`${
                              (data?.status).toLocaleLowerCase() === "cancelled"
                                ? "bg-orange-50 text-amber-500"
                                : "bg-green-100 text-green-600"
                            }  text-sm font-semibold py-1.5 px-4 rounded-md capitalize `}
                          >
                            {data?.status}
                          </p>

                          <Ellipsis stroke="#A0AEC0" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-sm font-semibold text-dark2">
                    Show result:
                  </p>
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
        </div>
      </div>

      {/* right */}
      <div
        className="col-span-3
      "
      >
        <MyWalletComponent />
        <ChattingComponent />
      </div>
    </div>
  );
}
