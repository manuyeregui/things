import { motion } from "framer-motion";

export default function Card({
  data,
  imgVariants,
  textStyle,
  activeIdx,
  cardIdx,
  width,
  parallax,
  scale,
}) {
  return (
    <motion.div
      key={data.title}
      className="h-full flex flex-col items-center justify-center overflow-hidden font-inter relative"
      variants={imgVariants}
      initial={false}
      animate="inner"
    >
      <motion.img
        src={data.pic}
        className="absolute"
        initial={false}
        animate={{
          x: (activeIdx - cardIdx) * width * parallax,
          width: "110%",
          maxWidth: "110%",
          scale: 1 + Math.abs(activeIdx - cardIdx) * scale,
        }}
        transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      />
      <div
        className={`transition-all h-20 w-full p-4  flex flex-col justify-between absolute bottom-0 ${textStyle}`}
      >
        <h2 className="font-semibold text-xl">{data.title}</h2>
        <h6 className="text-sm">{data.subtitle}</h6>
      </div>
    </motion.div>
  );
}
