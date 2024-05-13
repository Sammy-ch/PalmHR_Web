import type {
  FindEmployeeLeaveFormById,
  FindEmployeeLeaveFormByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeLeaveForm from 'src/components/EmployeeLeaveForm/EmployeeLeaveForm'

export const QUERY: TypedDocumentNode<
  FindEmployeeLeaveFormById,
  FindEmployeeLeaveFormByIdVariables
> = gql`
  query FindEmployeeLeaveFormById($id: String!) {
    employeeLeaveForm: employeeLeaveForm(id: $id) {
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

export const Empty = () => <div>EmployeeLeaveForm not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeLeaveFormByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeLeaveForm,
}: CellSuccessProps<
  FindEmployeeLeaveFormById,
  FindEmployeeLeaveFormByIdVariables
>) => {
  return <EmployeeLeaveForm employeeLeaveForm={employeeLeaveForm} />
}
