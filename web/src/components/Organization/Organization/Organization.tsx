import type {
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables,
  FindOrganizationByOrganizationId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, formatEnum } from 'src/lib/formatters'

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

interface Props {
  organization: NonNullable<FindOrganizationByOrganizationId['organization']>
}

const Organization = ({ organization }: Props) => {
  const [deleteOrganization] = useMutation(DELETE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('Organization deleted')
      navigate(routes.organizations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Organization {organization.OrganizationId} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Organization id</th>
              <td>{organization.OrganizationId}</td>
            </tr>
            <tr>
              <th>Organization name</th>
              <td>{organization.OrganizationName}</td>
            </tr>
            <tr>
              <th>Organization type</th>
              <td>{formatEnum(organization.organizationType)}</td>
            </tr>
            <tr>
              <th>Address street</th>
              <td>{organization.addressStreet}</td>
            </tr>
            <tr>
              <th>Address city</th>
              <td>{organization.addressCity}</td>
            </tr>
            <tr>
              <th>Address state</th>
              <td>{organization.addressState}</td>
            </tr>
            <tr>
              <th>Address country</th>
              <td>{organization.addressCountry}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{organization.Email}</td>
            </tr>
            <tr>
              <th>Website url</th>
              <td>{organization.websiteUrl}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{organization.Phone}</td>
            </tr>
            <tr>
              <th>Is verified</th>
              <td>{checkboxInputTag(organization.isVerified)}</td>
            </tr>
            <tr>
              <th>Organization size</th>
              <td>{formatEnum(organization.organizationSize)}</td>
            </tr>
            <tr>
              <th>Industry</th>
              <td>{formatEnum(organization.Industry)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrganization({
            OrganizationId: organization.OrganizationId,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(organization.OrganizationId)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Organization
