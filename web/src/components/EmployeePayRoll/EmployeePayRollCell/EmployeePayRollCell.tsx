import type {
  FindEmployeePayRollById,
  FindEmployeePayRollByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeePayRoll from 'src/components/EmployeePayRoll/EmployeePayRoll'

export const QUERY: TypedDocumentNode<
  FindEmployeePayRollById,
  FindEmployeePayRollByIdVariables
> = gql`
  query FindEmployeePayRollById($id: String!) {
    employeePayRoll: employeePayRoll(id: $id) {
      id
      pay_period_start
      pay_period_end
      base_salary
      overtime
      net_salary
      bonuses
      gross_amount
      labor_cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>EmployeePayRoll not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeePayRollByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeePayRoll,
}: CellSuccessProps<
  FindEmployeePayRollById,
  FindEmployeePayRollByIdVariables
>) => {
  return <EmployeePayRoll employeePayRoll={employeePayRoll} />
}
