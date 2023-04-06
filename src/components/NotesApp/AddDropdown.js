import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Color from "./Color";

export default function AddDropdown() {
  const [isActive, setIsActive] = useState(false);

  const colors = [
    {
      name: "blue",
      code: "#00d7fc",
    },
    {
      name: "green",
      code: "#e4ee90",
    },
    {
      name: "purple",
      code: "#b692fe",
    },
    {
      name: "yellow",
      code: "#ffc972",
    },
    {
      name: "orange",
      code: "#ff9b73",
    },
  ];

  const variants = {
    active: {
      y: [0, -8, 0],
      scale: [1, 0.8, 1],
      rotate: 225,
      transition: { duration: 0.5 },
    },
    inactive: {
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="flex flex-col items-center"
      style={{ filter: "url(#sticky-effect)" }}
    >
      <motion.div
        variants={variants}
        animate={isActive ? "active" : "inactive"}
        className="text-white bg-black cursor-pointer rounded-full flex justify-center items-center select-none w-11 h-11 z-20 relative"
        key="add"
        transition={{ when: "afterChildren" }}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="material-symbols-rounded">add</span>
      </motion.div>

      <div className="flex items-center flex-col mt-5 space-y-5">
        <AnimatePresence>
          {isActive &&
            colors.map((c, i) => <Color data={c} index={i} key={i} />)}
        </AnimatePresence>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="sticky-effect">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="sticky-effect"
            />
            <feComposite
              in="SourceGraphic"
              in2="sticky-effect"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
