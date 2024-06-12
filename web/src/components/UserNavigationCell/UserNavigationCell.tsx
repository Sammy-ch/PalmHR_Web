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
    userAccount: userAccount(id: $id) {
      id
    }
    userOrganization: organization(OrganizationId: $id) {
      OrganizationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const { logOut } = useAuth()
  return (
    <main className="flex">
      <Link to={routes.newUserAccount()}>
        <Button className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white">
          Create Account
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
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindUserNavigationQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userAccount,
  userOrganization,
}: CellSuccessProps<
  FindUserNavigationQuery,
  FindUserNavigationQueryVariables
>) => {
  const { logOut } = useAuth()

  if (!userOrganization || !userOrganization.OrganizationId) {
    return (
      <main className="flex">
        <Link to={routes.newOrganization()}>
          <Button className="navbar hover:border-green flex h-[40px] items-center justify-center rounded-lg bg-[#00A551] text-white">
            Create Organization
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
    ) // Return null to prevent rendering the rest of the component
  }

  return (
    <div className="flex">
      <>
        {userAccount.id && userOrganization.OrganizationId ? (
          <main className="flex">
            <Link
              to={routes.organization({
                OrganizationId: userOrganization.OrganizationId,
              })}
            >
              <Button className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white">
                Organization
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
          <Link to={routes.newUserAccount()}>Create Profile</Link>
        )}
      </>
    </div>
  )
}
