import { useEffect, useState } from "react";
import "./Dashboard.css";

import { Link } from "react-router-dom";
import IndiaSkillMap from "./components/IndiaSkillMap";

function Dashboard() {
  const [backendStatus, setBackendStatus] = useState("Connecting...");

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/status")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Backend connection failed");
      }
      return response.json();
    })
    .then((data) => {
      setBackendStatus(data.status);
    })
    .catch(() => {
      setBackendStatus("Disconnected");
    });
}, []);
  return (
    <div className="dashboard">

      {/* Navigation */}
      <nav className="dashboard-nav">
        <Link to="/" className="dashboard-logo">
          SkillPulse <span>AI</span>
        </Link>

        <div className="dashboard-nav-links">
          <a href="#overview">Overview</a>
          <a href="#skill-gap">Skill Gap</a>
          <a href="#forecast">Forecast</a>
        </div>

        <span className="dashboard-user">National Admin</span>
      </nav>

      {/* Dashboard Header */}
      <header className="dashboard-header" id="overview">
        <div>
          <h1>National Skill Intelligence</h1>
          <p>India's Workforce & Employment Overview</p>
        </div>

        <span className={`live-status ${
  backendStatus === "Operational" ? "connected" : "disconnected"
}`}>
  ● Backend: {backendStatus}
</span>
      </header>

      {/* National Statistics */}
      <section className="stats-grid">

        <div className="stat-card">
          <p>Total Workforce</p>
          <h2>56.5 Cr</h2>
          <span>Indian workforce</span>
        </div>

        <div className="stat-card">
          <p>Unemployment Rate</p>
          <h2>4.9%</h2>
          <span>Illustrative placeholder</span>
        </div>

        <div className="stat-card">
          <p>Skill Gap Index</p>
          <h2>38%</h2>
          <span>Illustrative placeholder</span>
        </div>

        <div className="stat-card">
          <p>Jobs in Demand</p>
          <h2>12.8 L</h2>
          <span>Illustrative placeholder</span>
        </div>
<section className="employment-section">
  <div className="employment-header">
    <h2>National Employment Analytics</h2>
    <span className="demo-badge">Demo Data</span>
  </div>

  <p className="employment-description">
    Employment and workforce indicators across India.
  </p>

  <div className="employment-grid">
    <div className="employment-card">
      <p>Total Employment</p>
      <h3>Demo</h3>
      <span>Number of employed people</span>
    </div>

    <div className="employment-card">
      <p>Unemployment Rate</p>
      <h3>Demo</h3>
      <span>Share of labour force unemployed</span>
    </div>

    <div className="employment-card">
      <p>Labour Force Participation</p>
      <h3>Demo</h3>
      <span>Population participating in labour market</span>
    </div>

    <div className="employment-card">
      <p>Worker Population Ratio</p>
      <h3>Demo</h3>
      <span>Population currently employed</span>
    </div>
  </div>
</section>

      </section>

      {/* India Skill Intelligence Map */}
      <section className="skill-gap-section" id="skill-gap">

        <h2>India Skill Intelligence Map</h2>

        <p>
          Explore regional workforce skill gaps across India.
        </p>
        <IndiaSkillMap />

        <div className="map-legend">
  <span>Skill Gap Levels:</span>
  <span>🟢 Low</span>
  <span>🟡 Moderate</span>
  <span>🟠 High</span>
  <span>🔴 Critical</span>
  <span>🔵 Selected</span>
</div>

      </section>

      {/* Sector-wise Skill Gap Analysis */}
      <section className="skill-gap-section">

        <h2 style={{ color: "#2a6fb5" }}>
          Sector-wise Skill Gap Analysis
        </h2>

        <p>
          Understanding workforce shortages across major industries.
        </p>

        <div className="sector-list">

          <div className="sector">
            <div className="sector-info">
              <span>Information Technology</span>
              <strong>75%</strong>
            </div>

            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="sector">
            <div className="sector-info">
              <span>Manufacturing</span>
              <strong>60%</strong>
            </div>

            <div className="progress">
              <div style={{ width: "60%" }}></div>
            </div>
          </div>

          <div className="sector">
            <div className="sector-info">
              <span>Healthcare</span>
              <strong>45%</strong>
            </div>

            <div className="progress">
              <div style={{ width: "45%" }}></div>
            </div>
          </div>

          <div className="sector">
            <div className="sector-info">
              <span>Construction</span>
              <strong>80%</strong>
            </div>

            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
