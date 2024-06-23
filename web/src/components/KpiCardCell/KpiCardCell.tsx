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
  query FindKpiCardQuery($id: String!) {
    kpiCard: organizationAttendanceKpi(id: $id) {
      TotalWorkhours
      AbstenteeismRate
      EarlyAttendaceRate
      LateAttedanceRate
      TotalOvertime
      TotalSickLeaves
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
    <section className=" mb-10 grid w-full gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4  ">
      <KpiCard
        title={'OnTime Attendance'}
        metric={kpiCard.EarlyAttendaceRate}
        icon={BadgeCheck}
      />
      <KpiCard
        title={'Absenteeism rate'}
        icon={ListFilter}
        metric={kpiCard.AbstenteeismRate}
      />
      <KpiCard
        title={'Average working hours'}
        metric={kpiCard.TotalWorkhours}
        icon={Timer}
      />
      <KpiCard
        title={'Late Attendance'}
        metric={kpiCard.LateAttedanceRate}
        icon={BookX}
      />
    </section>
  )
}
