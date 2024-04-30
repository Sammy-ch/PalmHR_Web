import type {
  DeleteEmployeeProfileMutation,
  DeleteEmployeeProfileMutationVariables,
  FindEmployeeProfiles,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeProfile/EmployeeProfilesCell'
import { truncate } from 'src/lib/formatters'

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

const EmployeeProfilesList = ({ employeeProfiles }: FindEmployeeProfiles) => {
  const [deleteEmployeeProfile] = useMutation(
    DELETE_EMPLOYEE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeProfile deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Profile id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Profile image</th>
            <th>Position</th>
            <th>Email</th>
            <th>Allowed leaves</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employeeProfiles.map((employeeProfile) => (
            <tr key={employeeProfile.profile_id}>
              <td>{truncate(employeeProfile.profile_id)}</td>
              <td>{truncate(employeeProfile.first_name)}</td>
              <td>{truncate(employeeProfile.last_name)}</td>
              <td>{truncate(employeeProfile.profile_image)}</td>
              <td>{truncate(employeeProfile.position)}</td>
              <td>{truncate(employeeProfile.email)}</td>
              <td>{truncate(employeeProfile.allowed_leaves)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employeeProfile({
                      profile_id: employeeProfile.profile_id,
                    })}
                    title={
                      'Show employeeProfile ' +
                      employeeProfile.profile_id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployeeProfile({
                      profile_id: employeeProfile.profile_id,
                    })}
                    title={'Edit employeeProfile ' + employeeProfile.profile_id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete employeeProfile ' + employeeProfile.profile_id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(employeeProfile.profile_id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeProfilesList
