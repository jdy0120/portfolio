import React from "react";
import { motion } from "motion/react";

interface PageMotionProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  style?: React.CSSProperties;
}

const PageMotion = ({
  children,
  direction = "up",
  style,
}: PageMotionProps) => {
  const initial = {
    ...(direction === "up" && { y: "10%" }),
    ...(direction === "down" && { y: "-10%" }),
    ...(direction === "left" && { x: "10%" }),
    ...(direction === "right" && { x: "-10%" }),
    opacity: 0,
  };
  const animate = {
    y: 0,
    x: 0,
    opacity: 1,
  };
  const exit = {
    ...(direction === "up" && { y: "-10%" }),
    ...(direction === "down" && { y: "10%" }),
    ...(direction === "left" && { x: "-10%" }),
    ...(direction === "right" && { x: "10%" }),
    opacity: 0,
  };
  return (
    <motion.div
      key="page"
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ delay: 0, duration: 0.4 }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default PageMotion;
