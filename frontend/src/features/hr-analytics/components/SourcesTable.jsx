import React from 'react'

export default function SourcesTable({ sources = [] }) {
  return (
    <table className="sources-table">
      <thead>
        <tr>
          <th>Channel</th>
          <th>Volume</th>
          <th>Conversion</th>
        </tr>
      </thead>
      <tbody>
        {sources.map((s) => (
          <tr key={s.name}>
            <td><strong>{s.name}</strong></td>
            <td>{s.count}</td>
            <td><span style={{ color: '#10b981', fontWeight: 700 }}>{s.conversion}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
