import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Submission() {
  const guidelines = [
    {
      title: "Formatting & Style",
      text: "All papers must be formatted using the official conference template (standard double-column IEEE format). The maximum page limit is 6 pages, including references.",
    },
    {
      title: "Originality & Plagiarism",
      text: "Submitted papers must present original, unpublished research. The plagiarism level must be below 15% (Turnitin check). Self-plagiarism must be avoided.",
    },
    {
      title: "Double-Blind Review",
      text: "The conference uses a double-blind peer-review workflow. Authors must remove their names, affiliations, and acknowledgments from the initial PDF submission.",
    },
  ];

  return (
    <section id="submission" className="section-padding submission-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Join the Discussion</span>
          <h2 className="section-title">Submission & Call For Papers</h2>
          <div className="section-divider"></div>
        </div>

        <div className="submission-grid">
          {/* Paper Submission Guidelines */}
          <Card className="submission-card">
            <h3>Author Guidelines</h3>
            <p className="submission-intro">
              We welcome submissions of high-quality research papers describing original and unpublished work on any aspect of Machine Intelligence, Data Analytics, and Sustainability.
            </p>

            <div className="guidelines-list">
              {guidelines.map((g, idx) => (
                <div key={idx} className="guideline-item">
                  <div className="guideline-num">{idx + 1}</div>
                  <div className="guideline-content">
                    <h4>{g.title}</h4>
                    <p>{g.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Action CTAs */}
          <div className="submission-actions-col">
            <Card className="action-cta-card cmt-card">
              <div className="card-badge">Portal</div>
              <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3>Paper Submission</h3>
              <p>
                Submit your research papers through the Microsoft CMT conference management system. If you do not have an account, you will need to register first.
              </p>
              <Button href="https://cmt3.research.microsoft.com/" target="_blank" variant="primary">
                Go to CMT Submission Portal
              </Button>
            </Card>

            <Card className="action-cta-card download-card">
              <div className="card-badge">PDF</div>
              <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3>Call For Papers</h3>
              <p>
                Download the official Call For Papers document to view detailed submission instructions, scopes, guidelines, and topics.
              </p>
              <Button href="/assets/documents/CFP.pdf" target="_blank" variant="secondary">
                Download CFP Brochure
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
