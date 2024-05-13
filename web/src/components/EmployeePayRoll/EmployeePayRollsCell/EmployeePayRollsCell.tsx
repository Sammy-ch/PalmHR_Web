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

import EmployeePayRolls from 'src/components/EmployeePayRoll/EmployeePayRolls'

export const QUERY: TypedDocumentNode<
  FindEmployeePayRolls,
  FindEmployeePayRollsVariables
> = gql`
  query FindEmployeePayRolls {
    employeePayRolls {
      id
      pay_period_start
      pay_period_end
      hours_Worked
      base_salary
      overtime
      netpay
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
  return <EmployeePayRolls employeePayRolls={employeePayRolls} />
}
