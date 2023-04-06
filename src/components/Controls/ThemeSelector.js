import React from "react";

export default function ColorSelector({ icon, title, active, switchTheme }) {
  return (
    <div className="flex justify-between items-center cursor-default">
      <span>{title}</span>

      <button
        className={`flex relative overflow-hidden w-7 h-4 border border-white/60 ${
          active ? "text-white/30 justify-start" : "text-white justify-end"
        }`}
        onClick={switchTheme}
      >
        <div
          className={`h-full w-1/2 ${
            active ? "border-l-3 border-r" : "border-l border-r-3"
          } border-white/60`}
        />
      </button>
    </div>
  );
}
