import type {
  FindEmployeeProfileByProfileId,
  FindEmployeeProfileByProfileIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeProfile from 'src/components/EmployeeProfile/EmployeeProfile'

export const QUERY: TypedDocumentNode<
  FindEmployeeProfileByProfileId,
  FindEmployeeProfileByProfileIdVariables
> = gql`
  query FindEmployeeProfileByProfileId($profile_id: String!) {
    employeeProfile: employeeProfile(profile_id: $profile_id) {
      profile_id
      first_name
      last_name
      profile_image
      position
      email
      allowed_leaves
      AttendanceReport {
        TotalWorkhours
        TotalOvertime
        TotalSickLeaves
        AbstenteeismRate
        EarlyAttendaceRate
        LateAttedanceRate
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>EmployeeProfile not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeProfileByProfileIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeProfile,
}: CellSuccessProps<
  FindEmployeeProfileByProfileId,
  FindEmployeeProfileByProfileIdVariables
>) => {
  return <EmployeeProfile employeeProfile={employeeProfile} />
}
