import type {
  DeleteEmployeeProfileMutation,
  DeleteEmployeeProfileMutationVariables,
  FindEmployeeProfileByProfileId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_EMPLOYEE_PROFILE_MUTATION: TypedDocumentNode<
  DeleteEmployeeProfileMutation,
  DeleteEmployeeProfileMutationVariables
> = gql`
  mutation DeleteEmployeeProfileMutation($profile_id: String!) {
    deleteEmployeeProfile(profile_id: $profile_id) {
      profile_id
    }
  }
`

interface Props {
  employeeProfile: NonNullable<
    FindEmployeeProfileByProfileId['employeeProfile']
  >
}

const EmployeeProfile = ({ employeeProfile }: Props) => {
  const [deleteEmployeeProfile] = useMutation(
    DELETE_EMPLOYEE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeProfile deleted')
        navigate(routes.employeeProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    profile_id: DeleteEmployeeProfileMutationVariables['profile_id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete employeeProfile ' + profile_id + '?'
      )
    ) {
      deleteEmployeeProfile({ variables: { profile_id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EmployeeProfile {employeeProfile.profile_id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Profile id</th>
              <td>{employeeProfile.profile_id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{employeeProfile.first_name}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{employeeProfile.last_name}</td>
            </tr>
            <tr>
              <th>Profile image</th>
              <td>{employeeProfile.profile_image}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{employeeProfile.position}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{employeeProfile.email}</td>
            </tr>
            <tr>
              <th>Allowed leaves</th>
              <td>{employeeProfile.allowed_leaves}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployeeProfile({
            profile_id: employeeProfile.profile_id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employeeProfile.profile_id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EmployeeProfile
