import type { EditAdminById, UpdateAdminInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormAdmin = NonNullable<EditAdminById['admin']>

interface AdminFormProps {
  admin?: EditAdminById['admin']
  onSave: (data: UpdateAdminInput, id?: FormAdmin['id']) => void
  error: RWGqlError
  loading: boolean
}

const AdminForm = (props: AdminFormProps) => {
  const onSubmit = (data: FormAdmin) => {
    props.onSave(data, props?.admin?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAdmin> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="org_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Org id
        </Label>

        <TextField
          name="org_id"
          defaultValue={props.admin?.org_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="org_id" className="rw-field-error" />

        <Label
          name="first_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="username"
          defaultValue={props.admin?.username}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="username" className="rw-field-error" />

        <Label
          name="last_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User Name{' '}
        </Label>

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.admin?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AdminForm
