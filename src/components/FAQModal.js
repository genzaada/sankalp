"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQModal({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // Disable body scrolling when modal/drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const faqs = [
    {
      question: "What is ICAEITSF 2027?",
      answer: "ICAEITSF 2027 is the 3rd International Conference on Advances in Engineering and Intelligent Technologies for a Sustainable Future . It brings together leading researchers, academicians, and industry experts to share advancements in Advances in Engineering and Intelligent Technologies for a Sustainable Future "
    },
    {
      question: "Who can participate?",
      answer: "The conference is open to researchers, academicians, students, industry professionals, and tech enthusiasts interested in AI, machine intelligence, and data analytics."
    },
    {
      question: "How do I submit a paper?",
      answer: "Papers can be submitted electronically through the CMT Portal. Please follow the IEEE paper format guidelines and ensure your submission is original and unpublished."
    },
    {
      question: "Is accommodation available?",
      answer: "Yes, comfortable accommodation options are available for registered delegates and authors at the MGM University campus guest house and nearby partner hotels."
    },
    {
      question: "Will accepted papers be published?",
      answer: "Yes, all accepted and presented papers will be submitted for publication in reputable conference proceedings (such as IEEE Xplore, subject to meeting technical quality standards) and indexed in major databases."
    },
    {
      question: "How can I contact the organizers?",
      answer: "You can reach the organizing committee via email at icamida@mgmu.ac.in or by calling the contact numbers listed in the Contact section of the website."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="faq-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />

          {/* FAQ Drawer Panel */}
          <motion.div
            className="faq-drawer glass-card"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <div className="faq-header">
              <div className="faq-title-area">
                <span className="faq-badge">Help Desk</span>
                <h3 className="faq-title">Frequently Asked Questions</h3>
              </div>
              <button className="faq-close-btn" onClick={onClose} aria-label="Close FAQ panel">
                &times;
              </button>
            </div>

            <div className="faq-body">
              <div className="faq-accordion-list">
                {faqs.map((faq, idx) => {
                  const isExpanded = activeIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`faq-accordion-item ${isExpanded ? "expanded" : ""}`}
                    >
                      <button
                        className="faq-accordion-trigger"
                        onClick={() => toggleFAQ(idx)}
                        aria-expanded={isExpanded}
                      >
                        <span className="faq-question-text">{faq.question}</span>
                        <span className="faq-accordion-icon">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>
                      <motion.div
                        className="faq-accordion-content"
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="faq-answer-inner">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
