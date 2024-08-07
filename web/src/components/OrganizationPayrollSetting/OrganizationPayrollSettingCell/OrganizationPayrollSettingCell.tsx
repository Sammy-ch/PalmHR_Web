import type {
  FindOrganizationPayrollSettingById,
  FindOrganizationPayrollSettingByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import OrganizationPayrollSetting from 'src/components/OrganizationPayrollSetting/OrganizationPayrollSetting'

export const QUERY: TypedDocumentNode<
  FindOrganizationPayrollSettingById,
  FindOrganizationPayrollSettingByIdVariables
> = gql`
  query FindOrganizationPayrollSettingById($id: String!) {
    organizationPayrollSetting: organizationPayrollSetting(org_id: $id) {
      id
      org_id
      housing
      transportation
      INSS
      INSS_patronal
      INSS_risque
      medical_insurance
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>OrganizationPayrollSetting not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindOrganizationPayrollSettingByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  organizationPayrollSetting,
}: CellSuccessProps<
  FindOrganizationPayrollSettingById,
  FindOrganizationPayrollSettingByIdVariables
>) => {
  return (
    <OrganizationPayrollSetting
      organizationPayrollSetting={organizationPayrollSetting}
    />
  )
}
