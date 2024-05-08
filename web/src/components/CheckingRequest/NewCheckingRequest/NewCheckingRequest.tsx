import type {
  CreateCheckingRequestMutation,
  CreateCheckingRequestInput,
  CreateCheckingRequestMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckingRequestForm from 'src/components/CheckingRequest/CheckingRequestForm'

const CREATE_CHECKING_REQUEST_MUTATION: TypedDocumentNode<
  CreateCheckingRequestMutation,
  CreateCheckingRequestMutationVariables
> = gql`
  mutation CreateCheckingRequestMutation($input: CreateCheckingRequestInput!) {
    createCheckingRequest(input: $input) {
      id
    }
  }
`

const NewCheckingRequest = () => {
  const [createCheckingRequest, { loading, error }] = useMutation(
    CREATE_CHECKING_REQUEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequest created')
        navigate(routes.checkingRequests())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCheckingRequestInput) => {
    createCheckingRequest({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CheckingRequest</h2>
      </header>
      <div className="rw-segment-main">
        <CheckingRequestForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCheckingRequest
