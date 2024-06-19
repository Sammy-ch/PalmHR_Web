import type {
  EditOrganizationByOrganizationId,
  UpdateOrganizationInput,
  UpdateOrganizationMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OrganizationForm from 'src/components/Organization/OrganizationForm'

export const QUERY: TypedDocumentNode<EditOrganizationByOrganizationId> = gql`
  query EditOrganizationByOrganizationId($OrganizationId: String!) {
    organization: organization(OrganizationId: $OrganizationId) {
      OrganizationId
      OrganizationName
      organizationType
      addressStreet
      addressCity
      addressState
      addressCountry
      Email
      websiteUrl
      Phone
      isVerified
      organizationSize
      Industry
    }
  }
`

const UPDATE_ORGANIZATION_MUTATION: TypedDocumentNode<
  EditOrganizationById,
  UpdateOrganizationMutationVariables
> = gql`
  mutation UpdateOrganizationMutation(
    $OrganizationId: String!
    $input: UpdateOrganizationInput!
  ) {
    updateOrganization(OrganizationId: $OrganizationId, input: $input) {
      OrganizationId
      OrganizationName
      organizationType
      addressStreet
      addressCity
      addressState
      addressCountry
      Email
      websiteUrl
      Phone
      isVerified
      organizationSize
      Industry
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  organization,
}: CellSuccessProps<EditOrganizationByOrganizationId>) => {
  const [updateOrganization, { loading, error }] = useMutation(
    UPDATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Organization updated')
        navigate(routes.organizations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateOrganizationInput,
    id: EditOrganizationByOrganizationId['organization']['id']
  ) => {
    updateOrganization({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Organization {organization?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrganizationForm
          organization={organization}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
