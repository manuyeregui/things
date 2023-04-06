import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Select(props) {
  const active = Number(props.state);
  const [isOpen, setIsOpen] = useState(false);

  const options = props.options;

  return (
    <div className={` rounded-md cursor-default overflow-hidden`}>
      <div
        className={`flex justify-between items-center cursor-pointer ${
          isOpen && "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${isOpen && "text-white"}`}>{props.title}</span>

        <span
          className={`material-symbols-outlined flex items-center ${
            isOpen && "-rotate-90"
          }`}
        >
          chevron_left
        </span>
      </div>

      {isOpen && (
        <div className={`flex flex-col ml-2 mt-2 overflow-hidden`}>
          {options.map((e, i) => (
            <button
              className={`py-2 px-3 text-left rounded-md flex items-center hover:text-white
                                        ${
                                          active === i &&
                                          " pointer-events-none text-green-600"
                                        }`}
              onClick={props.function}
              value={i}
              key={i}
            >
              {i + " -- " + e.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
