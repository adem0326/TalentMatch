import { Button } from '../../../components/ui/index.js'
import { Link } from 'react-router-dom'
import { PipelineBoard } from '../components/PipelineBoard.jsx'
import { usePipeline } from '../hooks/usePipeline.js'

const stageMetadata = [
  { key: 'Applied', title: 'Applied' },
  { key: 'Reviewing', title: 'Reviewing' },
  { key: 'Interview', title: 'Interview' },
  { key: 'Offer', title: 'Offer' },
]

export function HRPipelinePage() {
  const { candidates, loading, error, moveCandidate } = usePipeline()

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">TalentMatch</div>
        <nav>
          <Link to="/hr-dashboard" className="active">
            Candidate Pipeline
          </Link>
          <Link to="/hr-listings">Job Listings</Link>
          <Link to="/hr-analytics">Analytics</Link>
        </nav>
        <Button as={Link} to="/" variant="secondary" className="sidebar__button">
          ← Back to Home
        </Button>
      </aside>

      <div className="main">
        <header className="header">
          <h1>Candidate Pipeline</h1>
        </header>

        <div className="content">
          <div className="section-header">
            <h2>Hiring Workflow</h2>
            <p>Drag to move candidates between stages or click to view full profile.</p>
          </div>

          {error ? <div className="error-message">{error}</div> : null}

          <PipelineBoard
            stages={stageMetadata}
            candidates={candidates}
            onMoveCandidate={moveCandidate}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
