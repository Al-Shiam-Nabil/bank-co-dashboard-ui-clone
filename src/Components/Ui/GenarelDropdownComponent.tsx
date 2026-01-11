import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type DropdownInfoType = {
  data: string;
};

type DropdownProps = {
  title?: string;
  icon?: React.ReactElement;
  dropdownInfo?: DropdownInfoType[];
  titleClass?: string;
  children?: React.ReactNode;
};

export default function GenarelDropdownComponent({
  title,
  icon = <ChevronDown size={16} />,
  dropdownInfo,
  titleClass,
  children,
}: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`${
          !children && "bg-dark4 dark:bg-[#23262B] rounded-lg py-2 px-3 "
        } cursor-pointer`}
      >
        {children ? (
          children
        ) : (
          <div>
            <p className={`${titleClass} flex items-center gap-1`}>
              {title}
              <span>{icon}</span>
            </p>
          </div>
        )}
      </div>

      {/* dropdown */}
      {dropdownOpen && (
        <ul className="absolute rounded-lg shadow-md dark:shadow-none shadow-gray-100 bg-white dark:bg-[#23262B] z-50 mt-1 w-full ">
          {dropdownInfo?.map((info, index) => (
            <li
              className="px-5 py-2 cursor-pointer hover:bg-dark5 dark:hover:bg-[#1D1E24] text-sm font-semibold capitalize"
              key={index}
            >
              {info?.data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
