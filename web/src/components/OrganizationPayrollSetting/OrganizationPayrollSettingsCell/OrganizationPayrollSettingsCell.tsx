import type {
  FindOrganizationPayrollSettings,
  FindOrganizationPayrollSettingsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import OrganizationPayrollSettings from 'src/components/OrganizationPayrollSetting/OrganizationPayrollSettings'

export const QUERY: TypedDocumentNode<
  FindOrganizationPayrollSettings,
  FindOrganizationPayrollSettingsVariables
> = gql`
  query FindOrganizationPayrollSettings {
    organizationPayrollSettings {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No organizationPayrollSettings yet. '}
      <Link to={routes.newOrganizationPayrollSetting()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindOrganizationPayrollSettings>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  organizationPayrollSettings,
}: CellSuccessProps<
  FindOrganizationPayrollSettings,
  FindOrganizationPayrollSettingsVariables
>) => {
  return (
    <OrganizationPayrollSettings
      organizationPayrollSettings={organizationPayrollSettings}
    />
  )
}
