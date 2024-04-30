import type {
  DeleteLeaveCustomMutation,
  DeleteLeaveCustomMutationVariables,
  FindLeaveCustomById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_LEAVE_CUSTOM_MUTATION: TypedDocumentNode<
  DeleteLeaveCustomMutation,
  DeleteLeaveCustomMutationVariables
> = gql`
  mutation DeleteLeaveCustomMutation($id: String!) {
    deleteLeaveCustom(id: $id) {
      id
    }
  }
`

interface Props {
  leaveCustom: NonNullable<FindLeaveCustomById['leaveCustom']>
}

const LeaveCustom = ({ leaveCustom }: Props) => {
  const [deleteLeaveCustom] = useMutation(DELETE_LEAVE_CUSTOM_MUTATION, {
    onCompleted: () => {
      toast.success('LeaveCustom deleted')
      navigate(routes.leaveCustoms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLeaveCustomMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete leaveCustom ' + id + '?')) {
      deleteLeaveCustom({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LeaveCustom {leaveCustom.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{leaveCustom.id}</td>
            </tr>
            <tr>
              <th>Requested leave date</th>
              <td>{timeTag(leaveCustom.requested_leave_date)}</td>
            </tr>
            <tr>
              <th>Leave id</th>
              <td>{leaveCustom.leave_id}</td>
            </tr>
            <tr>
              <th>Leave type</th>
              <td>{leaveCustom.leave_type}</td>
            </tr>
            <tr>
              <th>Leave days</th>
              <td>{leaveCustom.leave_days}</td>
            </tr>
            <tr>
              <th>Leave approval</th>
              <td>{checkboxInputTag(leaveCustom.leave_approval)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLeaveCustom({ id: leaveCustom.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(leaveCustom.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default LeaveCustom
