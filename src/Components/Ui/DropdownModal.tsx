import React, { useState } from "react";

type DropdownProps = {
  children?: React.ReactNode;
  trigger: React.ReactNode;
};

export default function DropdownModal({ children, trigger }: DropdownProps) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  return (
    <div className="relative">
      <div onClick={() => setOpenDropdown((prev) => !prev)}> {trigger}</div>

      {openDropdown && (
        <div className="border bg-red-300 w-100 h-100 absolute top-full x-1000">
          {children}
        </div>
      )}
    </div>
  );
}
