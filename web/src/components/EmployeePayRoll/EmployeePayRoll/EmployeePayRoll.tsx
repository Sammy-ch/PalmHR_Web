import type {
  DeleteEmployeePayRollMutation,
  DeleteEmployeePayRollMutationVariables,
  FindEmployeePayRollById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

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

interface Props {
  employeePayRoll: NonNullable<FindEmployeePayRollById['employeePayRoll']>
}

const EmployeePayRoll = ({ employeePayRoll }: Props) => {
  const [deleteEmployeePayRoll] = useMutation(
    DELETE_EMPLOYEE_PAY_ROLL_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeePayRoll deleted')
        navigate(routes.employeePayRolls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EmployeePayRoll {employeePayRoll.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{employeePayRoll.id}</td>
            </tr>
            <tr>
              <th>Pay period start</th>
              <td>{timeTag(employeePayRoll.pay_period_start)}</td>
            </tr>
            <tr>
              <th>Pay period end</th>
              <td>{timeTag(employeePayRoll.pay_period_end)}</td>
            </tr>
            <tr>
              <th>Base salary</th>
              <td>{employeePayRoll.base_salary}</td>
            </tr>
            <tr>
              <th>Net salary</th>
              <td>{employeePayRoll.net_salary}</td>
            </tr>
            <tr>
              <th>Gross salary</th>
              <td>{employeePayRoll.gross_salary}</td>
            </tr>
            <tr>
              <th>Bonuses</th>
              <td>{employeePayRoll.bonuses}</td>
            </tr>
            <tr>
              <th>Labor cost</th>
              <td>{employeePayRoll.labor_cost}</td>
            </tr>
            <tr>
              <th>Ipr</th>
              <td>{employeePayRoll.IPR}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployeePayRoll({ id: employeePayRoll.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employeePayRoll.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EmployeePayRoll
