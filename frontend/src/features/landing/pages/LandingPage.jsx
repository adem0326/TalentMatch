import { GlassCard, Button } from '../../../components/ui/index.js'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../components/layout/Navbar.jsx'
import { Footer } from '../../../components/layout/Footer.jsx'
import { featureCards, heroContent } from '../../../config/index.js'

export function LandingPage() {
  return (
    <div className="app-shell">
      <Navbar />

      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">{heroContent.title}</h1>
        <p className="tagline">{heroContent.tagline}</p>
        <div className="cta-row">
          <Button as={Link} to="/hr-dashboard" variant="primary">
            HR Dashboard
          </Button>
          <Button as={Link} to="/job-search" variant="secondary">
            Browse Jobs
          </Button>
        </div>
      </section>

      <main className="container">
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <GlassCard key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </GlassCard>
          ))}
        </div>

        <section className="audience-section" aria-labelledby="audience-heading">
          <h2 id="audience-heading">Made for both sides</h2>
          <div className="user-duo">
            <GlassCard className="user-card" id="hr">
              <h3>HR Teams</h3>
              <div className="subtitle">Recruiting made efficient</div>
              <p>
                Manage job postings, review applications, and streamline candidate progression.
                Gain data-driven insights into hiring velocity and sourcing performance.
              </p>
              <ul className="feature-list">
                <li>Publish & edit job listings instantly</li>
                <li>Visual candidate status pipeline</li>
                <li>Hire-time & velocity analytics</li>
                <li>Bulk operations for applicants</li>
              </ul>
              <Button as={Link} to="/hr-dashboard" variant="primary" className="btn--full">
                Go to HR Suite
              </Button>
            </GlassCard>

            <GlassCard className="user-card" id="seekers">
              <h3>Job Seekers</h3>
              <div className="subtitle">Land the right role</div>
              <p>
                Discover opportunities tailored to your career trajectory. Track application statuses live
                and know exactly when recruiters review your profile.
              </p>
              <ul className="feature-list">
                <li>Smart job matching & instant filters</li>
                <li>One-click direct application system</li>
                <li>Live status application tracker</li>
                <li>Actionable profile optimization tips</li>
              </ul>
              <Button as={Link} to="/job-search" variant="primary" className="btn--full">
                Start Searching
              </Button>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
