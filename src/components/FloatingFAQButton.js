"use client";

import React, { useState } from "react";
import FAQModal from "./FAQModal";

export default function FloatingFAQButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="floating-faq-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open Frequently Asked Questions"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e1c299" />
              <stop offset="100%" stopColor="#703c19" />
            </linearGradient>
          </defs>
          {/* AI/FAQ speech bubble icon with gradient fill */}
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.886.525 3.65 1.436 5.155L2.05 21.95a.5.5 0 0 0 .618.618l4.795-1.386A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.5-5.5a1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1c0-.828.672-1.5 1.5-1.5.828 0 1.5-.672 1.5-1.5S12.828 9 12 9s-1.5.672-1.5 1.5a.5.5 0 0 1-1 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5a1.5 1.5 0 0 1-1.5 1.5z"
            fill="url(#gold-copper-grad)"
          />
        </svg>
        <span className="faq-tooltip">Have Questions?</span>
      </button>

      <FAQModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
