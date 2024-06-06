import type {
  DeletePayRollSettingMutation,
  DeletePayRollSettingMutationVariables,
  FindPayRollSettings,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PayRollSetting/PayRollSettingsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PAY_ROLL_SETTING_MUTATION: TypedDocumentNode<
  DeletePayRollSettingMutation,
  DeletePayRollSettingMutationVariables
> = gql`
  mutation DeletePayRollSettingMutation($id: String!) {
    deletePayRollSetting(id: $id) {
      id
    }
  }
`

const PayRollSettingsList = ({ payRollSettings }: FindPayRollSettings) => {
  const [deletePayRollSetting] = useMutation(DELETE_PAY_ROLL_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('PayRollSetting deleted')
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

  const onDeleteClick = (id: DeletePayRollSettingMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete payRollSetting ' + id + '?')) {
      deletePayRollSetting({ variables: { id } })
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
            <th>Transport</th>
            <th>Inss</th>
            <th>Inss contribution</th>
            <th>Inss payroll risks</th>
            <th>Medical insurance</th>
            <th>Ipr</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {payRollSettings.map((payRollSetting) => (
            <tr key={payRollSetting.id}>
              <td>{truncate(payRollSetting.id)}</td>
              <td>{truncate(payRollSetting.org_id)}</td>
              <td>{truncate(payRollSetting.housing)}</td>
              <td>{truncate(payRollSetting.transport)}</td>
              <td>{truncate(payRollSetting.INSS)}</td>
              <td>{truncate(payRollSetting.INSS_contribution)}</td>
              <td>{truncate(payRollSetting.INSS_payroll_risks)}</td>
              <td>{truncate(payRollSetting.medical_insurance)}</td>
              <td>{truncate(payRollSetting.IPR)}</td>
              <td>{truncate(payRollSetting.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.payRollSetting({ id: payRollSetting.id })}
                    title={
                      'Show payRollSetting ' + payRollSetting.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPayRollSetting({ id: payRollSetting.id })}
                    title={'Edit payRollSetting ' + payRollSetting.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete payRollSetting ' + payRollSetting.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(payRollSetting.id)}
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

export default PayRollSettingsList
