import type {
  EditOrganizationByOrganizationId,
  UpdateOrganizationInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormOrganization = NonNullable<
  EditOrganizationByOrganizationId['organization']
>

interface OrganizationFormProps {
  organization?: EditOrganizationByOrganizationId['organization']
  onSave: (
    data: UpdateOrganizationInput,
    OrganizationId?: FormOrganization['OrganizationId']
  ) => void
  error: RWGqlError
  loading: boolean
}

const OrganizationForm = (props: OrganizationFormProps) => {
  const onSubmit = (data: FormOrganization) => {
    props.onSave(data, props?.organization?.OrganizationId)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormOrganization> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Label
          name="OrganizationName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization name
        </Label>
        <TextField
          name="OrganizationName"
          defaultValue={props.organization?.OrganizationName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="OrganizationName" className="rw-field-error" />
        <Label
          name="Address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        <TextField
          name="Address"
          defaultValue={props.organization?.Address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Address" className="rw-field-error" />
        <Label
          name="Email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="Email"
          defaultValue={props.organization?.Email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Email" className="rw-field-error" />
        <Label
          name="Phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>
        <TextField
          name="Phone"
          defaultValue={props.organization?.Phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Phone" className="rw-field-error" />
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrganizationForm
