import type {
  EditOrganizationByOrganizationId,
  UpdateOrganizationInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

type FormOrganization = NonNullable<
  EditOrganizationByOrganizationId['organization']
>

interface OrganizationFormProps {
  organization?: EditOrganizationByOrganizationId['organization']
  onSave: (
    data: UpdateOrganizationInput,
    OrganizationId?: FormOrganization['OrganizationId']
  ) => void
  error: RWGqlError
  loading: boolean
}

const OrganizationForm = (props: OrganizationFormProps) => {
  const onSubmit = (data: FormOrganization) => {
    props.onSave(data, props?.organization?.OrganizationId)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormOrganization> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="OrganizationName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization name
        </Label>

        <TextField
          name="OrganizationName"
          defaultValue={props.organization?.OrganizationName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="OrganizationName" className="rw-field-error" />

        <Label
          name="organizationType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationType-0"
            name="organizationType"
            defaultValue="NonProfit"
            defaultChecked={props.organization?.organizationType?.includes(
              'NonProfit'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Nonprofit</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationType-1"
            name="organizationType"
            defaultValue="ForProfit"
            defaultChecked={props.organization?.organizationType?.includes(
              'ForProfit'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Forprofit</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationType-2"
            name="organizationType"
            defaultValue="Government"
            defaultChecked={props.organization?.organizationType?.includes(
              'Government'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Government</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationType-3"
            name="organizationType"
            defaultValue="Other"
            defaultChecked={props.organization?.organizationType?.includes(
              'Other'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Other</div>
        </div>

        <FieldError name="organizationType" className="rw-field-error" />

        <Label
          name="addressStreet"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address street
        </Label>

        <TextField
          name="addressStreet"
          defaultValue={props.organization?.addressStreet}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="addressStreet" className="rw-field-error" />

        <Label
          name="addressCity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address city
        </Label>

        <TextField
          name="addressCity"
          defaultValue={props.organization?.addressCity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="addressCity" className="rw-field-error" />

        <Label
          name="addressState"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address state
        </Label>

        <TextField
          name="addressState"
          defaultValue={props.organization?.addressState}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="addressState" className="rw-field-error" />

        <Label
          name="addressCountry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address country
        </Label>

        <TextField
          name="addressCountry"
          defaultValue={props.organization?.addressCountry}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="addressCountry" className="rw-field-error" />

        <Label
          name="Email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="Email"
          defaultValue={props.organization?.Email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="Email" className="rw-field-error" />

        <Label
          name="websiteUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website url
        </Label>

        <TextField
          name="websiteUrl"
          defaultValue={props.organization?.websiteUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="websiteUrl" className="rw-field-error" />

        <Label
          name="Phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="Phone"
          defaultValue={props.organization?.Phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="Phone" className="rw-field-error" />

        <Label
          name="isVerified"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is verified
        </Label>

        <CheckboxField
          name="isVerified"
          defaultChecked={props.organization?.isVerified}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isVerified" className="rw-field-error" />

        <Label
          name="organizationSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization size
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationSize-0"
            name="organizationSize"
            defaultValue="Small"
            defaultChecked={props.organization?.organizationSize?.includes(
              'Small'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Small</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationSize-1"
            name="organizationSize"
            defaultValue="Medium"
            defaultChecked={props.organization?.organizationSize?.includes(
              'Medium'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Medium</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-organizationSize-2"
            name="organizationSize"
            defaultValue="Large"
            defaultChecked={props.organization?.organizationSize?.includes(
              'Large'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Large</div>
        </div>

        <FieldError name="organizationSize" className="rw-field-error" />

        <Label
          name="Industry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Industry
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-0"
            name="Industry"
            defaultValue="Technology"
            defaultChecked={props.organization?.Industry?.includes(
              'Technology'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Technology</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-1"
            name="Industry"
            defaultValue="HealthCare"
            defaultChecked={props.organization?.Industry?.includes(
              'HealthCare'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Healthcare</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-2"
            name="Industry"
            defaultValue="Finance"
            defaultChecked={props.organization?.Industry?.includes('Finance')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Finance</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-3"
            name="Industry"
            defaultValue="Education"
            defaultChecked={props.organization?.Industry?.includes('Education')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Education</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-4"
            name="Industry"
            defaultValue="Retail"
            defaultChecked={props.organization?.Industry?.includes('Retail')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Retail</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-5"
            name="Industry"
            defaultValue="Manufactoring"
            defaultChecked={props.organization?.Industry?.includes(
              'Manufactoring'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Manufactoring</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            OrganizationId="organization-Industry-6"
            name="Industry"
            defaultValue="Other"
            defaultChecked={props.organization?.Industry?.includes('Other')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Other</div>
        </div>

        <FieldError name="Industry" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrganizationForm
