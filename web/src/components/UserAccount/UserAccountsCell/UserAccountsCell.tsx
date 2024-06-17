import type { FindUserAccounts, FindUserAccountsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UserAccounts from 'src/components/UserAccount/UserAccounts'

export const QUERY: TypedDocumentNode<
  FindUserAccounts,
  FindUserAccountsVariables
> = gql`
  query FindUserAccounts {
    userAccounts {
      id
      first_name
      last_name
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userAccounts yet. '}
      <Link to={routes.newUserAccount()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindUserAccounts>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userAccounts,
}: CellSuccessProps<FindUserAccounts, FindUserAccountsVariables>) => {
  return <UserAccounts userAccounts={userAccounts} />
}
