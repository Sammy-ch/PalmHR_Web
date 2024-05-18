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
      leave_days
      leave_approval
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
      leave_days
      leave_approval
      leave {
        first_name
        last_name
        profile_image
        position
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

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
