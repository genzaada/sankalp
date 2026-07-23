import React from "react";
import Card from "./ui/Card";

export default function Contact() {
  const contacts = [
    {
      email: "hodmechsoet@mgmu.ac.in",
      phone: "+91-",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      
      email: "hodcivilsoet@mgmu.ac.in",
      phone: "+91-",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Information</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Address & General Card */}
          <Card className="contact-info-card">
            <div className="contact-info-header">
              <svg className="contact-hdr-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3>Venue & Location</h3>
            </div>
            <p className="contact-address">
              MGM University Campus, <br />
              N-6, CIDCO, Chhatrapati Sambhajinagar, <br />
              Maharashtra, India - 431003
            </p>

            <div className="map-placeholder">
              {/* Clean Map UI layout showing coordinates */}
              <div className="map-overlay-info">
                <span>Latitude: 19.8732° N</span>
                <span>Longitude: 75.3610° E</span>
              </div>
              <div className="map-badge">MGM University Campus</div>
            </div>
          </Card>

          {/* Direct Chair Contacts */}
          <div className="contact-chairs-col">
            {contacts.map((c, idx) => (
              <Card key={idx} className="chair-contact-card">
                <div className="chair-contact-icon-frame">{c.icon}</div>
                <div className="chair-contact-details">
                  <span className="chair-role-label">{c.role}</span>
                  <h4>{c.name}</h4>
                  <div className="chair-meta-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${c.email}`}>{c.email}</a>
                  </div>
                  <div className="chair-meta-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${c.phone}`}>{c.phone}</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
