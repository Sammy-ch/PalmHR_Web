import type {
  CreateOrganizationPayrollSettingMutation,
  CreateOrganizationPayrollSettingInput,
  CreateOrganizationPayrollSettingMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OrganizationPayrollSettingForm from 'src/components/OrganizationPayrollSetting/OrganizationPayrollSettingForm'

const CREATE_ORGANIZATION_PAYROLL_SETTING_MUTATION: TypedDocumentNode<
  CreateOrganizationPayrollSettingMutation,
  CreateOrganizationPayrollSettingMutationVariables
> = gql`
  mutation CreateOrganizationPayrollSettingMutation(
    $input: CreateOrganizationPayrollSettingInput!
  ) {
    createOrganizationPayrollSetting(input: $input) {
      id
    }
  }
`

const NewOrganizationPayrollSetting = () => {
  const [createOrganizationPayrollSetting, { loading, error }] = useMutation(
    CREATE_ORGANIZATION_PAYROLL_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('OrganizationPayrollSetting created')
        navigate(routes.organizationPayrollSettings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateOrganizationPayrollSettingInput) => {
    createOrganizationPayrollSetting({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New OrganizationPayrollSetting
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrganizationPayrollSettingForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewOrganizationPayrollSetting
