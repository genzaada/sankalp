import React from "react";
import Card from "./ui/Card";

export default function Sponsors() {
  const sponsors = [
    { name: "ISHRAE", type: "Technical Co-Sponsor (Requested)", desc: "India’s leading professional society advancing HVAC, refrigeration, indoor air quality, and sustainable building technologies." },
    { name: "IGBC", type: "Technical Partner (Proposed)", desc: "India’s premier green building certification body promoting sustainable and energy-efficient built environments. " },
    { name: "ASHRAE", type: "Institutional Partner", desc: "International professional society dedicated to sustainable technology for the built environment." },
    { name: "IAA", type: "Indexing Partner (Proposed)", desc: "Promoting excellence, ethical practices, and innovation across the marketing communications industry" },
    { name: "BEE", type: "Indexing Partner (Proposed)", desc: "National authority driving energy efficiency policies, standards, and conservation initiatives for sustainable development. " },
  ];

  return (
    <section id="sponsors" className="section-padding sponsors-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Partnerships</span>
          <h2 className="section-title">Technical & Financial Sponsors</h2>
          <div className="section-divider"></div>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((s, idx) => (
            <Card key={idx} className="sponsor-card">
              <div className="sponsor-logo-box">
                <h4>{s.name}</h4>
              </div>
              <span className="sponsor-type">{s.type}</span>
              <p className="sponsor-desc">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="sponsors-footer-card">
          <Card className="sponsors-callout-card" hoverable={false}>
            <h3>Financial Sponsorship Call</h3>
            <p>
              We welcome partnerships and financial sponsorships from local and national technology industries. Connect with our committee to explore exhibition stalls, company logo branding, and session-naming opportunities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
