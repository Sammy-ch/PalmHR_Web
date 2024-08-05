import type {
  EditEmployeePayRollById,
  UpdateEmployeePayRollInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEmployeePayRoll = NonNullable<
  EditEmployeePayRollById['employeePayRoll']
>

interface EmployeePayRollFormProps {
  employeePayRoll?: EditEmployeePayRollById['employeePayRoll']
  onSave: (
    data: UpdateEmployeePayRollInput,
    id?: FormEmployeePayRoll['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const EmployeePayRollForm = (props: EmployeePayRollFormProps) => {
  const onSubmit = (data: FormEmployeePayRoll) => {
    props.onSave(data, props?.employeePayRoll?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployeePayRoll> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="pay_period_start"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pay period start
        </Label>

        <DatetimeLocalField
          name="pay_period_start"
          defaultValue={formatDatetime(props.employeePayRoll?.pay_period_start)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pay_period_start" className="rw-field-error" />

        <Label
          name="pay_period_end"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pay period end
        </Label>

        <DatetimeLocalField
          name="pay_period_end"
          defaultValue={formatDatetime(props.employeePayRoll?.pay_period_end)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pay_period_end" className="rw-field-error" />

        <Label
          name="base_salary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Base salary
        </Label>

        <NumberField
          name="base_salary"
          defaultValue={props.employeePayRoll?.base_salary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="base_salary" className="rw-field-error" />

        <Label
          name="net_salary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Net salary
        </Label>

        <NumberField
          name="net_salary"
          defaultValue={props.employeePayRoll?.net_salary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="net_salary" className="rw-field-error" />

        <Label
          name="gross_salary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gross salary
        </Label>

        <NumberField
          name="gross_salary"
          defaultValue={props.employeePayRoll?.gross_salary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="gross_salary" className="rw-field-error" />

        <Label
          name="bonuses"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bonuses
        </Label>

        <NumberField
          name="bonuses"
          defaultValue={props.employeePayRoll?.bonuses}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="bonuses" className="rw-field-error" />

        <Label
          name="labor_cost"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Labor cost
        </Label>

        <NumberField
          name="labor_cost"
          defaultValue={props.employeePayRoll?.labor_cost}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="labor_cost" className="rw-field-error" />

        <Label
          name="IPR"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ipr
        </Label>

        <NumberField
          name="IPR"
          defaultValue={props.employeePayRoll?.IPR}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="IPR" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmployeePayRollForm
