import type {
  DeletePayRollSettingMutation,
  DeletePayRollSettingMutationVariables,
  FindPayRollSettingById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

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

interface Props {
  payRollSetting: NonNullable<FindPayRollSettingById['payRollSetting']>
}

const PayRollSetting = ({ payRollSetting }: Props) => {
  const [deletePayRollSetting] = useMutation(DELETE_PAY_ROLL_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('PayRollSetting deleted')
      navigate(routes.payRollSettings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePayRollSettingMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete payRollSetting ' + id + '?')) {
      deletePayRollSetting({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PayRollSetting {payRollSetting.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{payRollSetting.id}</td>
            </tr>
            <tr>
              <th>Org id</th>
              <td>{payRollSetting.org_id}</td>
            </tr>
            <tr>
              <th>Housing</th>
              <td>{payRollSetting.housing}</td>
            </tr>
            <tr>
              <th>Transport</th>
              <td>{payRollSetting.transport}</td>
            </tr>
            <tr>
              <th>Inss</th>
              <td>{payRollSetting.INSS}</td>
            </tr>
            <tr>
              <th>Inss contribution</th>
              <td>{payRollSetting.INSS_contribution}</td>
            </tr>
            <tr>
              <th>Inss payroll risks</th>
              <td>{payRollSetting.INSS_payroll_risks}</td>
            </tr>
            <tr>
              <th>Medical insurance</th>
              <td>{payRollSetting.medical_insurance}</td>
            </tr>
            <tr>
              <th>Ipr</th>
              <td>{payRollSetting.IPR}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{payRollSetting.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPayRollSetting({ id: payRollSetting.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(payRollSetting.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PayRollSetting
