import { BadgeCheck } from 'lucide-react'
import { ListFilter } from 'lucide-react'
import { Timer } from 'lucide-react'
import { BookX } from 'lucide-react'
import type { FindKpiCardQuery, FindKpiCardQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import KpiCard from 'src/components/KpiCard/KpiCard'

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

export const Failure = ({
  error,
}: CellFailureProps<FindKpiCardQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  kpiCard,
}: CellSuccessProps<FindKpiCardQuery, FindKpiCardQueryVariables>) => {
  return (
    <section className=" mb-10 grid w-[1000px] gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4  ">
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
