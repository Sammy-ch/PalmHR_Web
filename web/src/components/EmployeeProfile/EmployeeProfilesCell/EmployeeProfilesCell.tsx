import type {
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables,
} from 'types/graphql'

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
      profile_image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="">{'No Employee Profiles yet. '}</div>
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
