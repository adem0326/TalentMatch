export function JobRow({ job }) {
  return (
    <div className="job-row" role="row">
      <div className="job-info">
        <h3>{job.title}</h3>
        <p>{job.meta}</p>
      </div>
      <div>
        <span className={`status-badge status-${job.status}`}>{job.status === 'active' ? 'Active' : job.status === 'closed' ? 'Closed' : 'Draft'}</span>
      </div>
      <div className="applicant-count">{job.applicants ?? '—'}</div>
      <div className="action-menu">
        <button className="action-btn" aria-label="Actions">⋯</button>
      </div>
    </div>
  )
}
