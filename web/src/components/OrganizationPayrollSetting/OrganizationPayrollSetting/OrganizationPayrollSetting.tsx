import type {
  DeleteOrganizationPayrollSettingMutation,
  DeleteOrganizationPayrollSettingMutationVariables,
  FindOrganizationPayrollSettingById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ORGANIZATION_PAYROLL_SETTING_MUTATION: TypedDocumentNode<
  DeleteOrganizationPayrollSettingMutation,
  DeleteOrganizationPayrollSettingMutationVariables
> = gql`
  mutation DeleteOrganizationPayrollSettingMutation($id: String!) {
    deleteOrganizationPayrollSetting(id: $id) {
      id
    }
  }
`

interface Props {
  organizationPayrollSetting: NonNullable<
    FindOrganizationPayrollSettingById['organizationPayrollSetting']
  >
}

const OrganizationPayrollSetting = ({ organizationPayrollSetting }: Props) => {
  const [deleteOrganizationPayrollSetting] = useMutation(
    DELETE_ORGANIZATION_PAYROLL_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('OrganizationPayrollSetting deleted')
        navigate(routes.organizationPayrollSettings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteOrganizationPayrollSettingMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete organizationPayrollSetting ' + id + '?'
      )
    ) {
      deleteOrganizationPayrollSetting({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            OrganizationPayrollSetting {organizationPayrollSetting.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{organizationPayrollSetting.id}</td>
            </tr>
            <tr>
              <th>Org id</th>
              <td>{organizationPayrollSetting.org_id}</td>
            </tr>
            <tr>
              <th>Housing</th>
              <td>{organizationPayrollSetting.housing}</td>
            </tr>
            <tr>
              <th>Transportation</th>
              <td>{organizationPayrollSetting.transportation}</td>
            </tr>
            <tr>
              <th>Inss</th>
              <td>{organizationPayrollSetting.INSS}</td>
            </tr>
            <tr>
              <th>Inss patronal</th>
              <td>{organizationPayrollSetting.INSS_patronal}</td>
            </tr>
            <tr>
              <th>Inss risque</th>
              <td>{organizationPayrollSetting.INSS_risque}</td>
            </tr>
            <tr>
              <th>Medical insurance</th>
              <td>{organizationPayrollSetting.medical_insurance}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrganizationPayrollSetting({
            id: organizationPayrollSetting.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(organizationPayrollSetting.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default OrganizationPayrollSetting
