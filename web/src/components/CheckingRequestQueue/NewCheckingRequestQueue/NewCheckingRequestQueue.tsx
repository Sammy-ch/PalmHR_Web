import type {
  CreateCheckingRequestQueueMutation,
  CreateCheckingRequestQueueInput,
  CreateCheckingRequestQueueMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckingRequestQueueForm from 'src/components/CheckingRequestQueue/CheckingRequestQueueForm'

const CREATE_CHECKING_REQUEST_QUEUE_MUTATION: TypedDocumentNode<
  CreateCheckingRequestQueueMutation,
  CreateCheckingRequestQueueMutationVariables
> = gql`
  mutation CreateCheckingRequestQueueMutation(
    $input: CreateCheckingRequestQueueInput!
  ) {
    createCheckingRequestQueue(input: $input) {
      id
    }
  }
`

const NewCheckingRequestQueue = () => {
  const [createCheckingRequestQueue, { loading, error }] = useMutation(
    CREATE_CHECKING_REQUEST_QUEUE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequestQueue created')
        navigate(routes.checkingRequestQueues())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCheckingRequestQueueInput) => {
    createCheckingRequestQueue({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New CheckingRequestQueue
        </h2>
      </header>
      <div className="rw-segment-main">
        <CheckingRequestQueueForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewCheckingRequestQueue
