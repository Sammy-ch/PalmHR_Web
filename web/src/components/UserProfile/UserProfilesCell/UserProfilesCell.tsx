import type { FindUserProfiles, FindUserProfilesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UserProfiles from 'src/components/UserProfile/UserProfiles'

export const QUERY: TypedDocumentNode<
  FindUserProfiles,
  FindUserProfilesVariables
> = gql`
  query FindUserProfiles {
    userProfiles {
      user_id
      user_ref_id
      first_name
      last_name
      email
      password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userProfiles yet. '}
      <Link to={routes.newUserProfile()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindUserProfiles>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userProfiles,
}: CellSuccessProps<FindUserProfiles, FindUserProfilesVariables>) => {
  return <UserProfiles userProfiles={userProfiles} />
}
