import type {
  CreateLeaveCustomMutation,
  CreateLeaveCustomInput,
  CreateLeaveCustomMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LeaveCustomForm from 'src/components/LeaveCustom/LeaveCustomForm'

const CREATE_LEAVE_CUSTOM_MUTATION: TypedDocumentNode<
  CreateLeaveCustomMutation,
  CreateLeaveCustomMutationVariables
> = gql`
  mutation CreateLeaveCustomMutation($input: CreateLeaveCustomInput!) {
    createLeaveCustom(input: $input) {
      id
    }
  }
`

const NewLeaveCustom = () => {
  const [createLeaveCustom, { loading, error }] = useMutation(
    CREATE_LEAVE_CUSTOM_MUTATION,
    {
      onCompleted: () => {
        toast.success('LeaveCustom created')
        navigate(routes.leaveCustoms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateLeaveCustomInput) => {
    createLeaveCustom({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LeaveCustom</h2>
      </header>
      <div className="rw-segment-main">
        <LeaveCustomForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLeaveCustom
