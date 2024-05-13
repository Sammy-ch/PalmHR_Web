import type {
  DeleteCheckingRequestQueueMutation,
  DeleteCheckingRequestQueueMutationVariables,
  FindCheckingRequestQueueById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

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

interface Props {
  checkingRequestQueue: NonNullable<
    FindCheckingRequestQueueById['checkingRequestQueue']
  >
}

const CheckingRequestQueue = ({ checkingRequestQueue }: Props) => {
  const [deleteCheckingRequestQueue] = useMutation(
    DELETE_CHECKING_REQUEST_QUEUE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequestQueue deleted')
        navigate(routes.checkingRequestQueues())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CheckingRequestQueue {checkingRequestQueue.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{checkingRequestQueue.id}</td>
            </tr>
            <tr>
              <th>Employee id</th>
              <td>{checkingRequestQueue.employee_id}</td>
            </tr>
            <tr>
              <th>Checking date</th>
              <td>{timeTag(checkingRequestQueue.checking_date)}</td>
            </tr>
            <tr>
              <th>Checking time</th>
              <td>{timeTag(checkingRequestQueue.checking_time)}</td>
            </tr>
            <tr>
              <th>Checking type</th>
              <td>{formatEnum(checkingRequestQueue.checking_type)}</td>
            </tr>
            <tr>
              <th>Checking status</th>
              <td>{formatEnum(checkingRequestQueue.checking_status)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCheckingRequestQueue({ id: checkingRequestQueue.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(checkingRequestQueue.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CheckingRequestQueue
