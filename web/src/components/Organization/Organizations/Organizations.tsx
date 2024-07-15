import type {
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables,
  FindOrganizations,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Organization/OrganizationsCell'
import { checkboxInputTag, formatEnum, truncate } from 'src/lib/formatters'

const DELETE_ORGANIZATION_MUTATION: TypedDocumentNode<
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables
> = gql`
  mutation DeleteOrganizationMutation($OrganizationId: String!) {
    deleteOrganization(OrganizationId: $OrganizationId) {
      OrganizationId
    }
  }
`

const OrganizationsList = ({ organizations }: FindOrganizations) => {
  const [deleteOrganization] = useMutation(DELETE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('Organization deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (
    OrganizationId: DeleteOrganizationMutationVariables['OrganizationId']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete organization ' + OrganizationId + '?'
      )
    ) {
      deleteOrganization({ variables: { OrganizationId } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Organization id</th>
            <th>Organization name</th>
            <th>Organization type</th>
            <th>Address street</th>
            <th>Address city</th>
            <th>Address state</th>
            <th>Address country</th>
            <th>Email</th>
            <th>Website url</th>
            <th>Phone</th>
            <th>Is verified</th>
            <th>Organization size</th>
            <th>Industry</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((organization) => (
            <tr key={organization.OrganizationId}>
              <td>{truncate(organization.OrganizationId)}</td>
              <td>{truncate(organization.OrganizationName)}</td>
              <td>{formatEnum(organization.organizationType)}</td>
              <td>{truncate(organization.addressStreet)}</td>
              <td>{truncate(organization.addressCity)}</td>
              <td>{truncate(organization.addressState)}</td>
              <td>{truncate(organization.addressCountry)}</td>
              <td>{truncate(organization.Email)}</td>
              <td>{truncate(organization.websiteUrl)}</td>
              <td>{truncate(organization.Phone)}</td>
              <td>{checkboxInputTag(organization.isVerified)}</td>
              <td>{formatEnum(organization.organizationSize)}</td>
              <td>{formatEnum(organization.Industry)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.organization({
                      OrganizationId: organization.OrganizationId,
                    })}
                    title={
                      'Show organization ' +
                      organization.OrganizationId +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOrganization({
                      OrganizationId: organization.OrganizationId,
                    })}
                    title={'Edit organization ' + organization.OrganizationId}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete organization ' + organization.OrganizationId}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(organization.OrganizationId)}
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

export default OrganizationsList
