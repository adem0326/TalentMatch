import { useEffect, useState } from 'react'
import { getAnalytics } from '../api/analyticsApi'

export function useAnalytics(initial = '30d') {
  const [period, setPeriod] = useState(initial)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    getAnalytics(period)
      .then((d) => {
        if (!mounted) return
        setData(d)
      })
      .catch((err) => {
        if (!mounted) return
        setError(err.message || String(err))
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => { mounted = false }
  }, [period])

  return { period, setPeriod, data, loading, error }
}
