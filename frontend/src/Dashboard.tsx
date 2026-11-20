 import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div>
          <h1>National Skill Intelligence</h1>
          <p>India's Workforce & Employment Overview</p>
        </div>
        <span className="live-status">● Live Dashboard</span>
      </header>

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

      </section>

      <section className="skill-gap-section">

  <h2 style={{ color: "#2a6fb5" }}>Sector-wise Skill Gap Analysis</h2>
  <p>Understanding workforce shortages across major industries.</p>

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