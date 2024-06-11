import type {
  EditUserAccountById,
  UpdateUserAccountInput,
  UpdateUserAccountMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserAccountForm from 'src/components/UserAccount/UserAccountForm'

export const QUERY: TypedDocumentNode<EditUserAccountById> = gql`
  query EditUserAccountById($id: String!) {
    userAccount: userAccount(id: $id) {
      id
      first_name
      last_name
      email
    }
  }
`

const UPDATE_USER_ACCOUNT_MUTATION: TypedDocumentNode<
  EditUserAccountById,
  UpdateUserAccountMutationVariables
> = gql`
  mutation UpdateUserAccountMutation(
    $id: String!
    $input: UpdateUserAccountInput!
  ) {
    updateUserAccount(id: $id, input: $input) {
      id
      first_name
      last_name
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userAccount,
}: CellSuccessProps<EditUserAccountById>) => {
  const [updateUserAccount, { loading, error }] = useMutation(
    UPDATE_USER_ACCOUNT_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserAccount updated')
        navigate(routes.userAccounts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserAccountInput,
    id: EditUserAccountById['userAccount']['id']
  ) => {
    updateUserAccount({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserAccount {userAccount?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserAccountForm
          userAccount={userAccount}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
