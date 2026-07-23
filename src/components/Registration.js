import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Registration() {
  const categories = [
    {
      title: "Student Author",
      badge: "Academic",
      price: "INR 6,500",
      details: "For undergraduate, postgraduate, and PhD research students.",
      discount: "10% off for IEEE Members (INR 5,850)",
      popular: false,
    },
    {
      title: "Faculty Author",
      badge: "Academic",
      price: "INR 9,000",
      details: "For teachers, researchers, and university academic staff.",
      discount: "10% off for IEEE Members (INR 8,100)",
      popular: true,
    },
    {
      title: "Industry Author",
      badge: "Corporate",
      price: "INR 10,000",
      details: "For professionals, corporate researchers, and engineers.",
      discount: "Access to all conference tracks & industry events",
      popular: false,
    },
    {
      title: "Foreign Author",
      badge: "International",
      price: "INR 12,500",
      details: "For international participants and academic delegates.",
      discount: "Global networking opportunities",
      popular: false,
    },
    {
      title: "Attendee / Listener",
      badge: "General",
      price: "INR 3,000",
      details: "For non-author attendees seeking to listen and network.",
      discount: "Access to all keynotes and technical sessions",
      popular: false,
    },
  ];

  return (
    <section id="registration" className="section-padding registration-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Secure Your Spot</span>
          <h2 className="section-title">Registration Fees</h2>
          <div className="section-divider"></div>
        </div>

        <div className="registration-grid">
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              className={`pricing-card ${cat.popular ? "popular-card" : ""}`}
            >
              {cat.popular && <div className="card-ribbon">Most Popular</div>}
              <div className="pricing-card-header">
                <span className="pricing-badge">{cat.badge}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="pricing-price">{cat.price}</div>
              <p className="pricing-desc">{cat.details}</p>
              <div className="pricing-divider"></div>
              <div className="pricing-discount-wrapper">
                <svg className="pricing-discount-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="pricing-discount">{cat.discount}</span>
              </div>
              <Button href="#contact" variant={cat.popular ? "primary" : "secondary"} className="w-full pricing-btn">
                Register Interest
              </Button>
            </Card>
          ))}
        </div>

        <div className="registration-note">
          <p>
            * Note: To claim the student discount, a valid institutional ID must be uploaded. IEEE members must provide their IEEE membership number during registration.
          </p>
        </div>
      </div>
    </section>
  );
}
