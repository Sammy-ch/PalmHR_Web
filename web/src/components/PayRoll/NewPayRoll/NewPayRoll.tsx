import type {
  CreatePayRollMutation,
  CreatePayRollInput,
  CreatePayRollMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PayRollForm from 'src/components/PayRoll/PayRollForm'

const CREATE_PAY_ROLL_MUTATION: TypedDocumentNode<
  CreatePayRollMutation,
  CreatePayRollMutationVariables
> = gql`
  mutation CreatePayRollMutation($input: CreatePayRollInput!) {
    createPayRoll(input: $input) {
      id
    }
  }
`

const NewPayRoll = () => {
  const [createPayRoll, { loading, error }] = useMutation(
    CREATE_PAY_ROLL_MUTATION,
    {
      onCompleted: () => {
        toast.success('PayRoll created')
        navigate(routes.payRolls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePayRollInput) => {
    createPayRoll({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PayRoll</h2>
      </header>
      <div className="rw-segment-main">
        <PayRollForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPayRoll
