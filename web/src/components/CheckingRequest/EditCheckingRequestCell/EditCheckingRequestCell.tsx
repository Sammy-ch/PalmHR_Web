import type {
  EditCheckingRequestById,
  UpdateCheckingRequestInput,
  UpdateCheckingRequestMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckingRequestForm from 'src/components/CheckingRequest/CheckingRequestForm'

export const QUERY: TypedDocumentNode<EditCheckingRequestById> = gql`
  query EditCheckingRequestById($id: String!) {
    checkingRequest: checkingRequest(id: $id) {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
    }
  }
`

const UPDATE_CHECKING_REQUEST_MUTATION: TypedDocumentNode<
  EditCheckingRequestById,
  UpdateCheckingRequestMutationVariables
> = gql`
  mutation UpdateCheckingRequestMutation(
    $id: String!
    $input: UpdateCheckingRequestInput!
  ) {
    updateCheckingRequest(id: $id, input: $input) {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequest,
}: CellSuccessProps<EditCheckingRequestById>) => {
  const [updateCheckingRequest, { loading, error }] = useMutation(
    UPDATE_CHECKING_REQUEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequest updated')
        navigate(routes.checkingRequests())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCheckingRequestInput,
    id: EditCheckingRequestById['checkingRequest']['id']
  ) => {
    updateCheckingRequest({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CheckingRequest {checkingRequest?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CheckingRequestForm
          checkingRequest={checkingRequest}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
