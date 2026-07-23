"use client";

import React from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Decorative animated mesh grids */}
      <div className="hero-bg-network"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-content">

        <h1 className="hero-title">
          <img src="/sankalp_logo_final.png" alt="SANKALP Logo" className="hero-title-logo" />
          SANKALP
        </h1>

        <h2 className="hero-heading">
          International Conference on Advances of Engineering
          <br />
          & Intelligent Technologies for a Sustainable Future
        </h2>

        <motion.div
          className="hero-date-badge"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            22-23 January 2027
          </motion.span>
        </motion.div>

        <div className="hero-organizer">
          Organized by School Of Engineering and Technology MGM University, Chhatrapati Sambhajinagar
        </div>

        <div className="hero-buttons">
          <Button
            href="#submission"
            onClick={(e) => handleScrollTo(e, "submission")}
            variant="primary"
            className="hero-btn"
          >
            Submit Paper
          </Button>

          <Button
            href="#registration"
            onClick={(e) => handleScrollTo(e, "registration")}
            variant="secondary"
            className="hero-btn"
          >
            Register Now
          </Button>
        </div>

      </div>
    </section>
  );
}