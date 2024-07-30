import { useState, useEffect } from 'react'

import { createClient } from '@supabase/supabase-js'
import { BadgeCheck, ListFilter, Timer, BookX } from 'lucide-react'
import type { FindKpiCardQuery, FindKpiCardQueryVariables } from 'types/graphql'

import type { CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import KpiCard from 'src/components/KpiCard/KpiCard'
import { useRetry } from 'src/hooks/useRetry'

export const QUERY: TypedDocumentNode<
  FindKpiCardQuery,
  FindKpiCardQueryVariables
> = gql`
  query FindKpiCardQuery {
    kpiCard: getOrganizationAttendanceKPI {
      onTimePercentage
      absenteeismRate
      averageWorkingHours
      lateAttendanceRate
    }
  }
`

// Initialize the client with your Supabase project URL and API key
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// Define the table you want to query
const tableName = 'EmployeeAttendance'

// Fetch data from the table
async function fetchData() {
  const { data, error } = await supabase.from(tableName).select('*')

  if (error) {
    console.error('Error fetching data:', error)
    return
  }

  console.log('Fetched data:', data)
  return data[0]
}

const dat = 0

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <section className="grid grid-flow-col gap-5 rounded-md ">
      <KpiCard title={'OnTime Attendance'} metric={'--/'} icon={BadgeCheck} />
      <KpiCard title={'Absenteeism rate'} icon={ListFilter} metric={'--/'} />
      <KpiCard title={'Average working hours'} metric={'--/'} icon={Timer} />
      <KpiCard title={'Late Attendance'} metric={'--/'} icon={BookX} />
    </section>
  )
}

export const Failure = () => {
  const {
    data,
    error: retryError,
    loading,
  } = useRetry(
    async () => {
      const result = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: QUERY.loc?.source.body,
        }),
      })
      if (!result.ok) {
        throw new Error('Network response was not ok')
      }
      return result.json()
    },
    3,
    2000
  )

  if (loading) {
    return <Loading />
  }

  if (retryError) {
    return <div style={{ color: 'red' }}>Error: {retryError.message}</div>
  }

  if (data) {
    return <Success kpiCard={data.data.kpiCard} />
  }

  return null
}

export const Success = ({
  kpiCard,
}: CellSuccessProps<FindKpiCardQuery, FindKpiCardQueryVariables>) => {
  const [allAttendenciesCount, setAllAttendenciesCount] = useState(0)
  const [onTimeAttendenciesCount, setOnTimeAttendenciesCount] = useState(0)
  const [lateAttendenciesCount, setLateTimeAttendenciesCount] = useState(0)
  useEffect(() => {
    const fetchOnTimeRowNumber = async () => {
      const { count, error } = await supabase
        .from(tableName)
        .select('*', { count: 'exact' })
        .lt('checkin_time', '8:10:00')

      if (error) {
        console.error('Error fetching data:', error)
        return
      }

      console.log('number of all attendancies : ', count)
      setOnTimeAttendenciesCount(count)
    }

    const fetchLateTimeRowNumber = async () => {
      const { count, error } = await supabase
        .from(tableName)
        .select('*', { count: 'exact' })
        .gt('checkin_time', '8:10:00')

      if (error) {
        console.error('Error fetching data:', error)
        return
      }

      console.log('number of all attendancies : ', count)
      setLateTimeAttendenciesCount(count)
    }

    const fetchRowNumber = async () => {
      const { count, error } = await supabase
        .from(tableName)
        .select('*', { count: 'exact' })

      if (error) {
        console.error('Error fetching data:', error)
        return
      }

      console.log('number of all attendancies : ', count)
      setAllAttendenciesCount(count)
    }

    fetchLateTimeRowNumber()
    fetchOnTimeRowNumber()
    fetchRowNumber()
  }, [])
  return (
    <section className="mb-10 grid w-[1000px] gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4">
      <KpiCard
        title={'On-Time Attendance'}
        metric={`${Math.round(
          (onTimeAttendenciesCount * 100) / allAttendenciesCount
        )}%`}
        icon={BadgeCheck}
      />
      <KpiCard
        title={'Absenteeism Rate'}
        icon={ListFilter}
        metric={`${kpiCard.absenteeismRate}%`}
      />
      <KpiCard
        title={'Average Working Hours'}
        metric={`${kpiCard.averageWorkingHours}h`}
        icon={Timer}
      />
      <KpiCard
        title={'Late Attendance'}
        metric={`${Math.round(
          (lateAttendenciesCount * 100) / allAttendenciesCount
        )}%`}
        icon={BookX}
      />
    </section>
  )
}
