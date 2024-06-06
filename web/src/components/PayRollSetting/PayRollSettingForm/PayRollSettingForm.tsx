import type {
  EditPayRollSettingById,
  UpdatePayRollSettingInput,
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

type FormPayRollSetting = NonNullable<EditPayRollSettingById['payRollSetting']>

interface PayRollSettingFormProps {
  payRollSetting?: EditPayRollSettingById['payRollSetting']
  onSave: (
    data: UpdatePayRollSettingInput,
    id?: FormPayRollSetting['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const PayRollSettingForm = (props: PayRollSettingFormProps) => {
  const onSubmit = (data: FormPayRollSetting) => {
    props.onSave(data, props?.payRollSetting?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPayRollSetting> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="org_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Org id
        </Label>

        <TextField
          name="org_id"
          defaultValue={props.payRollSetting?.org_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="org_id" className="rw-field-error" />

        <Label
          name="housing"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Housing
        </Label>

        <NumberField
          name="housing"
          defaultValue={props.payRollSetting?.housing}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="housing" className="rw-field-error" />

        <Label
          name="transport"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Transport
        </Label>

        <NumberField
          name="transport"
          defaultValue={props.payRollSetting?.transport}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="transport" className="rw-field-error" />

        <Label
          name="INSS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inss
        </Label>

        <NumberField
          name="INSS"
          defaultValue={props.payRollSetting?.INSS}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="INSS" className="rw-field-error" />

        <Label
          name="INSS_contribution"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inss contribution
        </Label>

        <NumberField
          name="INSS_contribution"
          defaultValue={props.payRollSetting?.INSS_contribution}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="INSS_contribution" className="rw-field-error" />

        <Label
          name="INSS_payroll_risks"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inss payroll risks
        </Label>

        <NumberField
          name="INSS_payroll_risks"
          defaultValue={props.payRollSetting?.INSS_payroll_risks}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="INSS_payroll_risks" className="rw-field-error" />

        <Label
          name="medical_insurance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Medical insurance
        </Label>

        <NumberField
          name="medical_insurance"
          defaultValue={props.payRollSetting?.medical_insurance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="medical_insurance" className="rw-field-error" />

        <Label
          name="IPR"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ipr
        </Label>

        <NumberField
          name="IPR"
          defaultValue={props.payRollSetting?.IPR}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="IPR" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.payRollSetting?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PayRollSettingForm
