import type {
  DeletePayRollMutation,
  DeletePayRollMutationVariables,
  FindPayRolls,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PayRoll/PayRollsCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const PayRollsList = ({ payRolls }: FindPayRolls) => {
  const [deletePayRoll] = useMutation(DELETE_PAY_ROLL_MUTATION, {
    onCompleted: () => {
      toast.success('PayRoll deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePayRollMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete payRoll ' + id + '?')) {
      deletePayRoll({ variables: { id } })
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
            <th>Overtime</th>
            <th>Base salary</th>
            <th>Netpay</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {payRolls.map((payRoll) => (
            <tr key={payRoll.id}>
              <td>{truncate(payRoll.id)}</td>
              <td>{timeTag(payRoll.pay_period_start)}</td>
              <td>{timeTag(payRoll.pay_period_end)}</td>
              <td>{timeTag(payRoll.hours_Worked)}</td>
              <td>{timeTag(payRoll.overtime)}</td>
              <td>{truncate(payRoll.base_salary)}</td>
              <td>{truncate(payRoll.netpay)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.payRoll({ id: payRoll.id })}
                    title={'Show payRoll ' + payRoll.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPayRoll({ id: payRoll.id })}
                    title={'Edit payRoll ' + payRoll.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete payRoll ' + payRoll.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(payRoll.id)}
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

export default PayRollsList
