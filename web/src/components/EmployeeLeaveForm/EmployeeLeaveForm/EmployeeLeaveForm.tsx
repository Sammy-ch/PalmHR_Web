import type {
  DeleteEmployeeLeaveFormMutation,
  DeleteEmployeeLeaveFormMutationVariables,
  FindEmployeeLeaveFormById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum, timeTag } from 'src/lib/formatters'

const DELETE_EMPLOYEE_LEAVE_FORM_MUTATION: TypedDocumentNode<
  DeleteEmployeeLeaveFormMutation,
  DeleteEmployeeLeaveFormMutationVariables
> = gql`
  mutation DeleteEmployeeLeaveFormMutation($id: String!) {
    deleteEmployeeLeaveForm(id: $id) {
      id
    }
  }
`

interface Props {
  employeeLeaveForm: NonNullable<FindEmployeeLeaveFormById['employeeLeaveForm']>
}

const EmployeeLeaveForm = ({ employeeLeaveForm }: Props) => {
  const [deleteEmployeeLeaveForm] = useMutation(
    DELETE_EMPLOYEE_LEAVE_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeLeaveForm deleted')
        navigate(routes.employeeLeaveForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteEmployeeLeaveFormMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete employeeLeaveForm ' + id + '?')
    ) {
      deleteEmployeeLeaveForm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EmployeeLeaveForm {employeeLeaveForm.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{employeeLeaveForm.id}</td>
            </tr>
            <tr>
              <th>Requested leave date</th>
              <td>{timeTag(employeeLeaveForm.requested_leave_date)}</td>
            </tr>
            <tr>
              <th>Leave id</th>
              <td>{employeeLeaveForm.leave_id}</td>
            </tr>
            <tr>
              <th>Leave type</th>
              <td>{formatEnum(employeeLeaveForm.leave_type)}</td>
            </tr>
            <tr>
              <th>Leave days</th>
              <td>{employeeLeaveForm.leave_days}</td>
            </tr>
            <tr>
              <th>Leave approval</th>
              <td>{checkboxInputTag(employeeLeaveForm.leave_approval)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployeeLeaveForm({ id: employeeLeaveForm.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employeeLeaveForm.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EmployeeLeaveForm
