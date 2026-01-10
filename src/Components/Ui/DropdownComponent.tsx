import { ChevronDown } from "lucide-react";

type DropdownProps = {
  title: string;
  icon?: React.ReactElement;
};

export default function DropdownComponent({
  title,
  icon = <ChevronDown />,
}: DropdownProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold">{title}</h3>
      <div className="flex items-center justify-between bg-dark5 h-14 px-4 rounded-lg text-[#a0aec0] cursor-pointer">
        State or provinence {icon}
      </div>
    </div>
  );
}
