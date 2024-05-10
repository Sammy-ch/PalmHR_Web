import type { EditPayRollById, UpdatePayRollInput } from 'types/graphql'

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

type FormPayRoll = NonNullable<EditPayRollById['payRoll']>

interface PayRollFormProps {
  payRoll?: EditPayRollById['payRoll']
  onSave: (data: UpdatePayRollInput, id?: FormPayRoll['id']) => void
  error: RWGqlError
  loading: boolean
}

const PayRollForm = (props: PayRollFormProps) => {
  const onSubmit = (data: FormPayRoll) => {
    props.onSave(data, props?.payRoll?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPayRoll> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={formatDatetime(props.payRoll?.pay_period_start)}
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
          defaultValue={formatDatetime(props.payRoll?.pay_period_end)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pay_period_end" className="rw-field-error" />

        <Label
          name="hours_Worked"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hours worked
        </Label>

        <DatetimeLocalField
          name="hours_Worked"
          defaultValue={formatDatetime(props.payRoll?.hours_Worked)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hours_Worked" className="rw-field-error" />

        <Label
          name="overtime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Overtime
        </Label>

        <DatetimeLocalField
          name="overtime"
          defaultValue={formatDatetime(props.payRoll?.overtime)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="overtime" className="rw-field-error" />

        <Label
          name="base_salary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Base salary
        </Label>

        <NumberField
          name="base_salary"
          defaultValue={props.payRoll?.base_salary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="base_salary" className="rw-field-error" />

        <Label
          name="netpay"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Netpay
        </Label>

        <NumberField
          name="netpay"
          defaultValue={props.payRoll?.netpay}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="netpay" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PayRollForm
