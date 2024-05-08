import type {
  FindEmployeeAttendances,
  FindEmployeeAttendancesVariables,
} from 'types/graphql'
import { Skeleton } from 'web/src/components/ui/skeleton'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import AttendanceActivityTable from 'src/components/AttendanceActivityTable'

export const QUERY: TypedDocumentNode<
  FindEmployeeAttendances,
  FindEmployeeAttendancesVariables
> = gql`
  query FindEmployeeAttendances {
    employeeAttendances {
      attendance_id
      employee_id
      checkin_time
      checkout_time
      checking_date
      working_time
      presence_tag
      employee {
        first_name
        last_name
        position
        email
      }
    }
  }
`

export const Loading = () => {
  return (
    <main className={'flex flex-col gap-y-4'}>
      <Skeleton className="h-[100px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
    </main>
  )
}

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeeAttendances yet. '}
      <Link to={routes.newEmployeeAttendance()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeAttendances>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendances,
}: CellSuccessProps<
  FindEmployeeAttendances,
  FindEmployeeAttendancesVariables
>) => {
  return <AttendanceActivityTable employeeAttendances={employeeAttendances} />
}
