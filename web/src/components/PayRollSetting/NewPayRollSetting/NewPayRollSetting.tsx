import type {
  CreatePayRollSettingMutation,
  CreatePayRollSettingInput,
  CreatePayRollSettingMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PayRollSettingForm from 'src/components/PayRollSetting/PayRollSettingForm'

const CREATE_PAY_ROLL_SETTING_MUTATION: TypedDocumentNode<
  CreatePayRollSettingMutation,
  CreatePayRollSettingMutationVariables
> = gql`
  mutation CreatePayRollSettingMutation($input: CreatePayRollSettingInput!) {
    createPayRollSetting(input: $input) {
      id
    }
  }
`

const NewPayRollSetting = () => {
  const [createPayRollSetting, { loading, error }] = useMutation(
    CREATE_PAY_ROLL_SETTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('PayRollSetting created')
        navigate(routes.payRollSettings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePayRollSettingInput) => {
    createPayRollSetting({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PayRollSetting</h2>
      </header>
      <div className="rw-segment-main">
        <PayRollSettingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPayRollSetting
