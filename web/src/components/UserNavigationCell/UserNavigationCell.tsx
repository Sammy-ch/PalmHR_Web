import type {
  FindUserNavigationQuery,
  FindUserNavigationQueryVariables,
} from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { useAuth } from 'src/auth'

import { Button } from '../ui/button'
export const QUERY: TypedDocumentNode<
  FindUserNavigationQuery,
  FindUserNavigationQueryVariables
> = gql`
  query FindUserNavigationQuery($id: String!) {
    userNavigation: user(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserNavigationQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userNavigation,
}: CellSuccessProps<
  FindUserNavigationQuery,
  FindUserNavigationQueryVariables
>) => {
  const { logOut } = useAuth()
  return (
    <div className="flex">
      <>
        {userNavigation.id ? (
          <main className='flex'>
            <Link to={routes.organizations()}>
              <Button className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white">
                Organizations
              </Button>
            </Link>
            <Button
              onClick={logOut}
              variant="link"
              className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg  "
            >
              Sign Out
            </Button>
          </main>
        ) : (
          <Link to={routes.newUser()}>Create Profile</Link>
        )}
      </>
    </div>
  )
}
