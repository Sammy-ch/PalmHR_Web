import type {
  DeleteEmployeeLeaveFormMutation,
  DeleteEmployeeLeaveFormMutationVariables,
  FindEmployeeLeaveForms,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeLeaveForm/EmployeeLeaveFormsCell'
import {
  checkboxInputTag,
  formatEnum,
  timeTag,
  truncate,
} from 'src/lib/formatters'

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

const EmployeeLeaveFormsList = ({
  employeeLeaveForms,
}: FindEmployeeLeaveForms) => {
  const [deleteEmployeeLeaveForm] = useMutation(
    DELETE_EMPLOYEE_LEAVE_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeLeaveForm deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Requested leave date</th>
            <th>Leave id</th>
            <th>Leave type</th>
            <th>Leave days</th>
            <th>Leave approval</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employeeLeaveForms.map((employeeLeaveForm) => (
            <tr key={employeeLeaveForm.id}>
              <td>{truncate(employeeLeaveForm.id)}</td>
              <td>{timeTag(employeeLeaveForm.requested_leave_date)}</td>
              <td>{truncate(employeeLeaveForm.leave_id)}</td>
              <td>{formatEnum(employeeLeaveForm.leave_type)}</td>
              <td>{truncate(employeeLeaveForm.leave_days)}</td>
              <td>{checkboxInputTag(employeeLeaveForm.leave_approval)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employeeLeaveForm({ id: employeeLeaveForm.id })}
                    title={
                      'Show employeeLeaveForm ' +
                      employeeLeaveForm.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployeeLeaveForm({
                      id: employeeLeaveForm.id,
                    })}
                    title={'Edit employeeLeaveForm ' + employeeLeaveForm.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete employeeLeaveForm ' + employeeLeaveForm.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(employeeLeaveForm.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeLeaveFormsList
