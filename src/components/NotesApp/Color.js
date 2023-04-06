import { animate, motion } from "framer-motion";
import { NotesContext } from "./NotesContext";
import { useContext } from "react";
import { useRef } from "react";

export default function Color({ data, index }) {
  const { notes, setNotes } = useContext(NotesContext);

  const ref = useRef();

  const Add = () => {
    let id = 0;
    if (notes[0]) id = notes[0].id + 1;

    const bounds = ref.current.getBoundingClientRect();

    setNotes([
      {
        id,
        color: data.code,
        colorName: data.name,
        initialBounds: bounds,
      },
      ...notes,
    ]);

    animate(ref.current, { opacity: [0, 1] }, { duration: 1, ease: "linear" });
  };

  return (
    <motion.div
      ref={ref}
      style={{
        zIndex: 10 - index,
        backgroundColor: data.code,
      }}
      className="rounded-full w-8 h-8 relative cursor-pointer"
      initial={{
        y: -52,
        display: "none",
      }}
      animate={{
        y: 0,
        display: "block",
        transition: { delay: 0.2 * index, duration: 0.2, type: "tween" },
      }}
      exit={{
        y: -52 * (index + 1),
        transition: { type: "lineal", delay: 0.05 * index },
      }}
      onClick={Add}
    />
  );
}
