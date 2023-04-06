import { motion } from "framer-motion";

export default function CardsMap({ length, active, setIndex }) {
  const changeIndex = async (i) => {
    setIndex(i);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-3 p-2 relative">
      {[...Array(length)].map((e, i) => (
        <motion.div
          key={i}
          className="rounded-full cursor-pointer border-2 border-white"
          animate={{
            width: active === i ? 40 : 8,
            height: 8,
            backgroundColor:
              active === i
                ? "rgb(255, 255, 255 / 0)"
                : "rgb(255, 255, 255 / 1)",
          }}
          onClick={() => changeIndex(i)}
        />
      ))}
    </div>
  );
}
