import '../App.css'

function Home() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">S</span>
          <span>SkillPulse<span className="logo-ai"> AI</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

<a href="/dashboard" className="explore-btn">
  Explore Platform →
</a>
      </nav>

      {/* Hero */}
      <main id="home">
        <section className="hero">

          <div className="hero-content">
            <div className="eyebrow">
              <span className="pulse-dot"></span>
              AI-POWERED LABOUR MARKET INTELLIGENCE
            </div>

            <h1>
              Predict the Skill Gap.
              <br />
              <span>Prepare the Workforce.</span>
            </h1>

            <p className="hero-description">
              Empowering India's workforce through intelligent
              skill forecasting, labour market analytics and
              data-driven policy recommendations.
            </p>

            <div className="hero-buttons">
              <a href="#features" className="primary-button">
                Explore Platform <span>→</span>
              </a>

              <a href="#about" className="secondary-button">
                Discover SkillPulse
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-line"></span>
              <p>Building a future-ready workforce for India</p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="dashboard-preview">
              <div className="preview-header">
                <div>
                  <span className="preview-label">NATIONAL OVERVIEW</span>
                  <h3>India Workforce Pulse</h3>
                </div>
                <span className="live-status">
                  <span></span> LIVE DEMO
                </span>
              </div>

              <div className="preview-stats">
                <div className="stat-card">
                  <span>Monitored sectors</span>
                  <strong>08</strong>
                  <small>Across India</small>
                </div>

                <div className="stat-card">
                  <span>Forecast horizon</span>
                  <strong>12M</strong>
                  <small>Future outlook</small>
                </div>
              </div>

              <div className="india-visual">
                <div className="map-orbit orbit-one"></div>
                <div className="map-orbit orbit-two"></div>
                <div className="india-symbol">INDIA</div>
                <span className="map-point point-one"></span>
                <span className="map-point point-two"></span>
                <span className="map-point point-three"></span>
                <span className="map-point point-four"></span>
                <span className="map-point point-five"></span>
                <span className="map-caption">NATIONAL SKILL INTELLIGENCE</span>
              </div>

              <div className="preview-footer">
                <div>
                  <span className="footer-dot"></span>
                  AI Forecasting Engine
                </div>
                <span>Powered by SkillPulse</span>
              </div>
            </div>

            <div className="floating-card">
              <span className="floating-icon">↗️</span>
              <div>
                <strong>Future Ready</strong>
                <small>Smarter workforce planning</small>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section" id="about">
          <div className="stats-heading">
            <span>OUR VISION</span>
            <h2>Intelligence behind India's workforce</h2>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <strong>01</strong>
              <span>Demand Forecasting</span>
              <p>Anticipate emerging job requirements.</p>
            </div>

            <div className="stat-item">
              <strong>02</strong>
              <span>Skill Gap Analysis</span>
              <p>Identify shortages across occupations.</p>
            </div>

            <div className="stat-item">
              <strong>03</strong>
              <span>Policy Intelligence</span>
              <p>Support informed workforce decisions.</p>
            </div>

            <div className="stat-item">
              <strong>04</strong>
              <span>Future Planning</span>
              <p>Prepare skills for tomorrow's economy.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section" id="features">
          <div className="section-heading">
            <span>THE SKILLPULSE ECOSYSTEM</span>
            <h2>One platform. Smarter decisions.</h2>
            <p>
              Transform labour market data into actionable intelligence.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon blue">◈</div>
              <h3>AI Demand Forecasting</h3>
              <p>
                Predict future occupation and sector-wise
                workforce demand.
              </p>
              <a href="#home">Explore feature ↗️</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">⌖</div>
              <h3>India Skill Map</h3>
              <p>
                Discover regional skill shortages and
                workforce distribution.
              </p>
              <a href="#home">Explore feature ↗️</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon cyan">◉</div>
              <h3>Policy Simulator</h3>
              <p>
                Simulate training budgets and optimise
                skill development.
              </p>
              <a href="#home">Explore feature ↗️</a>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">✧</div>
              <h3>AI Decision Assistant</h3>
              <p>
                Turn complex workforce data into
                understandable recommendations.
              </p>
              <a href="#home">Explore feature ↗️</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <a href="#" className="logo">
            <span className="logo-icon">S</span>
            <span>SkillPulse<span className="logo-ai"> AI</span></span>
          </a>
          <p>Empowering India's future workforce.</p>
          <span>©️ 2026 SkillPulse AI</span>
        </footer>

      </main>
    </div>
  )
}

export default Home;