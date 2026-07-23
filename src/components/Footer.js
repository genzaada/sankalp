"use client";

import React from "react";

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} <strong>MGM University</strong>. All Rights Reserved.</p>
          <span className="footer-credit">ICAEITSF 2027 Portal | Organized by Department of SOET, MGM University</span>
        </div>

        <div className="footer-scroll-top">
          <a href="#" onClick={handleScrollToTop} aria-label="Scroll to top" className="scroll-top-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}