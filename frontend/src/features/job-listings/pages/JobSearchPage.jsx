import { Button } from '../../../components/ui/index.js'
import { JobListingsFeature } from '../JobListingsFeature.jsx'

export function JobSearchPage() {
  return (
    <div className="app-shell">
      <div className="container">
        <section className="hero" aria-labelledby="job-search-title">
          <h1 id="job-search-title">Explore Open Roles</h1>
          <p className="tagline">
            Discover the right opportunity and keep your application workflow organized.
          </p>
          <div className="cta-row">
            <Button as="a" href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </section>

        <section className="audience-section" aria-labelledby="job-listings-heading">
          <h2 id="job-listings-heading">Candidate experience</h2>
          <div className="user-duo">
            <div className="glass-card user-card">
              <JobListingsFeature />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
