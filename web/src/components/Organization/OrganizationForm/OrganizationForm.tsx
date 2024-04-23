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
  Submit,
} from '@redwoodjs/forms'

import { Button } from 'src/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from 'src/components/ui/card'

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
    <main className="flex min-h-screen py-10">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Create a new organization</CardTitle>
          <CardDescription>
            Organizations are where you can manage your team&apos;s components.
          </CardDescription>
        </CardHeader>

        <Form<FormOrganization> onSubmit={onSubmit} error={props.error}>
          <FormError
            error={props.error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          />

          <CardContent className="grid gap-4">
            <div className="flex flex-col space-y-2">
              <Label
                name="OrganizationName"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Organization Name
              </Label>

              <TextField
                name="OrganizationName"
                placeholder="Organization Name"
                defaultValue={props.organization?.OrganizationName}
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{ required: true }}
              />

              <FieldError name="OrganizationName" className="rw-field-error" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label
                name="Address"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Address
              </Label>

              <TextField
                name="Address"
                placeholder="Address"
                defaultValue={props.organization?.Address}
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{ required: true }}
              />

              <FieldError name="Address" className="rw-field-error" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label
                name="ContactName"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Contact name
              </Label>

              <TextField
                name="ContactName"
                placeholder="Contact Name"
                defaultValue={props.organization?.ContactName}
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                validation={{ required: true }}
              />

              <FieldError name="ContactName" className="rw-field-error" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <Label
                  name="Email"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  Email
                </Label>

                <TextField
                  name="Email"
                  placeholder="Email"
                  defaultValue={props.organization?.Email}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                />

                <FieldError name="Email" className="rw-field-error" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label
                  name="Phone"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  Phone
                </Label>

                <TextField
                  name="Phone"
                  placeholder="Phone Number"
                  defaultValue={props.organization?.Phone}
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{ required: true }}
                />

                <FieldError name="Phone" className="rw-field-error" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Submit disabled={props.loading}>
              <Button>Create organization</Button>
            </Submit>
          </CardFooter>
        </Form>
      </Card>
      <Card>
        <div className="hidden bg-muted lg:block">
          <img
            alt=""
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            height="1080"
            src="/placeholder.svg"
            style={{
              aspectRatio: '1920/1080',
              objectFit: 'cover',
            }}
            width="1920"
          />
        </div>
      </Card>
    </main>
  )
}

export default OrganizationForm
