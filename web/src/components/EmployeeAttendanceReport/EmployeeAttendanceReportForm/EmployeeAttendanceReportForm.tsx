import type {
  EditEmployeeAttendanceReportById,
  UpdateEmployeeAttendanceReportInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEmployeeAttendanceReport = NonNullable<
  EditEmployeeAttendanceReportById['employeeAttendanceReport']
>

interface EmployeeAttendanceReportFormProps {
  employeeAttendanceReport?: EditEmployeeAttendanceReportById['employeeAttendanceReport']
  onSave: (
    data: UpdateEmployeeAttendanceReportInput,
    id?: FormEmployeeAttendanceReport['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const EmployeeAttendanceReportForm = (
  props: EmployeeAttendanceReportFormProps
) => {
  const onSubmit = (data: FormEmployeeAttendanceReport) => {
    props.onSave(data, props?.employeeAttendanceReport?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployeeAttendanceReport>
        onSubmit={onSubmit}
        error={props.error}
      >
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
          defaultValue={props.employeeAttendanceReport?.employee_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="employee_id" className="rw-field-error" />

        <Label
          name="TotalOvertime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total overtime
        </Label>

        <DatetimeLocalField
          name="TotalOvertime"
          defaultValue={formatDatetime(
            props.employeeAttendanceReport?.TotalOvertime
          )}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="TotalOvertime" className="rw-field-error" />

        <Label
          name="TotalWorkhours"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total workhours
        </Label>

        <DatetimeLocalField
          name="TotalWorkhours"
          defaultValue={formatDatetime(
            props.employeeAttendanceReport?.TotalWorkhours
          )}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="TotalWorkhours" className="rw-field-error" />

        <Label
          name="TotalSickLeaves"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total sick leaves
        </Label>

        <DatetimeLocalField
          name="TotalSickLeaves"
          defaultValue={formatDatetime(
            props.employeeAttendanceReport?.TotalSickLeaves
          )}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="TotalSickLeaves" className="rw-field-error" />

        <Label
          name="AbstenteeismRate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Abstenteeism rate
        </Label>

        <NumberField
          name="AbstenteeismRate"
          defaultValue={props.employeeAttendanceReport?.AbstenteeismRate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="AbstenteeismRate" className="rw-field-error" />

        <Label
          name="EarlyAttendaceRate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Early attendace rate
        </Label>

        <NumberField
          name="EarlyAttendaceRate"
          defaultValue={props.employeeAttendanceReport?.EarlyAttendaceRate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="EarlyAttendaceRate" className="rw-field-error" />

        <Label
          name="LateAttedanceRate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Late attedance rate
        </Label>

        <NumberField
          name="LateAttedanceRate"
          defaultValue={props.employeeAttendanceReport?.LateAttedanceRate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="LateAttedanceRate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeAttendanceReportForm
