import type {
  FindPayRollSettingById,
  FindPayRollSettingByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import PayRollSetting from 'src/components/PayRollSetting/PayRollSetting'

export const QUERY: TypedDocumentNode<
  FindPayRollSettingById,
  FindPayRollSettingByIdVariables
> = gql`
  query FindPayRollSettingById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PayRollSetting not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPayRollSettingByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  payRollSetting,
}: CellSuccessProps<
  FindPayRollSettingById,
  FindPayRollSettingByIdVariables
>) => {
  return <PayRollSetting payRollSetting={payRollSetting} />
}
