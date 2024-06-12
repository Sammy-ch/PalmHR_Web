import type {
  FindOrganizationByOrganizationId,
  FindOrganizationByOrganizationIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Organization from 'src/components/Organization/Organization'

export const QUERY: TypedDocumentNode<
  FindOrganizationByOrganizationId,
  FindOrganizationByOrganizationIdVariables
> = gql`
  query FindOrganizationByOrganizationId($OrganizationId: String!) {
    organization: organization(OrganizationId: $OrganizationId) {
      OrganizationId
      OrganizationName
      Address
      Email
      Phone
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Organization not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindOrganizationByOrganizationIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  organization,
}: CellSuccessProps<
  FindOrganizationByOrganizationId,
  FindOrganizationByOrganizationIdVariables
>) => {
  return <Organization organization={organization} />
}
