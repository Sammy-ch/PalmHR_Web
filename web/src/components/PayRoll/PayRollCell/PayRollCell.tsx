import type { FindPayRollById, FindPayRollByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import PayRoll from 'src/components/PayRoll/PayRoll'

export const QUERY: TypedDocumentNode<
  FindPayRollById,
  FindPayRollByIdVariables
> = gql`
  query FindPayRollById($id: String!) {
    payRoll: payRoll(id: $id) {
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

export const Empty = () => <div>PayRoll not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPayRollByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  payRoll,
}: CellSuccessProps<FindPayRollById, FindPayRollByIdVariables>) => {
  return <PayRoll payRoll={payRoll} />
}
