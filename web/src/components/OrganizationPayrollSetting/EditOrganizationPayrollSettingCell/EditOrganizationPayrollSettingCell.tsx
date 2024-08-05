import type {
  EditOrganizationPayrollSettingById,
  UpdateOrganizationPayrollSettingInput,
  UpdateOrganizationPayrollSettingMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OrganizationPayrollSettingForm from 'src/components/OrganizationPayrollSetting/OrganizationPayrollSettingForm'

export const QUERY: TypedDocumentNode<EditOrganizationPayrollSettingById> = gql`
  query EditOrganizationPayrollSettingById($id: String!) {
    organizationPayrollSetting: organizationPayrollSetting(id: $id) {
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

const UPDATE_ORGANIZATION_PAYROLL_SETTING_MUTATION: TypedDocumentNode<
  EditOrganizationPayrollSettingById,
  UpdateOrganizationPayrollSettingMutationVariables
> = gql`
  mutation UpdateOrganizationPayrollSettingMutation(
    $id: String!
    $input: UpdateOrganizationPayrollSettingInput!
  ) {
    updateOrganizationPayrollSetting(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  organizationPayrollSetting,
}: CellSuccessProps<EditOrganizationPayrollSettingById>) => {
  const [updateOrganizationPayrollSetting, { loading, error }] = useMutation(
    UPDATE_ORGANIZATION_PAYROLL_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('OrganizationPayrollSetting updated')
        navigate(routes.organizationPayrollSettings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateOrganizationPayrollSettingInput,
    id: EditOrganizationPayrollSettingById['organizationPayrollSetting']['id']
  ) => {
    updateOrganizationPayrollSetting({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit OrganizationPayrollSetting {organizationPayrollSetting?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrganizationPayrollSettingForm
          organizationPayrollSetting={organizationPayrollSetting}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
