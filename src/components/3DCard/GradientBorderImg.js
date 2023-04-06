import React from "react";

export default function GradientBorderImg({
  isHovering,
  image,
  angle,
  glow,
  borderRadius,
  width,
  height,
  bgColor,
}) {
  return (
    <img
      src={image}
      className={
        "relative border-2 border-transparent transition-all " + bgColor
      }
      style={{
        borderRadius,
        width,
        height,
        background:
          isHovering &&
          "linear-gradient(" +
            angle +
            "deg, rgb(255, 255, 255," +
            glow +
            "), transparent) border-box",
      }}
    />
  );
}
