import type {
  DeleteCheckingRequestQueueMutation,
  DeleteCheckingRequestQueueMutationVariables,
  FindCheckingRequestQueues,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CheckingRequestQueue/CheckingRequestQueuesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

const DELETE_CHECKING_REQUEST_QUEUE_MUTATION: TypedDocumentNode<
  DeleteCheckingRequestQueueMutation,
  DeleteCheckingRequestQueueMutationVariables
> = gql`
  mutation DeleteCheckingRequestQueueMutation($id: String!) {
    deleteCheckingRequestQueue(id: $id) {
      id
    }
  }
`

const CheckingRequestQueuesList = ({
  checkingRequestQueues,
}: FindCheckingRequestQueues) => {
  const [deleteCheckingRequestQueue] = useMutation(
    DELETE_CHECKING_REQUEST_QUEUE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequestQueue deleted')
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
    id: DeleteCheckingRequestQueueMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete checkingRequestQueue ' + id + '?'
      )
    ) {
      deleteCheckingRequestQueue({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee id</th>
            <th>Checking date</th>
            <th>Checking time</th>
            <th>Checking type</th>
            <th>Checking status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {checkingRequestQueues.map((checkingRequestQueue) => (
            <tr key={checkingRequestQueue.id}>
              <td>{truncate(checkingRequestQueue.id)}</td>
              <td>{truncate(checkingRequestQueue.employee_id)}</td>
              <td>{timeTag(checkingRequestQueue.checking_date)}</td>
              <td>{timeTag(checkingRequestQueue.checking_time)}</td>
              <td>{formatEnum(checkingRequestQueue.checking_type)}</td>
              <td>{formatEnum(checkingRequestQueue.checking_status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.checkingRequestQueue({
                      id: checkingRequestQueue.id,
                    })}
                    title={
                      'Show checkingRequestQueue ' +
                      checkingRequestQueue.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCheckingRequestQueue({
                      id: checkingRequestQueue.id,
                    })}
                    title={
                      'Edit checkingRequestQueue ' + checkingRequestQueue.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete checkingRequestQueue ' + checkingRequestQueue.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(checkingRequestQueue.id)}
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

export default CheckingRequestQueuesList
