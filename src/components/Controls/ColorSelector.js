import { motion } from "framer-motion";
import React from "react";

export default function ColorSelector(props) {
  const colors = props.colors;
  const active = Number(props.active);

  return (
    <div className="px-4 py-1 my-3 flex justify-between items-center text-gray-400 cursor-default">
      <div className="flex space-x-3">
        <i className={`${props.icon} text-xl flex items-center`} />
        <span className="text-lg capitalize">{props.title}</span>
      </div>
      <div className="w-28 h-10 py-1 px-0.5">
        <div className="rounded-md flex w-full h-full">
          {colors.map((e, i) => (
            <div className="h-full w-full relative" key={i}>
              <div
                className={`h-full w-full ${e.code} ${
                  i === 0 && "rounded-tl-md rounded-bl-md"
                } ${i === colors.length - 1 && "rounded-tr-md rounded-br-md"}`}
                onClick={props.handleColor}
                id={i}
                key={i}
              />
              {active === i && (
                <motion.div
                  className={`h-full w-full absolute z-10 inset-0 border-3 rounded-md border-blue-500`}
                  style={{ scale: 1.1 }}
                  layoutId="selected"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
