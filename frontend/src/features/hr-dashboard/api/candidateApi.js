const mockCandidates = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior Full-Stack Engineer',
    stage: 'Applied',
    tags: ['React', 'Node.js'],
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    role: 'Full-Stack Engineer',
    stage: 'Applied',
    tags: ['Python', 'AWS'],
  },
  {
    id: '3',
    name: 'Jordan Kim',
    role: 'DevOps Engineer',
    stage: 'Applied',
    tags: ['Kubernetes', 'Docker'],
  },
  {
    id: '4',
    name: 'Emma Davis',
    role: 'Product Manager',
    stage: 'Reviewing',
    tags: ['B2B SaaS', '5+ yrs'],
  },
  {
    id: '5',
    name: 'Marcus Johnson',
    role: 'Senior Full-Stack Engineer',
    stage: 'Reviewing',
    tags: ['TypeScript', 'GraphQL'],
  },
  {
    id: '6',
    name: 'Lisa Wang',
    role: 'UX/UI Designer',
    stage: 'Interview',
    tags: ['Figma', 'Design Systems'],
  },
  {
    id: '7',
    name: 'David Brown',
    role: 'Senior Full-Stack Engineer',
    stage: 'Interview',
    tags: ['Go', 'PostgreSQL'],
  },
  {
    id: '8',
    name: 'Nina Patel',
    role: 'Senior Full-Stack Engineer',
    stage: 'Offer',
    tags: ['Offer Sent'],
  },
  {
    id: '9',
    name: 'Carlos Lopez',
    role: 'Product Manager',
    stage: 'Offer',
    tags: ['Pending Response'],
  },
]

export function fetchPipeline() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(mockCandidates.map((candidate) => ({ ...candidate })))
    }, 400)
  })
}

export function updateCandidateStage(candidateId, stage) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const candidate = mockCandidates.find((item) => item.id === candidateId)

      if (!candidate) {
        reject(new Error('Candidate not found'))
        return
      }

      candidate.stage = stage
      resolve({ id: candidateId, stage })
    }, 300)
  })
}
