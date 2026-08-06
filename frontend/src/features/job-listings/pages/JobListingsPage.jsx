import { useJobs } from '../hooks/useJobs.js'
import { FilterBar } from '../components/FilterBar.jsx'
import { JobTable } from '../components/JobTable.jsx'
import { Button } from '../../../components/ui/index.js'
import { HrSidebar } from '../../../components/layout/HrSidebar.jsx'
import { Link } from 'react-router-dom'

export function JobListingsPage() {
  const { filtered, jobs, loading, error, filter, setFilter } = useJobs()

  return (
    <div className="dashboard">
      <HrSidebar />

      <div className="main">
        <div className="header">
          <h1>Job Listings</h1>
          <div className="header-actions">
            <Button as="button" variant="secondary">Download Report</Button>
            <Button as={Link} to="/post-new-job" variant="red">+ Post New Job</Button>
          </div>
        </div>

        <div className="content">
          <div className="section-header">
            <h2>Active & Draft Positions</h2>
            <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 500 }}>{jobs.length} total</span>
          </div>

          <FilterBar current={filter} onChange={setFilter} />

          {error ? <div className="error-message">{error}</div> : null}

          {loading ? (
            <div className="pipeline-loading">Loading jobs…</div>
          ) : (
            <JobTable jobs={filtered} />
          )}
        </div>
      </div>
    </div>
  )
}
