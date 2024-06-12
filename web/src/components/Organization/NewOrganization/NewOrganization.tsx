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
  const { currentUser } = useAuth()

  const userId = currentUser?.sub as string

  const [createOrganization, { loading, error }] = useMutation(
    CREATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Organization created')
        navigate(routes.organizations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateOrganizationInput) => {
    const updatedInput: CreateOrganizationInput = {
      ...input,
      OrganizationId: userId,
    }
    createOrganization({ variables: { input: updatedInput } })
  }

  return (
    <div className=" min-h-screen ">
      <div className="flex h-10 w-full items-center bg-black p-10 text-2xl text-white">
        Create Organization
      </div>
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
