// Mock analytics data (copied from the static HTML)
const analyticsData = {
  '30d': {
    kpi: { time: '18 Days', acceptance: '87.5%', hires: '14', pass: '62.0%' },
    sources: [
      { name: 'LinkedIn', count: 142, conversion: '12%' },
      { name: 'Direct Apply', count: 98, conversion: '8%' },
      { name: 'Internal Referral', count: 34, conversion: '35%' },
      { name: 'Headhunted', count: 12, conversion: '50%' }
    ],
    funnel: [
      { stage: 'New Applicants', count: 286, percentage: 100 },
      { stage: 'Screening', count: 177, percentage: 62 },
      { stage: 'Assessment', count: 88, percentage: 30 },
      { stage: 'Interview Loop', count: 34, percentage: 12 },
      { stage: 'Offer Stage', count: 16, percentage: 5 }
    ]
  },
  '90d': {
    kpi: { time: '21 Days', acceptance: '82.1%', hires: '38', pass: '58.5%' },
    sources: [
      { name: 'LinkedIn', count: 420, conversion: '10%' },
      { name: 'Direct Apply', count: 310, conversion: '7%' },
      { name: 'Internal Referral', count: 85, conversion: '32%' },
      { name: 'Headhunted', count: 29, conversion: '48%' }
    ],
    funnel: [
      { stage: 'New Applicants', count: 844, percentage: 100 },
      { stage: 'Screening', count: 493, percentage: 58 },
      { stage: 'Assessment', count: 220, percentage: 26 },
      { stage: 'Interview Loop', count: 92, percentage: 10 },
      { stage: 'Offer Stage', count: 44, percentage: 5 }
    ]
  },
  'year': {
    kpi: { time: '19 Days', acceptance: '85.0%', hires: '112', pass: '60.2%' },
    sources: [
      { name: 'LinkedIn', count: 1850, conversion: '11%' },
      { name: 'Direct Apply', count: 1200, conversion: '8%' },
      { name: 'Internal Referral', count: 310, conversion: '34%' },
      { name: 'Headhunted', count: 95, conversion: '52%' }
    ],
    funnel: [
      { stage: 'New Applicants', count: 3455, percentage: 100 },
      { stage: 'Screening', count: 2079, percentage: 60 },
      { stage: 'Assessment', count: 967, percentage: 28 },
      { stage: 'Interview Loop', count: 380, percentage: 11 },
      { stage: 'Offer Stage', count: 132, percentage: 4 }
    ]
  }
}

export function getAnalytics(period = '30d') {
  return new Promise((resolve) => {
    setTimeout(() => resolve(analyticsData[period] || analyticsData['30d']), 250)
  })
}

export default { getAnalytics }
