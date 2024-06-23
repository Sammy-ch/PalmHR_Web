import { useState, useEffect } from 'react'

import type {
  CreateOrganizationMutation,
  CreateOrganizationInput,
  CreateOrganizationMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import CreateOrganizationForm from '../../CreateOrganizationForm/CreateOrganizationForm'

const CREATE_ORGANIZATION_MUTATION: TypedDocumentNode<
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables
> = gql`
  mutation CreateOrganizationMutation($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      OrganizationId
    }
  }
`

const NewOrganization = () => {
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

  const [createOrganization, { loading, error }] = useMutation(
    CREATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Organization created')
        navigate(routes.dashboard({ id: userSession }))
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateOrganizationInput) => {
    const updatedInput: CreateOrganizationInput = {
      ...input,
      OrganizationId: userSession,
      isVerified: false,
    }
    createOrganization({ variables: { input: updatedInput } })
  }

  return (
    <div className="min-h-screen">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Organization</h2>
      </header>
      <div className="flex min-h-screen items-center justify-center">
        <CreateOrganizationForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewOrganization
