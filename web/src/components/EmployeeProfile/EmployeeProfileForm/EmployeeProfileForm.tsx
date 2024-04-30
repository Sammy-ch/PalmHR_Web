import type {
  EditEmployeeProfileByProfileId,
  UpdateEmployeeProfileInput,
} from 'types/graphql'

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

type FormEmployeeProfile = NonNullable<
  EditEmployeeProfileByProfileId['employeeProfile']
>

interface EmployeeProfileFormProps {
  employeeProfile?: EditEmployeeProfileByProfileId['employeeProfile']
  onSave: (
    data: UpdateEmployeeProfileInput,
    profile_id?: FormEmployeeProfile['profile_id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const EmployeeProfileForm = (props: EmployeeProfileFormProps) => {
  const onSubmit = (data: FormEmployeeProfile) => {
    props.onSave(data, props?.employeeProfile?.profile_id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployeeProfile> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="first_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="first_name"
          defaultValue={props.employeeProfile?.first_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="first_name" className="rw-field-error" />

        <Label
          name="last_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="last_name"
          defaultValue={props.employeeProfile?.last_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="last_name" className="rw-field-error" />

        <Label
          name="profile_image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile image
        </Label>

        <TextField
          name="profile_image"
          defaultValue={props.employeeProfile?.profile_image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="profile_image" className="rw-field-error" />

        <Label
          name="position"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Position
        </Label>

        <TextField
          name="position"
          defaultValue={props.employeeProfile?.position}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="position" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.employeeProfile?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="allowed_leaves"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Allowed leaves
        </Label>

        <NumberField
          name="allowed_leaves"
          defaultValue={props.employeeProfile?.allowed_leaves}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="allowed_leaves" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeProfileForm
