import { motion } from "framer-motion";
import React from "react";

export default function Skeleton({ margin, width, height, dark, variants }) {
  return (
    <motion.div
      style={{
        opacity: 0.1,
        borderRadius: 5,
        marginTop: margin,
        marginBottom: margin,
        width,
        height,
        backgroundColor: dark ? "#000" : "#fff",
      }}
      variants={variants}
      initial="initial"
      animate="animate"
    />
  );
}
