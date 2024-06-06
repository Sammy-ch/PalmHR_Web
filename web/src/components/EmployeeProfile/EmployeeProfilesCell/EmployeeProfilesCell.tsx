import type {
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeProfileCard from 'src/components/EmployeeProfileCard/EmployeeProfileCard'

export const QUERY: TypedDocumentNode<
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables
> = gql`
  query GetEmployeeProfilesByOrg($org_id: String!) {
    employeeProfiles: employeeProfilesByOrg(org_id: $org_id) {
      profile_id
      first_name
      last_name
      position
      email
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

export const Failure = ({
  error,
}: CellFailureProps<GetEmployeeProfilesByOrg>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeProfiles,
}: CellSuccessProps<
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables
>) => {
  return <EmployeeProfileCard employeeProfiles={employeeProfiles} />
}
