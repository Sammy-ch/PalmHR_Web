import type {
  DeletePayRollMutation,
  DeletePayRollMutationVariables,
  FindPayRollById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PAY_ROLL_MUTATION: TypedDocumentNode<
  DeletePayRollMutation,
  DeletePayRollMutationVariables
> = gql`
  mutation DeletePayRollMutation($id: String!) {
    deletePayRoll(id: $id) {
      id
    }
  }
`

interface Props {
  payRoll: NonNullable<FindPayRollById['payRoll']>
}

const PayRoll = ({ payRoll }: Props) => {
  const [deletePayRoll] = useMutation(DELETE_PAY_ROLL_MUTATION, {
    onCompleted: () => {
      toast.success('PayRoll deleted')
      navigate(routes.payRolls())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePayRollMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete payRoll ' + id + '?')) {
      deletePayRoll({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PayRoll {payRoll.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{payRoll.id}</td>
            </tr>
            <tr>
              <th>Pay period start</th>
              <td>{timeTag(payRoll.pay_period_start)}</td>
            </tr>
            <tr>
              <th>Pay period end</th>
              <td>{timeTag(payRoll.pay_period_end)}</td>
            </tr>
            <tr>
              <th>Hours worked</th>
              <td>{timeTag(payRoll.hours_Worked)}</td>
            </tr>
            <tr>
              <th>Overtime</th>
              <td>{timeTag(payRoll.overtime)}</td>
            </tr>
            <tr>
              <th>Base salary</th>
              <td>{payRoll.base_salary}</td>
            </tr>
            <tr>
              <th>Netpay</th>
              <td>{payRoll.netpay}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPayRoll({ id: payRoll.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(payRoll.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PayRoll
