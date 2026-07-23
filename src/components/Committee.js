"use client";

import React, { useState } from "react";
import Card from "./ui/Card";

export default function Committee() {
  const [activeTab, setActiveTab] = useState("patrons");

  const tabs = [
    { id: "patrons", label: "Patrons & General Chairs" },
    { id: "steering", label: "Steering Committee" },
    { id: "organizing", label: "Organizing Committee" },
  ];

  const patrons = [
    { name: "Hon. Shri Kamal Kishorji Kadam", role: "Chairman, MGM", status: "Patron" },
    { name: "Hon. Dr. P. M. Jadhav", role: "Vice Chairman, MGM", status: "Patron" },
    { name: "Hon. Shri Ankushrao Kadam", role: "Chancellor & Secretary, MGM University", status: "Patron" },
    { name: "Hon. Dr. Vilas Sapkal", role: "Vice Chancellor, MGM University", status: "Patron" },
    { name: "Dr. Ashish Gadekar", role: "Registrar, MGM University", status: "Patron" },
    { name: "Dr. Parminder Kaur Dhingra", role: "Director SOET, MGM University", status: "General Chair" },
  ];

  const steering = [
    
    { name: "Dr. H. H. Shinde", role: "Dean, Faculty of Engineering & Technology, MGM University" },
    { name: "Dr. Rekha Shelke", role: "Dean, Faculty of Social Sciences and Humanities" },
    { name: "Dr. ABC", role: "Dean, Basic and Applied Sciences, MGM University" },
    { name: "Dr. DEF", role: "Dean, Performing Arts, MGM University" },
    { name: "Shri GHI", role: "AFO, MGM University" },
  ];

  const organizing = [
    { name: "Mr. Javed A. Siddiqui", role: "Convener | HoD, Dept. of Mech, SOET" },
    { name: "Mr. Anuj P. Domale", role: "Co-Convener | HoD, Dept. of Civil Engineering, SOET" },
    { name: "Ms. Sarika R. Rathi", role: "Organizing Chair | HoD, Dept. of Computer Science Engineering, SOET" },
    { name: "Mr. Piyush G. Kale", role: "Organizing Co-chair | HoD Dept. of Electronics Engineering, SOET" },
    { name: "Mr. Mohan S. Jadhav", role: "Organizing Committee | HoD Dept. of Electrical Engineering , SOET" },
    { name: "Ms. Kajal C. Agrawal", role: "Organizing Committee | IITB, GRSS Chair" },
    { name: "Dr. DEF", role: "Organizing Committee | Professor & Head, Computer Engg, SFIT" },
    { name: "Dr. GHI", role: "Organizing Committee | System Council Chair, Nagpur" },
    { name: "Dr. JKL", role: "Organizing Committee | Dean, R&D and Innovation, MIT" },
    { name: "Dr. MNO", role: "Organizing Committee | Professor" },
    { name: "Dr. PQR", role: "Organizing Committee | Professor" },
  ];

  return (
    <section id="committee" className="section-padding committee-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Leadership</span>
          <h2 className="section-title">Conference Committee</h2>
          <div className="section-divider"></div>
        </div>

        {/* Tab Controls */}
        <div className="committee-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`committee-tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="committee-panel">
          {activeTab === "patrons" && (
            <div className="committee-grid">
              {patrons.map((p, idx) => (
                <Card key={idx} className="committee-card">
                  <div className="committee-badge">{p.status}</div>
                  <h4>{p.name}</h4>
                  <p>{p.role}</p>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "steering" && (
            <div className="committee-grid">
              {steering.map((s, idx) => (
                <Card key={idx} className="committee-card">
                  <div className="committee-badge steering-badge">Steering Committee</div>
                  <h4>{s.name}</h4>
                  <p>{s.role}</p>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "organizing" && (
            <div className="committee-grid">
              {organizing.map((o, idx) => (
                <Card key={idx} className="committee-card">
                  <div className="committee-badge organizing-badge">Organizing Board</div>
                  <h4>{o.name}</h4>
                  <p>{o.role}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
