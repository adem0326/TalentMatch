import { GlassCard } from '../../../components/ui/index.js'

export function CandidateCard({ candidate }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', candidate.id)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <GlassCard
      className="glass-card candidate-card"
      draggable="true"
      onDragStart={handleDragStart}
      role="listitem"
    >
      <div className="candidate-name">{candidate.name}</div>
      <div className="candidate-role">{candidate.role}</div>
      <div className="candidate-tags">
        {candidate.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}
