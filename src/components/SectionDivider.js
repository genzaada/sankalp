"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="section-divider-reveal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        className="divider-line"
        variants={lineVariants}
        style={{ transformOrigin: "right" }}
      />
      <motion.span className="divider-text" variants={textVariants}>
        Conference Overview
      </motion.span>
      <motion.div
        className="divider-line"
        variants={lineVariants}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}
