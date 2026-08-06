import { JobRow } from './JobRow.jsx'

export function JobTable({ jobs }) {
  return (
    <div className="job-table" role="table">
      <div className="job-table-header" role="row">
        <div>Position</div>
        <div>Status</div>
        <div style={{ textAlign: 'center' }}>Applicants</div>
        <div />
      </div>

      {jobs.map((job) => (
        <JobRow key={job.id} job={job} />
      ))}
    </div>
  )
}
