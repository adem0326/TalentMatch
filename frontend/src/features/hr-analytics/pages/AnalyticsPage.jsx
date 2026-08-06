import React from 'react'
import { Link } from 'react-router-dom'
import { useAnalytics } from '../hooks/useAnalytics'
import KpiCard from '../components/KpiCard'
import { GlassCard } from '../../../components/ui'
import SourcesTable from '../components/SourcesTable'
import FunnelChart from '../components/FunnelChart'
import TrendChart from '../components/TrendChart'

export default function AnalyticsPage() {
  const { period, setPeriod, data, loading } = useAnalytics('30d')

  function change(periodKey) {
    setPeriod(periodKey)
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">TalentMatch</div>
        <nav>
          <Link to="/hr-dashboard">Pipeline Board</Link>
          <Link to="/hr-analytics" className="active">Analytics</Link>
          <Link to="/hr-listings">Job Listings</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <h1>Recruitment Analytics</h1>
            <p>Key metrics, hiring velocity, and sourcing performance.</p>
          </div>

          <div className="time-selector">
            <button className={`time-btn ${period === '30d' ? 'active' : ''}`} onClick={() => change('30d')}>30 Days</button>
            <button className={`time-btn ${period === '90d' ? 'active' : ''}`} onClick={() => change('90d')}>90 Days</button>
            <button className={`time-btn ${period === 'year' ? 'active' : ''}`} onClick={() => change('year')}>This Year</button>
          </div>
        </header>

        <section className="kpi-grid">
          {loading || !data ? (
            <div>Loading KPIs…</div>
          ) : (
            <>
              <GlassCard className="kpi-card">
                <KpiCard title="Avg Time to Hire" value={data.kpi.time} trend="-3 days" trendType="positive" />
              </GlassCard>
              <GlassCard className="kpi-card">
                <KpiCard title="Offer Accept Rate" value={data.kpi.acceptance} trend="+4.2%" trendType="positive" />
              </GlassCard>
              <GlassCard className="kpi-card">
                <KpiCard title="Total Hires" value={data.kpi.hires} trend="+2" trendType="positive" />
              </GlassCard>
              <GlassCard className="kpi-card">
                <KpiCard title="Screen Pass Rate" value={data.kpi.pass} trend="-1.5%" trendType="negative" />
              </GlassCard>
            </>
          )}
        </section>

        <section className="analytics-grid">
          <GlassCard className="chart-card">
            <div className="chart-header">
              <span className="chart-title">Applications vs Hires Trend</span>
            </div>
            <TrendChart />
            <div style={{ display: 'flex', gap: 16, fontSize: 12, justifyContent: 'flex-end' }}>
              <span style={{ color: 'rgba(255,45,45,0.5)', fontWeight: 700 }}>— Applications</span>
              <span style={{ color: '#ff2d2d', fontWeight: 700 }}>— Hires</span>
            </div>
          </GlassCard>

          <GlassCard className="chart-card">
            <div className="chart-header">
              <span className="chart-title">Candidate Sources</span>
            </div>
            {loading || !data ? <div>Loading…</div> : <SourcesTable sources={data.sources} />}
          </GlassCard>
        </section>

        <GlassCard className="chart-card">
          <div className="chart-header">
            <span className="chart-title">Pipeline Conversion Breakdown</span>
          </div>
          {loading || !data ? <div>Loading…</div> : <FunnelChart funnel={data.funnel} />}
        </GlassCard>
      </main>
    </div>
  )
}
