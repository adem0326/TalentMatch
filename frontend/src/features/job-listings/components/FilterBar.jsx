export function FilterBar({ current, onChange }) {
  const options = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'draft', label: 'Draft' },
    { key: 'closed', label: 'Closed' },
  ]

  return (
    <div className="filter-bar">
      {options.map((opt) => (
        <button
          key={opt.key}
          className={`filter-btn ${current === opt.key ? 'active' : ''}`}
          onClick={() => onChange(opt.key)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
