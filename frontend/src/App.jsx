import { Button } from './components/ui/Button'
import { GlassCard } from './components/ui/GlassCard'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { featureCards, heroContent } from './config'
import { HrDashboardFeature } from './features/hr-dashboard'
import { JobListingsFeature } from './features/job-listings'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">{heroContent.title}</h1>
        <p className="tagline">{heroContent.tagline}</p>
        <div className="cta-row">
          <Button as="a" href="/hr-dashboard" variant="primary">
            HR Dashboard
          </Button>
          <Button as="a" href="/job-search" variant="secondary">
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
              <HrDashboardFeature />
            </GlassCard>

            <GlassCard className="user-card" id="seekers">
              <JobListingsFeature />
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
