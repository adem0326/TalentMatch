import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchPipeline, updateCandidateStage } from '../api/candidateApi.js'

const stageOrder = ['Applied', 'Reviewing', 'Interview', 'Offer']

export function usePipeline() {
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const previousCandidatesRef = useRef([])

  useEffect(() => {
    let isMounted = true

    fetchPipeline()
      .then((payload) => {
        if (isMounted) {
          setCandidates(payload)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const moveCandidate = useCallback(async (candidateId, nextStage) => {
    setError(null)
    setCandidates((currentCandidates) => {
      const candidate = currentCandidates.find((item) => item.id === candidateId)
      if (!candidate || candidate.stage === nextStage) {
        return currentCandidates
      }

      previousCandidatesRef.current = currentCandidates

      return currentCandidates.map((item) =>
        item.id === candidateId ? { ...item, stage: nextStage } : item,
      )
    })

    try {
      await updateCandidateStage(candidateId, nextStage)
    } catch (err) {
      setError('Unable to move candidate. Please try again.')
      setCandidates(previousCandidatesRef.current)
    }
  }, [])

  return {
    candidates,
    loading,
    error,
    stageOrder,
    moveCandidate,
  }
}
