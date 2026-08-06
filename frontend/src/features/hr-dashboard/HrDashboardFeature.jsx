import { Button } from '../../components/ui/Button'

export function HrDashboardFeature() {
  return (
    <>
      <h3>HR Teams</h3>
      <div className="subtitle">Recruiting made efficient</div>
      <p>
        Manage job postings, review applications, and streamline candidate progression.
        Gain data-driven insights into hiring velocity and sourcing performance.
      </p>
      <ul className="feature-list">
        <li>Publish &amp; edit job listings instantly</li>
        <li>Visual candidate status pipeline</li>
        <li>Hire-time &amp; velocity analytics</li>
        <li>Bulk operations for applicants</li>
      </ul>
      <Button as="a" href="/" variant="primary" className="btn--full">
        Go to HR Suite
      </Button>
    </>
  )
}
