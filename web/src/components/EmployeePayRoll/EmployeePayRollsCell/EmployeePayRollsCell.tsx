import type {
  FindEmployeePayRolls,
  FindEmployeePayRollsVariables,
} from 'types/graphql'

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
      base_salary
      net_salary
      gross_salary
      bonuses
      labor_cost
      IPR
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No employeePayRolls yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps<FindEmployeePayRolls>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeePayRolls,
}: CellSuccessProps<FindEmployeePayRolls, FindEmployeePayRollsVariables>) => {
  return <EmployeePayRolls employeePayRolls={employeePayRolls} />
}
