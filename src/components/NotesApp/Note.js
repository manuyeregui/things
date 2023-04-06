import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "./Skeleton";

export default function Note({ data, index, animation, duration }) {
  const size = 240;
  const spaceX = 15;

  const initialX = (data.finalBounds.left - data.initialBounds.left) * -1;
  const initialY = (data.finalBounds.top - data.initialBounds.top) * -1;

  const variants = {
    travel: {
      initial: {
        x: initialX,
        y: initialY,
        height: data.initialBounds.width,
        width: data.initialBounds.width,
        borderRadius: 200,
        padding: 0,
      },
      animate: {
        x: (size + spaceX) * index,
        y: 0,
        height: size,
        width: size,
        borderRadius: 24,
        padding: 15,
        transition: {
          width: {
            delay: duration * 0.1,
            duration: duration * 0.5,
            type: "tween",
            ease: "easeOut",
          },
          height: {
            delay: duration * 0.1,
            duration: duration * 0.5,
            type: "tween",
            ease: "easeOut",
          },
          x: {
            duration: duration,
            type: "spring",
          },
          y: {
            duration: duration,
            type: "spring",
          },
          borderRadius: {
            duration: duration * 0.5,
          },
        },
      },
      skeleton: {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 0.1,
          transition: {
            delay: duration * 0.75,
            duration: 0.25,
          },
        },
      },
    },
    fade: {
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: (size + spaceX) * index,
        opacity: 1,
        transition: {
          x: {
            duration,
          },
          opacity: {
            duration: duration * (2 / 3),
            delay: duration * (1 / 3),
          },
        },
      },
      skeleton: {
        initial: {
          x: -25,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 0.1,
          transition: {
            x: {
              duration,
              delay: duration / 2,
            },
            opacity: {
              duration: duration * (1 / 3),
              delay: duration * (2 / 3),
            },
          },
        },
      },
    },
  };

  return (
    <motion.div
      className="text-xl absolute overflow-hidden"
      layout
      style={{
        backgroundColor: data.color,
        padding: 15,
        borderRadius: 24,
        width: size,
        height: size,
        x: (size + spaceX) * index,
      }}
      variants={variants[animation]}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        y: 100,
        transition: {
          delay: 0.1 * index,
          duration: 1,
        },
      }}
    >
      <Skeleton
        dark
        height={25}
        width={120 + 25 * (data.id % 3)}
        margin={12}
        variants={variants[animation].skeleton}
      />
      <Skeleton
        dark
        height={18}
        width={80 + 35 * (data.id % 3)}
        margin={8}
        variants={variants[animation].skeleton}
      />
      <Skeleton
        dark
        height={18}
        width={60 + 35 * (data.id % 3)}
        margin={8}
        variants={variants[animation].skeleton}
      />
      <Skeleton
        dark
        height={18}
        width={100 + 25 * (data.id % 3)}
        margin={8}
        variants={variants[animation].skeleton}
      />
    </motion.div>
  );
}
