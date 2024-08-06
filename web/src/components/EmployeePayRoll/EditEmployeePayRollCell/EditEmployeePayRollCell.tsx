import type {
  EditEmployeePayRollById,
  UpdateEmployeePayRollInput,
  UpdateEmployeePayRollMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeePayRollForm from 'src/components/EmployeePayRoll/EmployeePayRollForm'

export const QUERY: TypedDocumentNode<EditEmployeePayRollById> = gql`
  query EditEmployeePayRollById($id: String!) {
    employeePayRoll: employeePayRoll(id: $id) {
      id
      pay_period_start
      pay_period_end
      base_salary
      net_salary
      gross_salary
      bonuses
      labor_cost
      IPR
    }
  }
`

// const UPDATE_EMPLOYEE_PAY_ROLL_MUTATION: TypedDocumentNode<
//   EditEmployeePayRollById,
//   UpdateEmployeePayRollMutationVariables
// > = gql`
//   mutation UpdateEmployeePayRollMutation(
//     $id: String!
//     $input: UpdateEmployeePayRollInput!
//   ) {
//     updateEmployeePayRoll(id: $id, input: $input) {
//       id
//       pay_period_start
//       pay_period_end
//       base_salary
//       net_salary
//       gross_salary
//       bonuses
//       labor_cost
//       IPR
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeePayRoll,
}: CellSuccessProps<EditEmployeePayRollById>) => {
  const [updateEmployeePayRoll, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_PAY_ROLL_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeePayRoll updated')
        navigate(routes.employeePayRolls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmployeePayRollInput,
    id: EditEmployeePayRollById['employeePayRoll']['id']
  ) => {
    updateEmployeePayRoll({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EmployeePayRoll {employeePayRoll?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeePayRollForm
          employeePayRoll={employeePayRoll}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
