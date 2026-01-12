import { ChevronDown } from "lucide-react";
import GenarelDropdownComponent from "./GenarelDropdownComponent";

export default function CalenderComponent() {
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
    <div className="p-5 bg-white dark:bg-[#1D1E24]">
      <h3 className="text-lg font-semibold mb-5 dark:text-white ">
        Select Date
      </h3>
      <GenarelDropdownComponent dropdownInfo={dropdownInfo}>
        <div className="flex items-center justify-between font-semibold text-dark2 dark:text-white">
          June 2025 <ChevronDown />
        </div>
      </GenarelDropdownComponent>

      <div className="grid grid-cols-7 p-6.5 bg-[#F7FAFC] dark:bg-[#23262B] rounded-2xl gap-5 w-full mt-5">
        <div className="text-dark2 font-medium">Sat</div>
        <div className="text-dark2 font-medium">Sun</div>
        <div className="text-dark2 font-medium">Mon</div>
        <div className="text-dark2 font-medium">Tues</div>
        <div className="text-dark2 font-medium">Wed</div>
        <div className="text-dark2 font-medium">Thurs</div>
        <div className="text-dark2 font-medium">Fri</div>

        {Array.from({ length: 30 }).map((_, index) => (
          <div className="font-semibold dark:text-white">{index + 1}</div>
        ))}
      </div>
    </div>
  );
}
