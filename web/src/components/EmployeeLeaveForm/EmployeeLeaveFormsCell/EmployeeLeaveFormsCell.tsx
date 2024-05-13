import type {
  FindEmployeeLeaveForms,
  FindEmployeeLeaveFormsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeeLeaveForms yet. '}
      <Link to={routes.newEmployeeLeaveForm()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeLeaveForms>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeLeaveForms,
}: CellSuccessProps<
  FindEmployeeLeaveForms,
  FindEmployeeLeaveFormsVariables
>) => {
  return <EmployeeLeaveForms employeeLeaveForms={employeeLeaveForms} />
}
