"use client";

import React, { useRef, useEffect } from "react";
import Card from "./ui/Card";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const dates = [
    {
      date: "July 15, 2026",
      title: "Call for Papers Announcement",
      status: "completed",
    },
    {
      date: "August 10, 2027",
      title: "Paper Submission Deadline",
      status: "completed",
    },
    {
      date: "October 15, 2027",
      title: "Notification of Acceptance",
      status: "active",
      note: "Under review",
    },
    {
      date: "December 15, 2027",
      title: "Final Camera-ready Paper",
      status: "pending",
    },
    {
      date: "January 23, 2027",
      title: "Conference Dates",
      status: "pending",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="timeline" className="section-padding timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Milestones</span>
          <h2 className="section-title">Important Dates</h2>
          <div className="section-divider"></div>
        </div>

        <motion.div
          ref={ref}
          className="timeline-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Background gray line */}
          <div className="timeline-line"></div>
          
          {/* Animated gold progress line */}
          <motion.div
            className="timeline-line-progress"
            variants={lineVariants}
          ></motion.div>

          {dates.map((d, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`timeline-node ${d.status} ${isEven ? "even" : "odd"}`}
                variants={nodeVariants}
              >
                <div className="timeline-badge-container">
                  <div className={`timeline-badge ${d.status}`}>
                    {d.status === "completed" ? (
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : d.status === "active" ? (
                      <div className="active-pulse"></div>
                    ) : (
                      <div className="pending-dot"></div>
                    )}
                  </div>
                </div>

                <Card className="timeline-card" hoverable={true}>
                  <span className={`date-label ${d.status}`}>{d.date}</span>
                  <h3>{d.title}</h3>
                  {d.note && <p className="date-note">{d.note}</p>}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
