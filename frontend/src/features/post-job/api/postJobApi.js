// Simulated API for creating job postings
let _id = Date.now()

export function createJob(job) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const record = { id: String(++_id), ...job }
      // In a real app we'd persist; here we just resolve
      resolve(record)
    }, 500)
  })
}
