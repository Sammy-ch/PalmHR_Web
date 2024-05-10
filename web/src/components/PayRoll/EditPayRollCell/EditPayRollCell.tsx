import type {
  EditPayRollById,
  UpdatePayRollInput,
  UpdatePayRollMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PayRollForm from 'src/components/PayRoll/PayRollForm'

export const QUERY: TypedDocumentNode<EditPayRollById> = gql`
  query EditPayRollById($id: String!) {
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

const UPDATE_PAY_ROLL_MUTATION: TypedDocumentNode<
  EditPayRollById,
  UpdatePayRollMutationVariables
> = gql`
  mutation UpdatePayRollMutation($id: String!, $input: UpdatePayRollInput!) {
    updatePayRoll(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ payRoll }: CellSuccessProps<EditPayRollById>) => {
  const [updatePayRoll, { loading, error }] = useMutation(
    UPDATE_PAY_ROLL_MUTATION,
    {
      onCompleted: () => {
        toast.success('PayRoll updated')
        navigate(routes.payRolls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePayRollInput,
    id: EditPayRollById['payRoll']['id']
  ) => {
    updatePayRoll({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PayRoll {payRoll?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PayRollForm
          payRoll={payRoll}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
