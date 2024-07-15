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
  return (
    <section className="mb-10 grid w-[1000px] gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4">
      <KpiCard
        title={'On-Time Attendance'}
        metric={`${kpiCard.onTimePercentage}%`}
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
        metric={`${kpiCard.lateAttendanceRate}%`}
        icon={BookX}
      />
    </section>
  )
}
