import type {
  FindPayRollSettings,
  FindPayRollSettingsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import PayRollSettings from 'src/components/PayRollSetting/PayRollSettings'

export const QUERY: TypedDocumentNode<
  FindPayRollSettings,
  FindPayRollSettingsVariables
> = gql`
  query FindPayRollSettings {
    payRollSettings {
      id
      org_id
      housing
      transport
      INSS
      INSS_contribution
      INSS_payroll_risks
      medical_insurance
      IPR
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No payRollSettings yet. '}
      <Link to={routes.newPayRollSetting()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindPayRollSettings>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  payRollSettings,
}: CellSuccessProps<FindPayRollSettings, FindPayRollSettingsVariables>) => {
  return <PayRollSettings payRollSettings={payRollSettings} />
}
