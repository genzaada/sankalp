"use client";

import React, { useState } from "react";
import Card from "./ui/Card";
import {
  Zap, 
  Building2,
  Factory,
  Cpu,
  Globe,
  Route
} from "lucide-react";

export default function Tracks() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Sustainable Energy Systems & Decarbonization",
      icon: <Zap size={30} strokeWidth={2} />,
      image: "/tracks/energy.jpg",
      topics: [
        "Renewable Energy Systems",
        "Energy Storage Technologies",
        "Smart Grids & Microgrids",
        "Hydrogen Energy Systems",
        "Carbon Capture & Emission Reduction",
        "Net-Zero Energy Solutions",
      ],
    },
    {
      id: 2,
      title: "Smart & Sustainable Built Environments",
      icon: <Building2 size={30} strokeWidth={2} />,
      image: "/tracks/building.jpg",
      topics: [
        "Intelligent Buildings",
        "Green & Net-Zero Buildings",
        "Smart Cities & Smart Districts",
        "Digital Twins for Infrastructure",
        "Sustainable Urban Development",
        "Building Energy Management Systems",
      ],
    },
    {
      id: 3,
      title: "Sustainable Manufacturing & Circular Economy",
      icon: <Factory size={30} strokeWidth={2} />,
      image: "/tracks/manufacturing.jpg",
      topics: [
        "Sustainable Manufacturing Technologies",
        "Industry 5.0 Applications",
        "Resource-Efficient Production",
        "Circular Economy Models",
        "Recycling & Waste Valorization",
        "Sustainable Supply Chains",
      ],
    },
    {
      id: 4,
      title: "Artificial Intelligence & Digital Technologies",
      icon: <Cpu size={30} strokeWidth={2} />,
      image: "/tracks/ai.jpg",
      topics: [
        "AI & Machine Learning Applications",
        "Digital Image Processing",
        "Big Data Analytics",
        "Internet of Things (IoT)",
        "Decision Support Systems",
        "Digital Transformation for Sustainability",
        "Cyber-Physical Systems",
      ],
    },
    {
      id: 5,
      title: "Climate Change & Environmental Management",
      icon: <Globe size={30} strokeWidth={2} />,
      image: "/tracks/climate.jpg",
      topics: [
        "Climate Change Mitigation & Adaptation",
        "Environmental Impact Assessment",
        "Air & Water Quality Management",
        "Natural Resource Conservation",
        "Sustainable Agriculture Systems",
        "Environmental Monitoring Technologies",
      ],
    },
    {
      id: 6,
      title: "Sustainable Transportation & Infrastructure",
      icon: <Route size={30} strokeWidth={2} />,
      image: "/tracks/transport.jpg",
      topics: [
        "Smart Transportation Systems",
        "Electric & Autonomous Vehicles",
        "Intelligent Road Infrastructure",
        "Structural Health Monitoring",
        "Infrastructure Resilience",
        "Disaster-Resistant Engineering Systems",
      ],
    },
  ];

  return (
    <section id="tracks" className="section-padding tracks-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Scope of Work</span>
          <h2 className="section-title">Conference Tracks</h2>
          <div className="section-divider"></div>
        </div>

        <div className="tracks-grid">
          {tracks.map((track) => (
            <Card
  key={track.id}
  className={`track-card ${activeTrack === track.id ? "active-track" : ""}`}
  onClick={() =>
    setActiveTrack(activeTrack === track.id ? null : track.id)
  }
  
>
  <div
  className="track-background"
  style={{
    backgroundImage: `url(${track.image})`,
  }}
></div>
<div className="track-content">


              <div className="track-icon-wrapper">{track.icon}</div>
              <h3>{track.title}</h3>
              <p className="track-hint">Click to expand topics</p>

              <div className={`track-topics-container ${activeTrack === track.id ? "expanded" : ""}`}>
                <ul className="track-topics-list">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="track-topic-item">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              </div>   
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
