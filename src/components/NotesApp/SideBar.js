import React from "react";
import AddDropdown from "./AddDropdown";

export default function SideBar() {
  return (
    <div className="h-full border-r-2 border-gray-200 w-28 space-y-8 p-5 flex flex-col items-center">
      <span className="font-medium tracking-tight">Things</span>

      <div className="w-full h-full">
        <AddDropdown />
      </div>
    </div>
  );
}
