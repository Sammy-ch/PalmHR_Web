import type {
  EditOrganizationPayrollSettingById,
  UpdateOrganizationPayrollSettingInput,
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

type FormOrganizationPayrollSetting = NonNullable<
  EditOrganizationPayrollSettingById['organizationPayrollSetting']
>

interface OrganizationPayrollSettingFormProps {
  organizationPayrollSetting?: EditOrganizationPayrollSettingById['organizationPayrollSetting']
  onSave: (
    data: UpdateOrganizationPayrollSettingInput,
    id?: FormOrganizationPayrollSetting['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const OrganizationPayrollSettingForm = (
  props: OrganizationPayrollSettingFormProps
) => {
  const onSubmit = (data: FormOrganizationPayrollSetting) => {
    props.onSave(data, props?.organizationPayrollSetting?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormOrganizationPayrollSetting>
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
          name="org_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Org id
        </Label>

        <TextField
          name="org_id"
          defaultValue={props.organizationPayrollSetting?.org_id}
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
          defaultValue={props.organizationPayrollSetting?.housing}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="housing" className="rw-field-error" />

        <Label
          name="transportation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Transportation
        </Label>

        <NumberField
          name="transportation"
          defaultValue={props.organizationPayrollSetting?.transportation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="transportation" className="rw-field-error" />

        <Label
          name="INSS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inss
        </Label>

        <NumberField
          name="INSS"
          defaultValue={props.organizationPayrollSetting?.INSS}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="INSS" className="rw-field-error" />

        <Label
          name="INSS_patronal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inss patronal
        </Label>

        <NumberField
          name="INSS_patronal"
          defaultValue={props.organizationPayrollSetting?.INSS_patronal}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="INSS_patronal" className="rw-field-error" />

        <Label
          name="INSS_risque"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inss risque
        </Label>

        <NumberField
          name="INSS_risque"
          defaultValue={props.organizationPayrollSetting?.INSS_risque}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="INSS_risque" className="rw-field-error" />

        <Label
          name="medical_insurance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Medical insurance
        </Label>

        <NumberField
          name="medical_insurance"
          defaultValue={props.organizationPayrollSetting?.medical_insurance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="medical_insurance" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrganizationPayrollSettingForm
