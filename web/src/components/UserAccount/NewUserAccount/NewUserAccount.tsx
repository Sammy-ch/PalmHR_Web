import type {
  CreateUserAccountMutation,
  CreateUserAccountInput,
  CreateUserAccountMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import UserAccountForm from 'src/components/UserAccount/UserAccountForm'

const CREATE_USER_ACCOUNT_MUTATION: TypedDocumentNode<
  CreateUserAccountMutation,
  CreateUserAccountMutationVariables
> = gql`
  mutation CreateUserAccountMutation($input: CreateUserAccountInput!) {
    createUserAccount(input: $input) {
      id
    }
  }
`

const NewUserAccount = () => {
  const { currentUser } = useAuth()
  if (!currentUser) {
    navigate(routes.organizations())
  }

  const userId = currentUser?.sub as string

  const [createUserAccount, { loading, error }] = useMutation(
    CREATE_USER_ACCOUNT_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserAccount created')
        navigate(routes.userAccounts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUserAccountInput) => {
    const updatedInput: CreateUserAccountInput = {
      ...input,
      id: userId, // Add the generated tag to the input
    }
    createUserAccount({ variables: { input: updatedInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserAccount</h2>
      </header>
      <div className="rw-segment-main">
        <UserAccountForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserAccount
