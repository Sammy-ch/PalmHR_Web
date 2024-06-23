import { useState, useEffect } from 'react'

import type {
  CreateEmployeeProfileMutation,
  CreateEmployeeProfileInput,
  CreateEmployeeProfileMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import EmployeeProfileForm from 'src/components/EmployeeProfile/EmployeeProfileForm'
const CREATE_EMPLOYEE_PROFILE_MUTATION: TypedDocumentNode<
  CreateEmployeeProfileMutation,
  CreateEmployeeProfileMutationVariables
> = gql`
  mutation CreateEmployeeProfileMutation($input: CreateEmployeeProfileInput!) {
    createEmployeeProfile(input: $input) {
      profile_id
    }
  }
`

const NewEmployeeProfile = () => {
  const [userSession, setUserSession] = useState('')

  const { client } = useAuth()

  useEffect(() => {
    async function getUserSession() {
      const { data } = await client.auth.getSession()

      if (data) {
        setUserSession(data.session.user.id)
      }
    }

    getUserSession()
  }, [client])

  const [createEmployeeProfile, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeProfile created')
        navigate(routes.employeeProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEmployeeProfileInput) => {
    const updatedInput: CreateEmployeeProfileInput = {
      ...input,
      org_id: userSession,
    }
    createEmployeeProfile({ variables: { input: updatedInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EmployeeProfile</h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeProfileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmployeeProfile
