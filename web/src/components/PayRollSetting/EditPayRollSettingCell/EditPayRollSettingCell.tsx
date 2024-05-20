import type {
  EditPayRollSettingById,
  UpdatePayRollSettingInput,
  UpdatePayRollSettingMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PayRollSettingForm from 'src/components/PayRollSetting/PayRollSettingForm'

export const QUERY: TypedDocumentNode<EditPayRollSettingById> = gql`
  query EditPayRollSettingById($id: String!) {
    payRollSetting: payRollSetting(id: $id) {
      id
      user_id
      housing
      transport
      INSS
      INSS_contribution
      INSS_payroll_risks
      medical_insurance
      IPR
    }
  }
`

const UPDATE_PAY_ROLL_SETTING_MUTATION: TypedDocumentNode<
  EditPayRollSettingById,
  UpdatePayRollSettingMutationVariables
> = gql`
  mutation UpdatePayRollSettingMutation(
    $id: String!
    $input: UpdatePayRollSettingInput!
  ) {
    updatePayRollSetting(id: $id, input: $input) {
      id
      user_id
      housing
      transport
      INSS
      INSS_contribution
      INSS_payroll_risks
      medical_insurance
      IPR
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  payRollSetting,
}: CellSuccessProps<EditPayRollSettingById>) => {
  const [updatePayRollSetting, { loading, error }] = useMutation(
    UPDATE_PAY_ROLL_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('PayRollSetting updated')
        navigate(routes.payRollSettings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePayRollSettingInput,
    id: EditPayRollSettingById['payRollSetting']['id']
  ) => {
    updatePayRollSetting({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PayRollSetting {payRollSetting?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PayRollSettingForm
          payRollSetting={payRollSetting}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
