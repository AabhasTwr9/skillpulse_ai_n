import { useState } from "react";
import "./EmploymentAnalytics.css";

const states = [
  { name: "Chhattisgarh", employment: 72, unemployment: 8 },
  { name: "Maharashtra", employment: 78, unemployment: 6 },
  { name: "Karnataka", employment: 81, unemployment: 5 },
  { name: "Tamil Nadu", employment: 76, unemployment: 7 },
  { name: "Uttar Pradesh", employment: 68, unemployment: 9 },
];

const sectors = [
  { name: "Agriculture", value: 35 },
  { name: "Manufacturing", value: 25 },
  { name: "Services", value: 30 },
  { name: "Construction", value: 10 },
];

function EmploymentAnalytics() {
  const [selectedState, setSelectedState] = useState("All States");

  const visibleStates =
    selectedState === "All States"
      ? states
      : states.filter((state) => state.name === selectedState);

  return (
    <main className="employment-dashboard">
      <header className="employment-header">
        <div>
          <p className="eyebrow">SKILLPULSE AI / NATIONAL INTELLIGENCE</p>
          <h1>Employment Analytics</h1>
          <p className="subtitle">
            Understanding India's workforce and evolving labour market.
          </p>
        </div>

        <span className="demo-badge">DEMONSTRATION DATA</span>
      </header>

      <section className="employment-filters">
        <label htmlFor="state-filter">Select State</label>
        <select
          id="state-filter"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>All States</option>
          {states.map((state) => (
            <option key={state.name}>{state.name}</option>
          ))}
        </select>
      </section>

      <section className="employment-stats">
        <article className="employment-card">
          <span>Employment Rate</span>
          <h2>—</h2>
          <small>Awaiting verified data</small>
        </article>

        <article className="employment-card">
          <span>Unemployment Rate</span>
          <h2>—</h2>
          <small>Awaiting verified data</small>
        </article>

        <article className="employment-card">
          <span>Labour Force Participation</span>
          <h2>—</h2>
          <small>Awaiting verified data</small>
        </article>

        <article className="employment-card">
          <span>Workforce Size</span>
          <h2>—</h2>
          <small>Awaiting verified data</small>
        </article>
      </section>

      <section className="analytics-panel">
        <div className="panel-heading">
          <div>
            <h2>State-wise Employment Comparison</h2>
            <p>Illustrative employment indicators (%)</p>
          </div>
          <span className="demo-label">SAMPLE ONLY</span>
        </div>

        {visibleStates.map((state) => (
          <div className="state-row" key={state.name}>
            <div className="state-info">
              <strong>{state.name}</strong>
              <span>{state.employment}%</span>
            </div>
            <div className="employment-bar">
              <div style={{ width: `${state.employment}%` }} />
            </div>
          </div>
        ))}
      </section>

      <section className="analytics-panel">
        <div className="panel-heading">
          <div>
            <h2>Sector-wise Workforce Distribution</h2>
            <p>Illustrative distribution (%)</p>
          </div>
          <span className="demo-label">SAMPLE ONLY</span>
        </div>

        {sectors.map((sector) => (
          <div className="sector-row" key={sector.name}>
            <div className="state-info">
              <strong>{sector.name}</strong>
              <span>{sector.value}%</span>
            </div>
            <div className="sector-bar">
              <div style={{ width: `${sector.value}%` }} />
            </div>
          </div>
        ))}
      </section>

      <footer className="employment-footer">
        <p>
          SkillPulse AI · National Labour Market Intelligence Platform
        </p>
        <p>
          All sample figures are illustrative, not official Indian labour
          market statistics.
        </p>
      </footer>
    </main>
  );
}

export default EmploymentAnalytics;