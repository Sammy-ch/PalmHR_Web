import type {
  DeleteOrganizationPayrollSettingMutation,
  DeleteOrganizationPayrollSettingMutationVariables,
  FindOrganizationPayrollSettings,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/OrganizationPayrollSetting/OrganizationPayrollSettingsCell'
import { truncate } from 'src/lib/formatters'

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

const OrganizationPayrollSettingsList = ({
  organizationPayrollSettings,
}: FindOrganizationPayrollSettings) => {
  const [deleteOrganizationPayrollSetting] = useMutation(
    DELETE_ORGANIZATION_PAYROLL_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('OrganizationPayrollSetting deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Org id</th>
            <th>Housing</th>
            <th>Transportation</th>
            <th>Inss</th>
            <th>Inss patronal</th>
            <th>Inss risque</th>
            <th>Medical insurance</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {organizationPayrollSettings.map((organizationPayrollSetting) => (
            <tr key={organizationPayrollSetting.id}>
              <td>{truncate(organizationPayrollSetting.id)}</td>
              <td>{truncate(organizationPayrollSetting.org_id)}</td>
              <td>{truncate(organizationPayrollSetting.housing)}</td>
              <td>{truncate(organizationPayrollSetting.transportation)}</td>
              <td>{truncate(organizationPayrollSetting.INSS)}</td>
              <td>{truncate(organizationPayrollSetting.INSS_patronal)}</td>
              <td>{truncate(organizationPayrollSetting.INSS_risque)}</td>
              <td>{truncate(organizationPayrollSetting.medical_insurance)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.organizationPayrollSetting({
                      id: organizationPayrollSetting.id,
                    })}
                    title={
                      'Show organizationPayrollSetting ' +
                      organizationPayrollSetting.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOrganizationPayrollSetting({
                      id: organizationPayrollSetting.id,
                    })}
                    title={
                      'Edit organizationPayrollSetting ' +
                      organizationPayrollSetting.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete organizationPayrollSetting ' +
                      organizationPayrollSetting.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(organizationPayrollSetting.id)}
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

export default OrganizationPayrollSettingsList
