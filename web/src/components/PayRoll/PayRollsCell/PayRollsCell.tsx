import type { FindPayRolls, FindPayRollsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import PayRolls from 'src/components/PayRoll/PayRolls'

export const QUERY: TypedDocumentNode<
  FindPayRolls,
  FindPayRollsVariables
> = gql`
  query FindPayRolls {
    payRolls {
      id
      pay_period_start
      pay_period_end
      hours_Worked
      overtime
      base_salary
      netpay
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No payRolls yet. '}
      <Link to={routes.newPayRoll()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindPayRolls>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  payRolls,
}: CellSuccessProps<FindPayRolls, FindPayRollsVariables>) => {
  return <PayRolls payRolls={payRolls} />
}
