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
  const animationVariants = {
    hidden: {
      ...(direction === "up" && { y: "10%" }),
      ...(direction === "down" && { y: "-10%" }),
      ...(direction === "left" && { x: "10%" }),
      ...(direction === "right" && { x: "-10%" }),
      opacity: 0.1,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      key="page"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default PageMotion;
