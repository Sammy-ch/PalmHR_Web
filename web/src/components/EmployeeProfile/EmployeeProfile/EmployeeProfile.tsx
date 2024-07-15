import type {
  DeleteEmployeeProfileMutation,
  DeleteEmployeeProfileMutationVariables,
  FindEmployeeProfileByProfileId,
} from 'types/graphql'

import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'
import EmployeeStatCard from '../../EmployeeStatCard/EmployeeStatCard'

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
    <main>
      <EmployeeStatCard employeeProfile={employeeProfile} />
    </main>
  )
}

export default EmployeeProfile
