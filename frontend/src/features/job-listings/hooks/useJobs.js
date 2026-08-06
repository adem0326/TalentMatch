import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { fetchJobs, updateJobStatus, createJob } from '../api/jobsApi.js'

export function useJobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const prevRef = useRef([])

  useEffect(() => {
    let mounted = true
    fetchJobs()
      .then((data) => {
        if (mounted) setJobs(data)
      })
      .catch((err) => (mounted ? setError(err.message) : null))
      .finally(() => mounted && setLoading(false))

    return () => (mounted = false)
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'all') return jobs
    return jobs.filter((j) => j.status === filter)
  }, [jobs, filter])

  const setFilterState = useCallback((f) => setFilter(f), [])

  const changeJobStatus = useCallback(async (jobId, status) => {
    prevRef.current = jobs
    setJobs((current) => current.map((j) => (j.id === jobId ? { ...j, status } : j)))
    try {
      await updateJobStatus(jobId, status)
    } catch (err) {
      setError('Unable to update job status')
      setJobs(prevRef.current)
    }
  }, [jobs])

  const addJob = useCallback(async (payload) => {
    try {
      const created = await createJob(payload)
      setJobs((s) => [created, ...s])
      return created
    } catch (err) {
      setError('Unable to create job')
      throw err
    }
  }, [])

  return {
    jobs,
    filtered,
    loading,
    error,
    filter,
    setFilter: setFilterState,
    changeJobStatus,
    addJob,
  }
}
