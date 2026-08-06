import React from 'react'

export default function KpiCard({ title, value, trend, trendType = 'positive' }) {
  return (
    <div className="kpi-inner">
      <div className="kpi-title">{title}</div>
      <div className="kpi-bottom">
        <div className="kpi-val">{value}</div>
        <div className={`kpi-trend ${trendType}`}>{trend}</div>
      </div>
    </div>
  )
}
