import React from "react";
import GenarelDropdownComponent from "./GenarelDropdownComponent";

type DropdownInfoType = {
  data: string;
};

type PropsType = {
  children: React.ReactNode;
  title: string;
  dropdownInfo: DropdownInfoType[];
};

export default function ChartComponent({
  children,
  title,
  dropdownInfo,
}: PropsType) {
  return (
    <div className="py-3 pr-6 bg-white dark:bg-[#1D1E24] dark:text-white rounded-lg">
      <div className="flex justify-between mb-3 pb-1.5 ml-6 border-b border-dark3 dark:border-gray-700">
        <h3 className="text-2xl font-bold">{title}</h3>
        {/* status */}
        <div className="flex items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>{" "}
            Pending
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 block"></span>{" "}
            Signed
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 block"></span>{" "}
            Last
          </div>
        </div>

        <GenarelDropdownComponent
          dropdownInfo={dropdownInfo}
          title="Jan 10 - Jan 16"
        />
      </div>

      {children}
    </div>
  );
}
