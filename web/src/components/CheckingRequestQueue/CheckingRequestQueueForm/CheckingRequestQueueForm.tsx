import type {
  EditCheckingRequestQueueById,
  UpdateCheckingRequestQueueInput,
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

type FormCheckingRequestQueue = NonNullable<
  EditCheckingRequestQueueById['checkingRequestQueue']
>

interface CheckingRequestQueueFormProps {
  checkingRequestQueue?: EditCheckingRequestQueueById['checkingRequestQueue']
  onSave: (
    data: UpdateCheckingRequestQueueInput,
    id?: FormCheckingRequestQueue['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CheckingRequestQueueForm = (props: CheckingRequestQueueFormProps) => {
  const onSubmit = (data: FormCheckingRequestQueue) => {
    props.onSave(data, props?.checkingRequestQueue?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCheckingRequestQueue> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.checkingRequestQueue?.employee_id}
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
          defaultValue={formatDatetime(
            props.checkingRequestQueue?.checking_date
          )}
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
          defaultValue={formatDatetime(
            props.checkingRequestQueue?.checking_time
          )}
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
            id="checkingRequestQueue-checking_type-0"
            name="checking_type"
            defaultValue="CHECKIN"
            defaultChecked={props.checkingRequestQueue?.checking_type?.includes(
              'CHECKIN'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Checkin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequestQueue-checking_type-1"
            name="checking_type"
            defaultValue="CHECKOUT"
            defaultChecked={props.checkingRequestQueue?.checking_type?.includes(
              'CHECKOUT'
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
            id="checkingRequestQueue-checking_status-0"
            name="checking_status"
            defaultValue="APPROVED"
            defaultChecked={props.checkingRequestQueue?.checking_status?.includes(
              'APPROVED'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Approved</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequestQueue-checking_status-1"
            name="checking_status"
            defaultValue="PENDING"
            defaultChecked={props.checkingRequestQueue?.checking_status?.includes(
              'PENDING'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Pending</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="checkingRequestQueue-checking_status-2"
            name="checking_status"
            defaultValue="DECLINED"
            defaultChecked={props.checkingRequestQueue?.checking_status?.includes(
              'DECLINED'
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

export default CheckingRequestQueueForm
