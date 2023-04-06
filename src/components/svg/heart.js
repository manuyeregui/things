import { motion } from "framer-motion";
import React from "react";

export default function heart({ size, style, speed, delay }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      initial={{ opacity: 0 }}
      animate={{
        scale: 0.9,
        opacity: 1,
        transition: {
          scale: {
            duration: 0.00001,
            repeatDelay: speed,
            repeatType: "reverse",
            repeat: Infinity,
          },
          opacity: {
            duration: 0.00001,
            delay,
          },
        },
      }}
    >
      <g clip-path="url(#clip0_1_2)">
        <path
          d="M5.5 9.5H6.5V8.5H7.5V7.5H8.5V6.5H9.5V5.5H10.5V2.5H9.5V1.5H8.5V0.5H7.5V1.5H6.5V2.5H4.5V1.5H3.5V0.5H2.5V1.5H1.5V2.5H0.5V5.5H1.5V6.5H2.5V7.5H3.5V8.5H4.5V9.5H5.5ZM5.5 9.5V11"
          stroke="black"
        />
        <path
          d="M1.5 2.5V5.5H2.5V6.5H3.5V7.5H4.5V8.5H5.5H6.5V7.5H7.5V6.5H8.5V5.5H9.5V2.5H8.5V1.5H8H7.5V2.5H6.5V3.5H4.5V2.5H3.5V1.5H2.5V2.5H1.5Z"
          fill="#FF0000"
        />
        <path
          d="M5.5 8.5H6.5V7.5H7.5V6.5H8.5V5.5H9.5V2.5H8.5V1.5H8H7.5V2.5H6.5V3.5H4.5V2.5H3.5V1.5H2.5V2.5H1.5V5.5H2.5V6.5H3.5V7.5H4.5V8.5H5.5ZM5.5 8.5V10"
          stroke="#FF0000"
        />
        <path d="M7 2.5H8.5V4" stroke="white" />
      </g>
      <defs>
        <clip-path id="clip0_1_2">
          <rect width="11" height="11" fill="white" />
        </clip-path>
      </defs>
    </motion.svg>
  );
}
