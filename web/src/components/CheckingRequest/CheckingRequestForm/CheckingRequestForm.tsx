import type {
  EditCheckingRequestById,
  UpdateCheckingRequestInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormCheckingRequest = NonNullable<
  EditCheckingRequestById['checkingRequest']
>

interface CheckingRequestFormProps {
  checkingRequest?: EditCheckingRequestById['checkingRequest']
  onSave: (
    data: UpdateCheckingRequestInput,
    id?: FormCheckingRequest['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CheckingRequestForm = (props: CheckingRequestFormProps) => {
  const onSubmit = (data: FormCheckingRequest) => {
    props.onSave(data, props?.checkingRequest?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCheckingRequest> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="employee_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Employee id
        </Label>

        <TextField
          name="employee_id"
          defaultValue={props.checkingRequest?.employee_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="employee_id" className="rw-field-error" />

        <Label
          name="checking_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checking date
        </Label>

        <DatetimeLocalField
          name="checking_date"
          defaultValue={formatDatetime(props.checkingRequest?.checking_date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="checking_date" className="rw-field-error" />

        <Label
          name="checking_time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checking time
        </Label>

        <DatetimeLocalField
          name="checking_time"
          defaultValue={formatDatetime(props.checkingRequest?.checking_time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="checking_time" className="rw-field-error" />

        <Label
          name="checking_type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checking type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequest-checking_type-0"
            name="checking_type"
            defaultValue="checkin"
            defaultChecked={props.checkingRequest?.checking_type?.includes(
              'checkin'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Checkin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequest-checking_type-1"
            name="checking_type"
            defaultValue="checkout"
            defaultChecked={props.checkingRequest?.checking_type?.includes(
              'checkout'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Checkout</div>
        </div>

        <FieldError name="checking_type" className="rw-field-error" />

        <Label
          name="checking_status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checking status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequest-checking_status-0"
            name="checking_status"
            defaultValue="approved"
            defaultChecked={props.checkingRequest?.checking_status?.includes(
              'approved'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Approved</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequest-checking_status-1"
            name="checking_status"
            defaultValue="pending"
            defaultChecked={props.checkingRequest?.checking_status?.includes(
              'pending'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Pending</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequest-checking_status-2"
            name="checking_status"
            defaultValue="declined"
            defaultChecked={props.checkingRequest?.checking_status?.includes(
              'declined'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Declined</div>
        </div>

        <FieldError name="checking_status" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CheckingRequestForm
