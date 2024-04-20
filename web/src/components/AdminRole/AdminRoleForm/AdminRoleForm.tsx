import type { EditAdminRoleById, UpdateAdminRoleInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

type FormAdminRole = NonNullable<EditAdminRoleById['adminRole']>

interface AdminRoleFormProps {
  adminRole?: EditAdminRoleById['adminRole']
  onSave: (data: UpdateAdminRoleInput, id?: FormAdminRole['id']) => void
  error: RWGqlError
  loading: boolean
}

const AdminRoleForm = (props: AdminRoleFormProps) => {
  const onSubmit = (data: FormAdminRole) => {
    props.onSave(data, props?.adminRole?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAdminRole> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.adminRole?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="adminId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admin id
        </Label>

        <NumberField
          name="adminId"
          defaultValue={props.adminRole?.adminId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="adminId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AdminRoleForm
