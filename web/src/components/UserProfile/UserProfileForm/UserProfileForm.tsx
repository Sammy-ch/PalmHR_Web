import type {
  EditUserProfileByUserId,
  UpdateUserProfileInput,
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

type FormUserProfile = NonNullable<EditUserProfileByUserId['userProfile']>

interface UserProfileFormProps {
  userProfile?: EditUserProfileByUserId['userProfile']
  onSave: (
    data: UpdateUserProfileInput,
    user_id?: FormUserProfile['user_id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const UserProfileForm = (props: UserProfileFormProps) => {
  const onSubmit = (data: FormUserProfile) => {
    props.onSave(data, props?.userProfile?.user_id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUserProfile> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.userProfile?.first_name}
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
          defaultValue={props.userProfile?.last_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="last_name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.userProfile?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Password
        </Label>

        <TextField
          name="password"
          defaultValue={props.userProfile?.password}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="password" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserProfileForm
