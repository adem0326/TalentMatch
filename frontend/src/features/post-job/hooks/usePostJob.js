import { useState } from 'react'
import { createJob } from '../api/postJobApi'

export function usePostJob() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  async function submit(data) {
    setError(null)
    setLoading(true)
    try {
      // Basic validation
      const min = parseInt(data.salaryMin || 0, 10)
      const max = parseInt(data.salaryMax || 0, 10)
      if (!isNaN(min) && !isNaN(max) && min >= max) {
        throw new Error('Maximum salary must be greater than minimum salary')
      }

      const saved = await createJob(data)
      setResult(saved)
      return saved
    } catch (err) {
      setError(err.message || String(err))
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, result }
}
