import React from 'react'

export default function FunnelChart({ funnel = [] }) {
  return (
    <div className="bar-chart">
      {funnel.map((item) => (
        <div className="bar-row" key={item.stage}>
          <div className="bar-meta">
            <span>{item.stage}</span>
            <span>{item.count} ({item.percentage}%)</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${item.percentage}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
