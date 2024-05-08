import type {
  DeleteCheckingRequestMutation,
  DeleteCheckingRequestMutationVariables,
  FindCheckingRequestById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

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

interface Props {
  checkingRequest: NonNullable<FindCheckingRequestById['checkingRequest']>
}

const CheckingRequest = ({ checkingRequest }: Props) => {
  
  const [deleteCheckingRequest] = useMutation(
    DELETE_CHECKING_REQUEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequest deleted')
        navigate(routes.checkingRequests())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CheckingRequest {checkingRequest.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{checkingRequest.id}</td>
            </tr>
            <tr>
              <th>Employee id</th>
              <td>{checkingRequest.employee_id}</td>
            </tr>
            <tr>
              <th>Checking date</th>
              <td>{timeTag(checkingRequest.checking_date)}</td>
            </tr>
            <tr>
              <th>Checking time</th>
              <td>{timeTag(checkingRequest.checking_time)}</td>
            </tr>
            <tr>
              <th>Checking type</th>
              <td>{formatEnum(checkingRequest.checking_type)}</td>
            </tr>
            <tr>
              <th>Checking status</th>
              <td>{formatEnum(checkingRequest.checking_status)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCheckingRequest({ id: checkingRequest.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(checkingRequest.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CheckingRequest
