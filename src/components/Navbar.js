"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "submission", label: "Submission" },
  { id: "tracks", label: "Tracks" },
  { id: "timeline", label: "Dates" },
  { id: "registration", label: "Registration" },
  { id: "speakers", label: "Speakers" },
  { id: "committee", label: "Committee" },
  { id: "tourism", label: "Tourism" },
  { id: "sponsors", label: "Sponsors" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLeftMenu = () => {
    setLeftMenuOpen(!leftMenuOpen);
    setIsOpen(false);
  };

  const toggleRightMenu = () => {
    setIsOpen(!isOpen);
    setLeftMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      setIsOpen(false);
      setLeftMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setLeftMenuOpen(false);

    const section = document.getElementById(id);
    if (!section) return;

    const offset = 90;
    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  return (
    <>
      <motion.header
        className="navbar-header"
        animate={{
          height: isScrolled ? 68 : 88,
          backgroundColor: isScrolled
            ? "rgba(7,10,19,.95)"
            : "rgba(7,10,19,.85)",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0,0,0,.25)"
            : "0 0 0 rgba(0,0,0,0)",
          borderBottomColor: isScrolled
            ? "rgba(255,255,255,.08)"
            : "rgba(255,255,255,.04)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
        }}
      >
        <div className="navbar-container">
          <button
            className="navbar-left-menu-btn"
            aria-label="Open left navigation menu"
            onClick={toggleLeftMenu}
          >
            <svg
              className="navbar-left-menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, "hero")}
          >
            <motion.img
              src="/mgm_logo.png"
              alt="MGM University Logo"
              className="navbar-logo-img"
              animate={{
                height: isScrolled ? 34 : 44,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            />
            SANKALP <span>2027</span>
          </a>

          <nav className="navbar-desktop">
            <ul className="navbar-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`navbar-link ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-cta-group">
            <button
              className="navbar-toggle-btn"
              aria-label="Toggle menu"
              onClick={toggleRightMenu}
            >
              <svg
                className="navbar-toggle-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
          <ul className="navbar-mobile-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`navbar-mobile-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.header>

      {/* Left Sidebar Drawer */}
      <div className={`navbar-left-drawer ${leftMenuOpen ? "open" : ""}`}>
        <div className="drawer-backdrop" onClick={() => setLeftMenuOpen(false)} />
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="drawer-brand">
              <img
                src="/mgm_logo.png"
                alt="MGM University Logo"
                className="drawer-logo-img"
              />
              SANKALP <span>2027</span>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setLeftMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="drawer-close-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="drawer-body">
            <div className="drawer-section">
              <h4 className="drawer-section-title">🔧 Admin Portal</h4>
              <ul className="drawer-menu-list">
                <li>
                  <a href="/admin?tab=overview" className="drawer-menu-link admin-drawer-link">
                    <span className="icon">📊</span> Admin Dashboard
                  </a>
                </li>
                <li>
                  <a href="/admin?tab=submissions" className="drawer-menu-link admin-drawer-link">
                    <span className="icon">📝</span> Review Submissions
                  </a>
                </li>
                <li>
                  <a href="/admin?tab=registrations" className="drawer-menu-link admin-drawer-link">
                    <span className="icon">👥</span> Manage Registrations
                  </a>
                </li>
                <li>
                  <a href="/admin?tab=dates" className="drawer-menu-link admin-drawer-link">
                    <span className="icon">📅</span> Update Milestones
                  </a>
                </li>
              </ul>
            </div>

            <div className="drawer-section">
              <h4 className="drawer-section-title">🧭 Quick Navigation</h4>
              <ul className="drawer-menu-list">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`drawer-menu-link ${
                        activeSection === item.id ? "active" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}