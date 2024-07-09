// src/hooks/useRetry.ts
import { useState, useEffect } from 'react'

export function useRetry(
  fetchFunction: () => Promise<any>,
  maxRetries = 10,
  retryDelay = 1000
) {
  const [data, setData] = useState(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let retries = 0

    const attemptFetch = async () => {
      try {
        const result = await fetchFunction()
        setData(result)
        setLoading(false)
      } catch (err) {
        if (retries < maxRetries) {
          retries++
          setTimeout(attemptFetch, retryDelay)
        } else {
          setError(err as Error)
          setLoading(false)
        }
      }
    }

    attemptFetch()
  }, [fetchFunction, maxRetries, retryDelay])

  return { data, error, loading }
}
