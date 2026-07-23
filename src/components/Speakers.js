"use client";

import React, { useState } from "react";
import Card from "./ui/Card";
import Modal from "./ui/Modal";

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      id: 1,
      name: "Dr. XYZ",
      role: "Director General",
      org: "National Institute of KLM, Govt. of India, New Delhi",
      initials: "MT",
      gradient: "from-blue-600 to-indigo-800",
      bio: "Dr. XYZ Tripathi is a distinguished academic and research administrator currently serving as the Director General of KLM. Under his leadership, KLM has expanded its research footprint in capacity building and emerging tech courses like AI, cybersecurity, and IoT across India. He has over 25 years of experience in academic administration and tech-led governance.",
    },
    {
      id: 2,
      name: "Dr. ABC",
      role: "Vice Chancellor",
      org: "COEP Technological University, Pune",
      initials: "SB",
      gradient: "from-teal-600 to-emerald-800",
      bio: "Dr. ABC is an eminent professor and VC at COEP Tech University. Previously, he was associated with VJTI Mumbai and other premiere institutes. His research interests focus on digital signal processing, networks, and structural algorithms. He has chaired numerous IEEE committees and published extensively in global journals.",
    },
    {
      id: 3,
      name: "Dr. DEF",
      role: "Professor, CSRE",
      org: "Indian Institute of Technology, Bombay",
      talk: "Generative AI meets Geospatial AI: A New Era of Earth Modeling and Understanding",
      initials: "SD",
      gradient: "from-amber-500 to-red-700",
      bio: "Dr. DEF is a Professor at the Centre of Studies in Resources Engineering, IIT Bombay. His research lies at the intersection of Geospatial AI, standards-based systems, and cloud computing. His keynote will focus on the breakthrough applications of generative models in geographical data modeling.",
    },
    {
      id: 4,
      name: "Dr. GHI",
      role: "Professor, Dept. of CSE",
      org: "Indian Institute of Technology, Bombay",
      initials: "SC",
      gradient: "from-purple-600 to-pink-800",
      bio: "Dr. GHI is a globally renowned researcher in information retrieval, link analysis, web search algorithms, and machine learning. He holds a PhD from UC Berkeley and has worked with IBM Almaden. He is an ACM Fellow and recipient of the Shanti Swarup Bhatnagar Prize.",
    },
    {
      id: 5,
      name: "Dr. JKL",
      role: "Professor, Dept. of CSE",
      org: "IIIT Raipur",
      initials: "RI",
      gradient: "from-indigo-600 to-violet-800",
      bio: "Dr. JKL is a Professor at IIIT Raipur and former Dean at Pune Institute of Computer Technology. His research specializes in network security, cloud computing, and operating systems. He is an active member of the IEEE Computer Society and has supervised multiple doctoral scholars.",
    },
  ];

  return (
    <section id="speakers" className="section-padding speakers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Thought Leaders</span>
          <h2 className="section-title">Keynote Speakers</h2>
          <div className="section-divider"></div>
        </div>

        <div className="speakers-grid">
          {speakers.map((s) => (
            <Card
              key={s.id}
              className="speaker-card"
              onClick={() => setSelectedSpeaker(s)}
            >
              <div className="speaker-avatar-wrapper">
                {/* SVG avatar with initials and styled gradient */}
                <div className={`speaker-avatar ${s.gradient}`}>
                  <span className="avatar-initials">{s.initials}</span>
                  <div className="avatar-glow"></div>
                </div>
              </div>
              <div className="speaker-info">
                <h3>{s.name}</h3>
                <span className="speaker-role">{s.role}</span>
                <p className="speaker-org">{s.org}</p>
                {s.talk && (
                  <div className="speaker-talk-badge">
                    <strong>Talk:</strong> "{s.talk}"
                  </div>
                )}
                <span className="speaker-more-link">View Bio & Abstract &rarr;</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Speaker Bio Modal */}
      <Modal
        isOpen={selectedSpeaker !== null}
        onClose={() => setSelectedSpeaker(null)}
        title={selectedSpeaker?.name || ""}
      >
        {selectedSpeaker && (
          <div className="speaker-modal-body">
            <div className="speaker-modal-header">
              <span className="speaker-modal-role">
                {selectedSpeaker.role} — {selectedSpeaker.org}
              </span>
            </div>
            {selectedSpeaker.talk && (
              <div className="speaker-modal-talk">
                <h4>Keynote Title:</h4>
                <p>"{selectedSpeaker.talk}"</p>
              </div>
            )}
            <div className="speaker-modal-bio">
              <h4>Biography:</h4>
              <p>{selectedSpeaker.bio}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
