import { Link, NavLink } from 'react-router-dom'

export function HrSidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">TalentMatch</div>
      <nav>
        <NavLink to="/hr-dashboard">Candidate Pipeline</NavLink>
        <NavLink to="/hr-listings">Job Listings</NavLink>
        <NavLink to="/hr-analytics">Analytics</NavLink>
        <Link to="/">← Back to Home</Link>
      </nav>
    </aside>
  )
}

export default HrSidebar
