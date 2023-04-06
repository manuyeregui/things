import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ControlPanel(props) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    box: {
      open: {
        left: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      close: {
        left: "-384px",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        transition: {
          delay: 0.2,
        },
      },
    },
    trigger: {
      open: {
        x: 0,
        color: "rgb(156 163 175)",
      },
      close: {
        x: 100,
        color: "rgb(0 0 0)",
        rotate: "-45deg",
        transition: {
          delay: 0.2,
        },
      },
    },
    content: {
      open: {
        x: 0,
        opacity: 1,
      },
      close: {
        x: -100,
        opacity: 0,
      },
    },
  };

  return (
    <>
      <div className="absolute left-0 h-screen pt-12 pl-20 w-80 font-mono z-10 select-none text-base text-white/60">
        <div className="space-y-4">{props.children}</div>
      </div>

      <Link to="/">
        <span className="material-symbols-outlined flex items-center absolute right-0 top-0 pt-12 pr-20 text-white/60">
          home
        </span>
      </Link>
    </>
  );
}
