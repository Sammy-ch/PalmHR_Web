import type {
  EditEmployeeAttendanceByAttendanceId,
  UpdateEmployeeAttendanceInput,
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

type FormEmployeeAttendance = NonNullable<
  EditEmployeeAttendanceByAttendanceId['employeeAttendance']
>

interface EmployeeAttendanceFormProps {
  employeeAttendance?: EditEmployeeAttendanceByAttendanceId['employeeAttendance']
  onSave: (
    data: UpdateEmployeeAttendanceInput,
    attendance_id?: FormEmployeeAttendance['attendance_id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const EmployeeAttendanceForm = (props: EmployeeAttendanceFormProps) => {
  const onSubmit = (data: FormEmployeeAttendance) => {
    props.onSave(data, props?.employeeAttendance?.attendance_id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployeeAttendance> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.employeeAttendance?.employee_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="employee_id" className="rw-field-error" />

        <Label
          name="checkin_time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checkin time
        </Label>

        <DatetimeLocalField
          name="checkin_time"
          defaultValue={formatDatetime(props.employeeAttendance?.checkin_time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checkin_time" className="rw-field-error" />

        <Label
          name="checkout_time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checkout time
        </Label>

        <DatetimeLocalField
          name="checkout_time"
          defaultValue={formatDatetime(props.employeeAttendance?.checkout_time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checkout_time" className="rw-field-error" />

        <Label
          name="checking_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checking date
        </Label>

        <DatetimeLocalField
          name="checking_date"
          defaultValue={formatDatetime(props.employeeAttendance?.checking_date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checking_date" className="rw-field-error" />

        <Label
          name="working_time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Working time
        </Label>

        <DatetimeLocalField
          name="working_time"
          defaultValue={formatDatetime(props.employeeAttendance?.working_time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="working_time" className="rw-field-error" />

        <Label
          name="presence_tag"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Presence tag
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            attendance_id="employeeAttendance-presence_tag-0"
            name="presence_tag"
            defaultValue="PRESENT"
            defaultChecked={props.employeeAttendance?.presence_tag?.includes(
              'PRESENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Present</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            attendance_id="employeeAttendance-presence_tag-1"
            name="presence_tag"
            defaultValue="LATE"
            defaultChecked={props.employeeAttendance?.presence_tag?.includes(
              'LATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Late</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            attendance_id="employeeAttendance-presence_tag-2"
            name="presence_tag"
            defaultValue="JUSTIFIED_ABSENCE"
            defaultChecked={props.employeeAttendance?.presence_tag?.includes(
              'JUSTIFIED_ABSENCE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Justified Absence</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            attendance_id="employeeAttendance-presence_tag-3"
            name="presence_tag"
            defaultValue="UNJUSTIFIED_ABSENCE"
            defaultChecked={props.employeeAttendance?.presence_tag?.includes(
              'UNJUSTIFIED_ABSENCE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Unjustified Absence</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            attendance_id="employeeAttendance-presence_tag-4"
            name="presence_tag"
            defaultValue="UNNOTIFIED_ABSENCE"
            defaultChecked={props.employeeAttendance?.presence_tag?.includes(
              'UNNOTIFIED_ABSENCE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Unnotified Absence</div>
        </div>

        <FieldError name="presence_tag" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeAttendanceForm
