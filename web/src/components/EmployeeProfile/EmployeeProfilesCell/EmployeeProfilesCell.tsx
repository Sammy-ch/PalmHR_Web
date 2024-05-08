import type {
  FindEmployeeProfiles,
  FindEmployeeProfilesVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeProfileCard from '../../EmployeeProfileCard/EmployeeProfileCard'

export const QUERY: TypedDocumentNode<
  FindEmployeeProfiles,
  FindEmployeeProfilesVariables
> = gql`
  query FindEmployeeProfiles {
    employeeProfiles {
      profile_id
      first_name
      last_name
      profile_image
      position
      email
      allowed_leaves
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeeProfiles yet. '}
      <Link to={routes.newEmployeeProfile()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindEmployeeProfiles>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeProfiles,
}: CellSuccessProps<FindEmployeeProfiles, FindEmployeeProfilesVariables>) => {
  return <EmployeeProfileCard employeeProfiles={employeeProfiles} />
}
