import { Button } from '../../components/ui/Button'

export function JobListingsFeature() {
  return (
    <>
      <h3>Job Seekers</h3>
      <div className="subtitle">Land the right role</div>
      <p>
        Discover opportunities tailored to your career trajectory. Track application
        statuses live and know exactly when recruiters review your profile.
      </p>
      <ul className="feature-list">
        <li>Smart job matching &amp; instant filters</li>
        <li>One-click direct application system</li>
        <li>Live status application tracker</li>
        <li>Actionable profile optimization tips</li>
      </ul>
      <Button as="a" href="/job-search" variant="primary" className="btn--full">
        Start Searching
      </Button>
    </>
  )
}
