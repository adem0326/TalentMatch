import { useState } from 'react'
import { CandidateCard } from './CandidateCard.jsx'

export function PipelineBoard({ stages, candidates, onMoveCandidate, loading }) {
  const [activeStage, setActiveStage] = useState(null)

  const handleDrop = (stageKey) => (event) => {
    event.preventDefault()
    const candidateId = event.dataTransfer.getData('text/plain')

    if (candidateId) {
      onMoveCandidate(candidateId, stageKey)
    }

    setActiveStage(null)
  }

  const handleDragOver = (stageKey) => (event) => {
    event.preventDefault()
    setActiveStage(stageKey)
  }

  const handleDragLeave = () => {
    setActiveStage(null)
  }

  if (loading) {
    return <div className="pipeline-loading">Loading candidates…</div>
  }

  return (
    <div className="pipeline" role="list">
      {stages.map((stage) => {
        const stageCandidates = candidates.filter((candidate) => candidate.stage === stage.key)

        return (
          <div
            key={stage.key}
            className={`stage-column ${activeStage === stage.key ? 'drag-over' : ''}`}
            onDragOver={handleDragOver(stage.key)}
            onDrop={handleDrop(stage.key)}
            onDragLeave={handleDragLeave}
          >
            <div className="stage-header">
              <h3>{stage.title}</h3>
              <span className="stage-count">{stageCandidates.length}</span>
            </div>
            <div className="candidate-cards">
              {stageCandidates.length === 0 ? (
                <div className="empty-stage">No candidates in this stage yet.</div>
              ) : (
                stageCandidates.map((candidate) => (
                  <CandidateCard key={candidate.id} candidate={candidate} />
                ))
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
