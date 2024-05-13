import type {
  EditEmployeeLeaveFormById,
  UpdateEmployeeLeaveFormInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  RadioField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEmployeeLeaveForm = NonNullable<
  EditEmployeeLeaveFormById['employeeLeaveForm']
>

interface EmployeeLeaveFormFormProps {
  employeeLeaveForm?: EditEmployeeLeaveFormById['employeeLeaveForm']
  onSave: (
    data: UpdateEmployeeLeaveFormInput,
    id?: FormEmployeeLeaveForm['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const EmployeeLeaveFormForm = (props: EmployeeLeaveFormFormProps) => {
  const onSubmit = (data: FormEmployeeLeaveForm) => {
    props.onSave(data, props?.employeeLeaveForm?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployeeLeaveForm> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={formatDatetime(
            props.employeeLeaveForm?.requested_leave_date
          )}
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
          defaultValue={props.employeeLeaveForm?.leave_id}
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

        <div className="rw-check-radio-items">
          <RadioField
            id="employeeLeaveForm-leave_type-0"
            name="leave_type"
            defaultValue="PERSONAL"
            defaultChecked={props.employeeLeaveForm?.leave_type?.includes(
              'PERSONAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Personal</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="employeeLeaveForm-leave_type-1"
            name="leave_type"
            defaultValue="SICK"
            defaultChecked={props.employeeLeaveForm?.leave_type?.includes(
              'SICK'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Sick</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="employeeLeaveForm-leave_type-2"
            name="leave_type"
            defaultValue="HOLIDAY"
            defaultChecked={props.employeeLeaveForm?.leave_type?.includes(
              'HOLIDAY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Holiday</div>
        </div>

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
          defaultValue={props.employeeLeaveForm?.leave_days}
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
          defaultChecked={props.employeeLeaveForm?.leave_approval}
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

export default EmployeeLeaveFormForm
