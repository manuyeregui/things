import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Slider({
  min,
  max,
  defaultValue,
  decimals,
  handler,
  clickable,
  title,
  unit,
  barProgress,
}) {
  const mainColor = "#626262";
  const bgColor = "#ffffff1a";

  const [value, setValue] = useState(defaultValue);

  const constraintsRef = useRef();
  const handleRef = useRef();
  const progressBarRef = useRef();

  const handleSize = 15;

  const handleX = useMotionValue(0);
  const progress = useTransform(handleX, (v) => v + handleSize / 2);
  const progressiveBackground = useMotionTemplate`linear-gradient(90deg, ${mainColor} ${progress}px, ${bgColor} 0)`;

  const handleDrag = () => {
    const handleBounds = handleRef.current.getBoundingClientRect();
    const middleOfHandle = handleBounds.x + handleBounds.width / 2;
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();

    const newProgress =
      (middleOfHandle - progressBarBounds.x) / progressBarBounds.width;
    const newValue = (newProgress * (max - min) + min).toFixed(decimals);

    setValue(newValue);
  };

  useEffect(() => {
    const newProgress = (value - min) / (max - min);
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();

    handleX.set(newProgress * progressBarBounds.width);
    /*console.log({
            value: Number(value),
            newProgress,
            handleX: handleX.current,
            progressBarBounds: progressBarBounds.width
        });*/
  }, [handleX, max, min, value]);

  useEffect(() => {
    handler(value);
  }, [value]);

  const clamp = (number) => {
    return Math.max(min, Math.min(number, max));
  };

  const handleInput = (e) => {
    const value = e.target.value;
    value < min ? setValue(min) : value > max ? setValue(max) : setValue(value);
  };

  return (
    <div className="">
      <h2 className="mb-2">
        {title}

        {unit && <span className=" ml-2 italic">- {unit}</span>}
      </h2>

      <div className="flex space-x-4">
        <div className="relative flex flex-col justify-center mb-1 w-full">
          <motion.div
            id="slider-bg"
            className="absolute w-full h-0.5"
            style={{
              background: barProgress ? progressiveBackground : bgColor,
            }}
          />

          <div
            className="absolute h-1 opacity-0"
            id="progress-bar"
            ref={progressBarRef}
            style={{
              left: handleSize / 6,
              right: handleSize / 6,
            }}
          />

          <div ref={constraintsRef}>
            <motion.div
              id="handler"
              ref={handleRef}
              className="relative z-10 bg-gray-400"
              drag="x"
              dragMomentum={false}
              dragElastic={0}
              dragConstraints={constraintsRef}
              onDrag={handleDrag}
              style={{
                width: handleSize / 3,
                height: handleSize,
                x: handleX,
              }}
              whileTap={{ scaleX: 1.5 }}
              whileHover={{ scaleX: 1.5 }}
              whileDrag={{ scaleX: 1.5 }}
              transition={{ duration: 0 }}
            />
          </div>

          {clickable && (
            <div
              id="clickable-bar"
              className="absolute w-full h-4"
              onPointerDown={(event) => {
                let { left, width } =
                  progressBarRef.current.getBoundingClientRect();
                let position = event.pageX - left;
                let newProgress = position / width;
                let newValue = newProgress * (max - min);
                setValue(clamp(newValue).toFixed(decimals));
                animate(handleX, newProgress * width);
              }}
            />
          )}
        </div>

        <div className="flex items-center">
          <div className="overflow-hidden border-b-2 border-white/10 w-16">
            <input
              type="number"
              value={value}
              onChange={handleInput}
              className="outline-none bg-transparent px-3 pb-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
