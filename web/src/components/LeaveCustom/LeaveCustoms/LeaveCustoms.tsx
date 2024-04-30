import type {
  DeleteLeaveCustomMutation,
  DeleteLeaveCustomMutationVariables,
  FindLeaveCustoms,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LeaveCustom/LeaveCustomsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

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

const LeaveCustomsList = ({ leaveCustoms }: FindLeaveCustoms) => {
  const [deleteLeaveCustom] = useMutation(DELETE_LEAVE_CUSTOM_MUTATION, {
    onCompleted: () => {
      toast.success('LeaveCustom deleted')
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

  const onDeleteClick = (id: DeleteLeaveCustomMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete leaveCustom ' + id + '?')) {
      deleteLeaveCustom({ variables: { id } })
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
          {leaveCustoms.map((leaveCustom) => (
            <tr key={leaveCustom.id}>
              <td>{truncate(leaveCustom.id)}</td>
              <td>{timeTag(leaveCustom.requested_leave_date)}</td>
              <td>{truncate(leaveCustom.leave_id)}</td>
              <td>{truncate(leaveCustom.leave_type)}</td>
              <td>{truncate(leaveCustom.leave_days)}</td>
              <td>{checkboxInputTag(leaveCustom.leave_approval)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.leaveCustom({ id: leaveCustom.id })}
                    title={'Show leaveCustom ' + leaveCustom.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLeaveCustom({ id: leaveCustom.id })}
                    title={'Edit leaveCustom ' + leaveCustom.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete leaveCustom ' + leaveCustom.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(leaveCustom.id)}
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

export default LeaveCustomsList
