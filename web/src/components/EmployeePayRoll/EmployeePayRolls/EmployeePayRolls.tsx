import type {
  DeleteEmployeePayRollMutation,
  DeleteEmployeePayRollMutationVariables,
  FindEmployeePayRolls,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeePayRoll/EmployeePayRollsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_EMPLOYEE_PAY_ROLL_MUTATION: TypedDocumentNode<
  DeleteEmployeePayRollMutation,
  DeleteEmployeePayRollMutationVariables
> = gql`
  mutation DeleteEmployeePayRollMutation($id: String!) {
    deleteEmployeePayRoll(id: $id) {
      id
    }
  }
`

const EmployeePayRollsList = ({ employeePayRolls }: FindEmployeePayRolls) => {
  const [deleteEmployeePayRoll] = useMutation(
    DELETE_EMPLOYEE_PAY_ROLL_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeePayRoll deleted')
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

  const onDeleteClick = (id: DeleteEmployeePayRollMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete employeePayRoll ' + id + '?')
    ) {
      deleteEmployeePayRoll({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Pay period start</th>
            <th>Pay period end</th>
            <th>Hours worked</th>
            <th>Base salary</th>
            <th>Overtime</th>
            <th>Netpay</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employeePayRolls.map((employeePayRoll) => (
            <tr key={employeePayRoll.id}>
              <td>{truncate(employeePayRoll.id)}</td>
              <td>{timeTag(employeePayRoll.pay_period_start)}</td>
              <td>{timeTag(employeePayRoll.pay_period_end)}</td>
              <td>{timeTag(employeePayRoll.hours_Worked)}</td>
              <td>{truncate(employeePayRoll.base_salary)}</td>
              <td>{timeTag(employeePayRoll.overtime)}</td>
              <td>{truncate(employeePayRoll.netpay)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employeePayRoll({ id: employeePayRoll.id })}
                    title={
                      'Show employeePayRoll ' + employeePayRoll.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployeePayRoll({ id: employeePayRoll.id })}
                    title={'Edit employeePayRoll ' + employeePayRoll.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete employeePayRoll ' + employeePayRoll.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(employeePayRoll.id)}
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

export default EmployeePayRollsList
