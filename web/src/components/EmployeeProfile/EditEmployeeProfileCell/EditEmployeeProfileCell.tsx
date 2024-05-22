import type {
  EditEmployeeProfileByProfileId,
  UpdateEmployeeProfileInput,
  UpdateEmployeeProfileMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeProfileForm from 'src/components/EmployeeProfile/EmployeeProfileForm'

export const QUERY: TypedDocumentNode<EditEmployeeProfileByProfileId> = gql`
  query EditEmployeeProfileByProfileId($profile_id: String!) {
    employeeProfile: employeeProfile(profile_id: $profile_id) {
      profile_id
      org_id
      first_name
      last_name
      profile_image
      position
      email
      allowed_leaves
    }
  }
`

const UPDATE_EMPLOYEE_PROFILE_MUTATION: TypedDocumentNode<
  EditEmployeeProfileById,
  UpdateEmployeeProfileMutationVariables
> = gql`
  mutation UpdateEmployeeProfileMutation(
    $profile_id: String!
    $input: UpdateEmployeeProfileInput!
  ) {
    updateEmployeeProfile(profile_id: $profile_id, input: $input) {
      profile_id
      org_id
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeProfile,
}: CellSuccessProps<EditEmployeeProfileByProfileId>) => {
  const [updateEmployeeProfile, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeProfile updated')
        navigate(routes.employeeProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmployeeProfileInput,
    id: EditEmployeeProfileByProfileId['employeeProfile']['id']
  ) => {
    updateEmployeeProfile({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EmployeeProfile {employeeProfile?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeProfileForm
          employeeProfile={employeeProfile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
