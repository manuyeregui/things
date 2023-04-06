import React from "react";

export default function BackgroundGlow({
  isHovering,
  width,
  height,
  glow,
  mousePos,
  cardBounds,
}) {
  const gradientX = mousePos.x - cardBounds.left;
  const gradientY = mousePos.y - cardBounds.top;

  return (
    <div
      id="background-gradient"
      className="absolute blur-xl transition-opacity"
      style={{
        opacity: isHovering ? 1 : 0,
        width: width * 1.5,
        height: height * 1.5,
        backgroundImage:
          "radial-gradient(circle closest-side, rgb(255, 255, 255," +
          glow +
          "), transparent)",
        top: gradientY,
        left: gradientX,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
