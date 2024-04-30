import type {
  EditLeaveCustomById,
  UpdateLeaveCustomInput,
  UpdateLeaveCustomMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LeaveCustomForm from 'src/components/LeaveCustom/LeaveCustomForm'

export const QUERY: TypedDocumentNode<EditLeaveCustomById> = gql`
  query EditLeaveCustomById($id: String!) {
    leaveCustom: leaveCustom(id: $id) {
      id
      requested_leave_date
      leave_id
      leave_type
      leave_days
      leave_approval
    }
  }
`

const UPDATE_LEAVE_CUSTOM_MUTATION: TypedDocumentNode<
  EditLeaveCustomById,
  UpdateLeaveCustomMutationVariables
> = gql`
  mutation UpdateLeaveCustomMutation(
    $id: String!
    $input: UpdateLeaveCustomInput!
  ) {
    updateLeaveCustom(id: $id, input: $input) {
      id
      requested_leave_date
      leave_id
      leave_type
      leave_days
      leave_approval
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  leaveCustom,
}: CellSuccessProps<EditLeaveCustomById>) => {
  const [updateLeaveCustom, { loading, error }] = useMutation(
    UPDATE_LEAVE_CUSTOM_MUTATION,
    {
      onCompleted: () => {
        toast.success('LeaveCustom updated')
        navigate(routes.leaveCustoms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateLeaveCustomInput,
    id: EditLeaveCustomById['leaveCustom']['id']
  ) => {
    updateLeaveCustom({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit LeaveCustom {leaveCustom?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LeaveCustomForm
          leaveCustom={leaveCustom}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
