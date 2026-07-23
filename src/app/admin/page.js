"use client";

import React, { useState, useEffect } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && ["overview", "submissions", "registrations", "dates"].includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  // Mock initial dataset for submissions
  const [submissions, setSubmissions] = useState([
    { id: "P-101", title: "Optimizing Microgrid Storage using Deep Q-Networks", track: "Track 1", author: "A. Sharma", status: "Accepted" },
    { id: "P-102", title: "Digital Twins for Structural Integrity Monitoring in Smart Buildings", track: "Track 2", author: "Dr. K. Patel", status: "Under Review" },
    { id: "P-103", title: "Industry 5.0: Collaborative Robotics in Automotive Sub-assembly", track: "Track 3", author: "M. Fernandes", status: "Revision Required" },
    { id: "P-104", title: "Predicting Water Quality Index in Godavari Basin using XGBoost", track: "Track 5", author: "R. Deshmukh", status: "Accepted" },
    { id: "P-105", title: "Decentralized Electric Vehicle Charging Schedulers in Smart Districts", track: "Track 6", author: "Prof. S. Joshi", status: "Under Review" },
    { id: "P-106", title: "Neural Collaborative Filtering for Sustainable Supply Chain Decisions", track: "Track 3", author: "L. Wang", status: "Accepted" },
  ]);

  // Mock initial dataset for registrations
  const [registrations, setRegistrations] = useState([
    { name: "Aditi Sharma", email: "aditi.s@git.edu", org: "GIT Belgaum", type: "Student (Non-IEEE)", fee: "INR 6,500", ieee: "No", date: "2026-06-12" },
    { name: "Dr. Rajesh Kulkarni", email: "rkulkarni@jnec.ac.in", org: "JNEC Aurangabad", type: "Faculty (IEEE)", fee: "INR 8,100", ieee: "Yes", date: "2026-06-14" },
    { name: "Michael Vance", email: "vance.m@siemens.com", org: "Siemens R&D", type: "Industry Author", fee: "INR 10,000", ieee: "No", date: "2026-06-15" },
    { name: "Dr. Celia Shahnaz", email: "celia@eee.buet.ac.bd", org: "BUET Bangladesh", type: "Foreign Author", fee: "USD 150", ieee: "Yes", date: "2026-06-16" },
    { name: "Priya Lokhande", email: "priya.l@bit.edu", org: "BIT Erode", type: "Faculty (Non-IEEE)", fee: "INR 9,000", ieee: "No", date: "2026-06-17" },
  ]);

  // Mock dates configurations
  const [dates, setDates] = useState([
    { id: " announcement", label: "Announcement Date", date: "October 12, 2026" },
    { id: "submission", label: "Paper Submission Deadline", date: "March 10, 2027" },
    { id: "acceptance", label: "Acceptance Notification", date: "May 15, 2027" },
    { id: "cameraready", label: "Camera-ready submission", date: "June 15, 2027" },
    { id: "conference", label: "Conference dates", date: "August 19-20, 2027" },
  ]);

  const [dateInputs, setDateInputs] = useState({
    announcement: "October 12, 2026",
    submission: "March 10, 2027",
    acceptance: "May 15, 2027",
    cameraready: "June 15, 2027",
    conference: "August 19-20, 2027",
  });

  const handleDateChange = (id, val) => {
    setDateInputs((prev) => ({ ...prev, [id]: val }));
  };

  const saveDates = (e) => {
    e.preventDefault();
    setDates(
      dates.map((item) => ({
        ...item,
        date: dateInputs[item.id] || item.date,
      }))
    );
    alert("Important dates successfully updated and synced across landing pages!");
  };

  const handleStatusChange = (id, newStatus) => {
    setSubmissions(
      submissions.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar navigation */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          ICAMIDA <span>2027</span>
        </div>
        <nav className="admin-nav">
          <button
            onClick={() => setActiveTab("overview")}
            className={`admin-nav-item ${activeTab === "overview" ? "active" : ""}`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setActiveTab("submissions")}
            className={`admin-nav-item ${activeTab === "submissions" ? "active" : ""}`}
          >
            📝 Submissions
          </button>
          <button
            onClick={() => setActiveTab("registrations")}
            className={`admin-nav-item ${activeTab === "registrations" ? "active" : ""}`}
          >
            👥 Registrations
          </button>
          <button
            onClick={() => setActiveTab("dates")}
            className={`admin-nav-item ${activeTab === "dates" ? "active" : ""}`}
          >
            📅 Milestones
          </button>
        </nav>
        <div className="admin-sidebar-footer">
          <Button href="/" variant="secondary" className="w-full">
            &larr; Main Site
          </Button>
        </div>
      </aside>

      {/* Main dashboard content */}
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-left">
            <h2>System Administration</h2>
            <p className="topbar-breadcrumb">Dashboard / {activeTab}</p>
          </div>
          <div className="topbar-right">
            <div className="admin-profile">
              <span className="profile-letter">A</span>
              <span className="profile-name">Conference Administrator</span>
            </div>
          </div>
        </header>

        <div className="admin-content-inner">
          {/* Tab 1: Overview Panel */}
          {activeTab === "overview" && (
            <div className="admin-overview-panel">
              {/* Stat Cards Grid */}
              <div className="stats-cards-grid">
                <Card className="stat-card" hoverable={false}>
                  <div className="stat-icon-wrapper blue-bg">📝</div>
                  <div className="stat-details">
                    <h4>{submissions.length}</h4>
                    <p>Total Submissions</p>
                  </div>
                </Card>
                <Card className="stat-card" hoverable={false}>
                  <div className="stat-icon-wrapper green-bg">👥</div>
                  <div className="stat-details">
                    <h4>{registrations.length}</h4>
                    <p>Total Registrations</p>
                  </div>
                </Card>
                <Card className="stat-card" hoverable={false}>
                  <div className="stat-icon-wrapper gold-bg">💰</div>
                  <div className="stat-details">
                    <h4>INR 4,82,500</h4>
                    <p>Revenue Collected</p>
                  </div>
                </Card>
                <Card className="stat-card" hoverable={false}>
                  <div className="stat-icon-wrapper teal-bg">✅</div>
                  <div className="stat-details">
                    <h4>50%</h4>
                    <p>Acceptance Rate</p>
                  </div>
                </Card>
              </div>

              {/* Charts & Analytics */}
              <div className="analytics-grid">
                <Card className="analytics-card" hoverable={false}>
                  <h3>Submissions by Track</h3>
                  <div className="bar-charts-list">
                    <div className="bar-chart-item">
                      <span>Track 1: Sustainable Energy</span>
                      <div className="chart-bar-container">
                        <div className="chart-bar-fill" style={{ width: "85%" }}></div>
                        <span className="chart-bar-val">17</span>
                      </div>
                    </div>
                    <div className="bar-chart-item">
                      <span>Track 2: Built Environment</span>
                      <div className="chart-bar-container">
                        <div className="chart-bar-fill" style={{ width: "60%" }}></div>
                        <span className="chart-bar-val">12</span>
                      </div>
                    </div>
                    <div className="bar-chart-item">
                      <span>Track 3: Manufacturing & Circular</span>
                      <div className="chart-bar-container">
                        <div className="chart-bar-fill" style={{ width: "75%" }}></div>
                        <span className="chart-bar-val">15</span>
                      </div>
                    </div>
                    <div className="bar-chart-item">
                      <span>Track 4: AI & ML</span>
                      <div className="chart-bar-container">
                        <div className="chart-bar-fill" style={{ width: "95%" }}></div>
                        <span className="chart-bar-val">22</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="analytics-card" hoverable={false}>
                  <h3>Recent Action Logs</h3>
                  <div className="activity-logs-list">
                    <div className="log-item">
                      <span className="log-time">10 mins ago</span>
                      <p>Paper <strong>P-106</strong> accepted after second round peer review.</p>
                    </div>
                    <div className="log-item">
                      <span className="log-time">1 hour ago</span>
                      <p>Faculty Registration complete for <strong>Priya Lokhande</strong> (BIT Erode).</p>
                    </div>
                    <div className="log-item">
                      <span className="log-time">3 hours ago</span>
                      <p>New paper submission: <strong>"Decentralized Electric Vehicle Charging..."</strong> by Prof. S. Joshi.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Tab 2: Submissions Panel */}
          {activeTab === "submissions" && (
            <div className="admin-panel-view">
              <Card className="table-card" hoverable={false}>
                <div className="table-card-header">
                  <h3>Received Conference Papers</h3>
                  <span className="table-count">{submissions.length} Total Papers</span>
                </div>
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Paper ID</th>
                        <th>Title</th>
                        <th>Track</th>
                        <th>Lead Author</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((sub) => (
                        <tr key={sub.id}>
                          <td><strong>{sub.id}</strong></td>
                          <td className="table-cell-title">{sub.title}</td>
                          <td>{sub.track}</td>
                          <td>{sub.author}</td>
                          <td>
                            <span className={`status-pill ${sub.status.toLowerCase().replace(" ", "-")}`}>
                              {sub.status}
                            </span>
                          </td>
                          <td>
                            <div className="table-actions">
                              <button
                                onClick={() => handleStatusChange(sub.id, "Accepted")}
                                className="table-action-btn accept-btn"
                                title="Accept Paper"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() => handleStatusChange(sub.id, "Rejected")}
                                className="table-action-btn reject-btn"
                                title="Reject Paper"
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Tab 3: Registrations Panel */}
          {activeTab === "registrations" && (
            <div className="admin-panel-view">
              <Card className="table-card" hoverable={false}>
                <div className="table-card-header">
                  <h3>Attendee Registrations</h3>
                  <span className="table-count">{registrations.length} Total Registrations</span>
                </div>
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Affiliation</th>
                        <th>Registration Type</th>
                        <th>Fee Status</th>
                        <th>IEEE Member</th>
                        <th>Date Registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrations.map((reg, idx) => (
                        <tr key={idx}>
                          <td><strong>{reg.name}</strong><br /><span className="cell-subtext">{reg.email}</span></td>
                          <td>{reg.org}</td>
                          <td>{reg.type}</td>
                          <td><span className="status-pill accepted">Paid</span></td>
                          <td>
                            <span className={`status-pill ${reg.ieee === "Yes" ? "accepted" : "pending"}`}>
                              {reg.ieee}
                            </span>
                          </td>
                          <td>{reg.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Tab 4: Important Dates Panel */}
          {activeTab === "dates" && (
            <div className="admin-panel-view">
              <Card className="form-card" hoverable={false}>
                <h3>Modify Conference Milestones</h3>
                <p className="form-desc">
                  Updating these values changes the milestone details dynamically across author guidelines and schedule elements.
                </p>

                <form onSubmit={saveDates} className="admin-dates-form">
                  <div className="form-fields-grid">
                    <div className="form-field">
                      <label htmlFor="announcement">Announcement Date</label>
                      <input
                        type="text"
                        id="announcement"
                        value={dateInputs.announcement}
                        onChange={(e) => handleDateChange("announcement", e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="submission">Paper Submission Deadline</label>
                      <input
                        type="text"
                        id="submission"
                        value={dateInputs.submission}
                        onChange={(e) => handleDateChange("submission", e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="acceptance">Acceptance Notification</label>
                      <input
                        type="text"
                        id="acceptance"
                        value={dateInputs.acceptance}
                        onChange={(e) => handleDateChange("acceptance", e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="cameraready">Camera-ready Deadline</label>
                      <input
                        type="text"
                        id="cameraready"
                        value={dateInputs.cameraready}
                        onChange={(e) => handleDateChange("cameraready", e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="conference">Conference Dates</label>
                      <input
                        type="text"
                        id="conference"
                        value={dateInputs.conference}
                        onChange={(e) => handleDateChange("conference", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-footer">
                    <Button type="submit" variant="primary">
                      Sync Updates & Notify Authors
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
