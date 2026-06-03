import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
        filter: "blur(6px)",
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
          : { opacity: 0, ...directions[direction], filter: "blur(6px)" }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
