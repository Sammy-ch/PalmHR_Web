import type {
  FindEmployeeLeaveForms,
  FindEmployeeLeaveFormsVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeLeaveForms from 'src/components/EmployeeLeaveForm/EmployeeLeaveForms'

import { Skeleton } from '../../ui/skeleton'

export const QUERY: TypedDocumentNode<
  FindEmployeeLeaveForms,
  FindEmployeeLeaveFormsVariables
> = gql`
  query FindEmployeeLeaveForms {
    employeeLeaveForms {
      id
      requested_leave_date
      leave_id
      leave_type
      leave_start
      leave_end
      leave_days
      leave_status
      leave {
        first_name
        last_name
        profile_image
        position
      }
    }
    approvedEmployeeLeaveForms {
      id
      requested_leave_date
      leave_id
      leave_type
      leave_start
      leave_end
      leave_days
      leave_status
      leave {
        first_name
        last_name
        profile_image
        position
      }
    }
  }
`

export const Loading = () => {
  return (
    <div>
      <div className="my-10 flex gap-10">
        <Skeleton className="h-36 w-80" />
        <Skeleton className="h-36 w-80" />
      </div>
      <Skeleton className="h-14 w-44" />

      <div className="my-10 flex flex-col gap-5 rounded-md p-10">
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
      </div>
    </div>
  )
}

export const Empty = () => {
  return <div className="rw-text-center">{'No Leave Requests yet.'}</div>
}

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeLeaveForms>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeLeaveForms,
  approvedEmployeeLeaveForms,
}: CellSuccessProps<
  FindEmployeeLeaveForms,
  FindEmployeeLeaveFormsVariables
>) => {
  return (
    <EmployeeLeaveForms
      employeeLeaveForms={employeeLeaveForms}
      approvedEmployeeLeaveForms={approvedEmployeeLeaveForms}
    />
  )
}
