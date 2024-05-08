import type {
  DeleteCheckingRequestMutation,
  DeleteCheckingRequestMutationVariables,
  FindCheckingRequests,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CheckingRequest/CheckingRequestsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

const DELETE_CHECKING_REQUEST_MUTATION: TypedDocumentNode<
  DeleteCheckingRequestMutation,
  DeleteCheckingRequestMutationVariables
> = gql`
  mutation DeleteCheckingRequestMutation($id: String!) {
    deleteCheckingRequest(id: $id) {
      id
    }
  }
`

const CheckingRequestsList = ({ checkingRequests }: FindCheckingRequests) => {
  const [deleteCheckingRequest] = useMutation(
    DELETE_CHECKING_REQUEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequest deleted')
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

  const onDeleteClick = (id: DeleteCheckingRequestMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete checkingRequest ' + id + '?')
    ) {
      deleteCheckingRequest({ variables: { id } })
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
          {checkingRequests.map((checkingRequest) => (
            <tr key={checkingRequest.id}>
              <td>{truncate(checkingRequest.id)}</td>
              <td>{truncate(checkingRequest.employee_id)}</td>
              <td>{timeTag(checkingRequest.checking_date)}</td>
              <td>{timeTag(checkingRequest.checking_time)}</td>
              <td>{formatEnum(checkingRequest.checking_type)}</td>
              <td>{formatEnum(checkingRequest.checking_status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.checkingRequest({ id: checkingRequest.id })}
                    title={
                      'Show checkingRequest ' + checkingRequest.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCheckingRequest({ id: checkingRequest.id })}
                    title={'Edit checkingRequest ' + checkingRequest.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete checkingRequest ' + checkingRequest.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(checkingRequest.id)}
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

export default CheckingRequestsList
