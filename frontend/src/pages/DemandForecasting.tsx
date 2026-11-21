import { useState } from "react";

export default function DemandForecasting() {
  const [state, setState] = useState("Maharashtra");
  const [sector, setSector] = useState("Information Technology");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#071426",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1>AI Demand Forecasting</h1>

      <p style={{ color: "#9db3cc" }}>
        Predict future occupation and workforce demand
        using intelligent AI analytics.
      </p>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "35px",
        flexWrap: "wrap"
      }}>
        <div>
          <label>Select State</label>
          <br />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={{ padding: "12px", marginTop: "10px" }}
          >
            <option>Maharashtra</option>
            <option>Chhattisgarh</option>
            <option>Karnataka</option>
            <option>Delhi</option>
            <option>Gujarat</option>
          </select>
        </div>

        <div>
          <label>Select Sector</label>
          <br />
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            style={{ padding: "12px", marginTop: "10px" }}
          >
            <option>Information Technology</option>
            <option>Healthcare</option>
            <option>Manufacturing</option>
            <option>Agriculture</option>
            <option>Education</option>
          </select>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "40px"
      }}>
        {[
          ["Projected Demand", "1.25M"],
          ["Growth Rate", "+18.5%"],
          ["Skills Required", "45+"],
          ["Forecast Period", "2027-2030"]
        ].map(([title, value]) => (
          <div key={title} style={{
            background: "#122b49",
            padding: "25px",
            borderRadius: "14px",
            border: "1px solid #24517c"
          }}>
            <p style={{ color: "#9db3cc" }}>{title}</p>
            <h2 style={{ color: "#38bdf8" }}>{value}</h2>
          </div>
        ))}
      </div>

      <div style={{
        background: "#122b49",
        padding: "25px",
        borderRadius: "14px",
        marginTop: "35px"
      }}>
        <h2>Forecast Analysis</h2>
        <p>Selected State: {state}</p>
        <p>Selected Sector: {sector}</p>
        <p style={{ color: "#38bdf8" }}>
          AI workforce demand analysis dashboard
        </p>
      </div>
    </div>
  );
}