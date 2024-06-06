import type {
  FindOrganizationsByTag,
  FindOrganizationsByTagVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Organizations from 'src/components/Organization/Organizations'

export const QUERY: TypedDocumentNode<
  FindOrganizationsByTag,
  FindOrganizationsByTagVariables
> = gql`
  query FindOrganizationsByTag($tag: String!) {
    organisations: organizationsByTag(Organisation_tag: $tag) {
      OrganizationId
      OrganizationName
      Organisation_tag
      Address
      Email
      Phone
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No organizations yet. '}
      <Link to={routes.newOrganization()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindOrganizationsByTag>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  organisations,
}: CellSuccessProps<
  FindOrganizationsByTag,
  FindOrganizationsByTagVariables
>) => {
  return <Organizations organizations={organisations} />
}
