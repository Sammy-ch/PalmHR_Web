import type {
  FindEmployeePayRolls,
  FindEmployeePayRollsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'


import Payrolls from '../../Payrolls/Payrolls'

export const QUERY: TypedDocumentNode<
  FindEmployeePayRolls,
  FindEmployeePayRollsVariables
> = gql`
  query FindEmployeePayRolls {
    employeePayRolls {
      id
      pay_period_start
      pay_period_end
      attendance_report
      base_salary
      overtime
      net_salary
      bonuses
      gross_amount
      labor_cost
      employee {
        profile_id
        first_name
        last_name
      }
      report {
        id
        TotalWorkhours
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeePayRolls yet. '}
      <Link to={routes.newEmployeePayRoll()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindEmployeePayRolls>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeePayRolls,
}: CellSuccessProps<FindEmployeePayRolls, FindEmployeePayRollsVariables>) => {
  return <Payrolls employeePayRolls={employeePayRolls} />
}
