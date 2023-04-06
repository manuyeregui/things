import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import GradientBorderImg from "./GradientBorderImg";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import BackgroundGlow from "./BackgroundGlow";

export default function Card({ glow, rotation }) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({});

  const cardRef = useRef();
  const [cardCenter, setCardCenter] = useState({});
  const [cardBounds, setCardBounds] = useState({});

  const width = 350;
  const height = 525;

  useEffect(() => {
    let handleBounds = cardRef.current.getBoundingClientRect();

    //get center of the card
    let center = {
      x: handleBounds.x + handleBounds.width / 2,
      y: handleBounds.y + handleBounds.height / 2,
    };
    setCardCenter(center);

    //get sides of the card
    let sides = {
      left: handleBounds.left,
      top: handleBounds.top,
    };
    setCardBounds(sides);

    //get mouse pos
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const rotationFactor = rotation * 0.001;
  const rotateY = rotationFactor * (mousePos.x - cardCenter.x);
  const rotateX = -rotationFactor * (mousePos.y - cardCenter.y);
  const rotateZ = (rotationFactor * (mousePos.x - cardCenter.x)) / 5;
  const angle = -(Math.atan2(rotateY, rotateX) * (180 / Math.PI));

  const variants = {
    mouseOn: {
      rotateY: rotateY + "deg",
      rotateX: rotateX + "deg",
      rotateZ: rotateZ + "deg",
    },
    mouseOut: {
      rotateY: 0,
      rotateX: 0,
      rotateZ: 0,
    },
  };

  return (
    <motion.div
      className="rounded-xl z-10 p-0.5 text-white select-none font-poppins absolute inset-0 m-auto overflow-hidden tracking-wide"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        width,
        height,
        transformStyle: "preserve-3d",
      }}
      variants={variants}
      animate={isHovering ? "mouseOn" : "mouseOut"}
      transition={{ duration: 0.1 }}
      ref={cardRef}
    >
      <BackgroundGlow
        isHovering={isHovering}
        width={width}
        height={height}
        glow={glow}
        mousePos={mousePos}
        cardBounds={cardBounds}
      />
      <div className="bg-mateblack/60 rounded-xl backdrop-blur-md w-full h-full p-6 relative flex flex-col justify-between">
        <div id="article">
          <GradientBorderImg
            image={logo}
            isHovering={isHovering}
            angle={angle}
            glow={glow}
            borderRadius="12px"
            width="100%"
          />

          <h2 className="mt-4 tracking-wider text-lg">Things</h2>

          <div
            id="separator"
            className="h-[2px] w-full rounded-full mt-1 mb-2 bg-white/30"
            style={{
              background:
                isHovering &&
                "linear-gradient(" +
                  angle +
                  "deg, rgb(255, 255, 255," +
                  glow / 1.5 +
                  "), transparent) border-box",
            }}
          />

          <span className="font-light">What is it about?</span>

          <p className="font-extralight text-sm leading-6 mt-2">
            Things is a personal project created with React.js that serves as a
            portfolio showcasing mini-projects of animations and good-looking
            UI. These are mainly created with Framer Motion.
          </p>
        </div>

        <div id="author" className="flex items-center space-x-3">
          <GradientBorderImg
            image={avatar}
            isHovering={isHovering}
            angle={angle}
            glow={glow}
            borderRadius="9999px"
            width="48px"
            height="48px"
          />

          <span className="font-light">manuyeregui</span>
        </div>
      </div>
    </motion.div>
  );
}
