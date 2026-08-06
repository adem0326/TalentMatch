import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar__logo">
        <Link to="/">TalentMatch</Link>
      </div>
      <div className="navbar__links">
        <Link to="/hr-dashboard">For HR Teams</Link>
        <Link to="/job-search">For Job Seekers</Link>
      </div>
    </nav>
  )
}
