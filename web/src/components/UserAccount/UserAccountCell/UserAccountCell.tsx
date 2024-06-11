import type {
  FindUserAccountById,
  FindUserAccountByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UserAccount from 'src/components/UserAccount/UserAccount'

export const QUERY: TypedDocumentNode<
  FindUserAccountById,
  FindUserAccountByIdVariables
> = gql`
  query FindUserAccountById($id: String!) {
    userAccount: userAccount(id: $id) {
      id
      first_name
      last_name
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserAccount not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserAccountByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userAccount,
}: CellSuccessProps<FindUserAccountById, FindUserAccountByIdVariables>) => {
  return <UserAccount userAccount={userAccount} />
}
