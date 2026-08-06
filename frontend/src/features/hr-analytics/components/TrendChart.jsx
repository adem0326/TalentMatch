import React from 'react'

// Lightweight SVG trend chart placeholder (static paths like the original)
export default function TrendChart() {
  return (
    <div className="svg-chart-container">
      <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
        <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(0,0,0,0.05)" strokeDasharray="4" />
        <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(0,0,0,0.05)" strokeDasharray="4" />
        <line x1="0" y1="160" x2="500" y2="160" stroke="rgba(0,0,0,0.05)" strokeDasharray="4" />
        <path d="M 20 160 Q 120 80, 240 110 T 480 40" fill="none" stroke="rgba(255, 45, 45, 0.3)" strokeWidth="3" />
        <path d="M 20 180 Q 120 150, 240 160 T 480 120" fill="none" stroke="#ff2d2d" strokeWidth="3" />
      </svg>
    </div>
  )
}
