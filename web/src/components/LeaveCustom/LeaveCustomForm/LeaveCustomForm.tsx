import type { EditLeaveCustomById, UpdateLeaveCustomInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormLeaveCustom = NonNullable<EditLeaveCustomById['leaveCustom']>

interface LeaveCustomFormProps {
  leaveCustom?: EditLeaveCustomById['leaveCustom']
  onSave: (data: UpdateLeaveCustomInput, id?: FormLeaveCustom['id']) => void
  error: RWGqlError
  loading: boolean
}

const LeaveCustomForm = (props: LeaveCustomFormProps) => {
  const onSubmit = (data: FormLeaveCustom) => {
    props.onSave(data, props?.leaveCustom?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormLeaveCustom> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="requested_leave_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Requested leave date
        </Label>

        <DatetimeLocalField
          name="requested_leave_date"
          defaultValue={formatDatetime(props.leaveCustom?.requested_leave_date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="requested_leave_date" className="rw-field-error" />

        <Label
          name="leave_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Leave id
        </Label>

        <TextField
          name="leave_id"
          defaultValue={props.leaveCustom?.leave_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="leave_id" className="rw-field-error" />

        <Label
          name="leave_type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Leave type
        </Label>

        <TextField
          name="leave_type"
          defaultValue={props.leaveCustom?.leave_type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="leave_type" className="rw-field-error" />

        <Label
          name="leave_days"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Leave days
        </Label>

        <NumberField
          name="leave_days"
          defaultValue={props.leaveCustom?.leave_days}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="leave_days" className="rw-field-error" />

        <Label
          name="leave_approval"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Leave approval
        </Label>

        <CheckboxField
          name="leave_approval"
          defaultChecked={props.leaveCustom?.leave_approval}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="leave_approval" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LeaveCustomForm
