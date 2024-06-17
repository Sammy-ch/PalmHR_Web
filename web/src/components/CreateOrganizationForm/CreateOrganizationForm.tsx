import {
  Form,
  Label,
  TextField,
  FormError,
  Submit,
  FieldError,
  RWGqlError,
} from '@redwoodjs/forms'

import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'

import {
  EditOrganizationByOrganizationId,
  UpdateOrganizationInput,
} from '@/types/graphql'

type FormOrganization = NonNullable<
  EditOrganizationByOrganizationId['organization']
>

interface OrganizationFormProps {
  organization?: EditOrganizationByOrganizationId['organization']
  onSave: (
    data: UpdateOrganizationInput,
    OrganizationId: FormOrganization['OrganizationId']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CreateOrganizationForm = (props: OrganizationFormProps) => {
  const onSubmit = (data: FormOrganization) => {
    props.onSave(data, props?.organization?.OrganizationId)
  }

  return (
    <Form<FormOrganization> onSubmit={onSubmit} error={props.error}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Organization</CardTitle>
          <CardDescription>
            Enter the details of your new organization.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10">
          <div className="space-y-2">
            <FormError
              error={props.error}
              wrapperClassName="rw-form-error-wrapper"
              titleClassName="rw-form-error-title"
              listClassName="rw-form-error-list"
            />
            <Label name="OrganizationName" htmlFor="name">
              Organization Name
            </Label>
            <TextField
              className="rw-input"
              name="OrganizationName"
              id="name"
              placeholder="Enter organization name"
              validation={{ required: true }}
            />
            <FieldError name="OrganizationName" className="rw-field-error" />
          </div>
          <div className="space-y-2">
            <Label name="Address" htmlFor="address">
              Address
            </Label>
            <TextField
              id="address"
              className="rw-input"
              name="Address"
              validation={{ required: true }}
              placeholder="Enter organization address"
            />
            <FieldError name="Address" className="rw-field-error" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label name="Email" htmlFor="email">
                Email
              </Label>
              <TextField
                className="rw-input"
                name="Email"
                id="email"
                placeholder="Enter email"
                validation={{
                  required: true,
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@(?!gmail\.com$|yahoo\.com$|outlook\.com$|icloud\.com$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid organization email',
                  },
                }}
              />
              <FieldError name="Email" className="rw-field-error" />
            </div>
            <div className="space-y-2">
              <Label name="Phone" htmlFor="phone">
                Phone
              </Label>
              <TextField
                className="rw-input"
                name="Phone"
                id="phone"
                placeholder="Enter phone number"
                validation={{ required: true }}
              />
              <FieldError name="Phone" className="rw-field-error" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            <Submit disabled={props.loading}>Verify Organization Email</Submit>
          </Button>
        </CardFooter>
      </Card>
    </Form>
  )
}

export default CreateOrganizationForm
