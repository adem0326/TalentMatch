const mockJobs = [
  {
    id: 'j1',
    title: 'Senior Full-Stack Engineer',
    meta: 'Engineering · Remote · Posted 3 days ago',
    status: 'active',
    applicants: 24,
  },
  {
    id: 'j2',
    title: 'Product Manager',
    meta: 'Product · San Francisco · Posted 5 days ago',
    status: 'active',
    applicants: 18,
  },
  {
    id: 'j3',
    title: 'UX/UI Designer',
    meta: 'Design · Remote · Posted 1 week ago',
    status: 'active',
    applicants: 31,
  },
  {
    id: 'j4',
    title: 'DevOps Engineer',
    meta: 'Engineering · New York · Posted 2 weeks ago',
    status: 'closed',
    applicants: 42,
  },
  {
    id: 'j5',
    title: 'Sales Account Executive',
    meta: 'Sales · Remote · Draft',
    status: 'draft',
    applicants: null,
  },
  {
    id: 'j6',
    title: 'QA Automation Engineer',
    meta: 'Engineering · Austin · Posted 10 days ago',
    status: 'active',
    applicants: 16,
  },
]

export function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockJobs.map((j) => ({ ...j }))), 300)
  })
}

export function updateJobStatus(jobId, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = mockJobs.find((j) => j.id === jobId)
      if (!job) return reject(new Error('Job not found'))
      job.status = status
      resolve({ id: jobId, status })
    }, 200)
  })
}

export function createJob(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const job = { id: `j${mockJobs.length + 1}`, ...payload }
      mockJobs.push(job)
      resolve({ ...job })
    }, 200)
  })
}
