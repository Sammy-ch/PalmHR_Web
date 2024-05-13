import type {
  EditCheckingRequestQueueById,
  UpdateCheckingRequestQueueInput,
  UpdateCheckingRequestQueueMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckingRequestQueueForm from 'src/components/CheckingRequestQueue/CheckingRequestQueueForm'

export const QUERY: TypedDocumentNode<EditCheckingRequestQueueById> = gql`
  query EditCheckingRequestQueueById($id: String!) {
    checkingRequestQueue: checkingRequestQueue(id: $id) {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
    }
  }
`

const UPDATE_CHECKING_REQUEST_QUEUE_MUTATION: TypedDocumentNode<
  EditCheckingRequestQueueById,
  UpdateCheckingRequestQueueMutationVariables
> = gql`
  mutation UpdateCheckingRequestQueueMutation(
    $id: String!
    $input: UpdateCheckingRequestQueueInput!
  ) {
    updateCheckingRequestQueue(id: $id, input: $input) {
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
  checkingRequestQueue,
}: CellSuccessProps<EditCheckingRequestQueueById>) => {
  const [updateCheckingRequestQueue, { loading, error }] = useMutation(
    UPDATE_CHECKING_REQUEST_QUEUE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequestQueue updated')
        navigate(routes.checkingRequestQueues())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCheckingRequestQueueInput,
    id: EditCheckingRequestQueueById['checkingRequestQueue']['id']
  ) => {
    updateCheckingRequestQueue({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CheckingRequestQueue {checkingRequestQueue?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CheckingRequestQueueForm
          checkingRequestQueue={checkingRequestQueue}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
