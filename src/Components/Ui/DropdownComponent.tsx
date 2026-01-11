// import { ChevronDown } from "lucide-react";

import { ChevronDown } from "lucide-react";
import GenarelDropdownComponent from "./GenarelDropdownComponent";
type DropdownInfoType = {
  data: string;
};

type DropdownProps = {
  title: string;
  icon?: React.ReactElement;
  dropdownInfo: DropdownInfoType[];
};

export default function DropdownComponent({
  title,
  icon = <ChevronDown size={16} />,
  dropdownInfo,
}: DropdownProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold">{title}</h3>
      {/* <div className="flex items-center justify-between bg-dark5 h-14 px-4 rounded-lg text-[#a0aec0] cursor-pointer">
        State or provinence {icon}
      </div> */}

      {}

      <GenarelDropdownComponent
        title="State or provinence"
        titleClass="justify-between text-[#a0aec0] h-12 px-4"
        dropdownInfo={dropdownInfo}
        icon={icon}
      />
    </div>
  );
}
