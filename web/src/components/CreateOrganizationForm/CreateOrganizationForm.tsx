import { Form, Label, SelectField, RWGqlError } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'
import { Input } from '../ui/input'

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
    const emailDomain = data.Email.split('@')[1]
    const isPublicDomain = ['gmail.com', 'yahoo.com', 'hotmail.com'].includes(
      emailDomain
    )

    if (isPublicDomain) {
      toast.error('Please use a Professional email domain.')
      return
    }

    props.onSave(data, props?.organization?.OrganizationId)
  }

  return (
    <Form<FormOrganization> onSubmit={onSubmit} error={props.error}>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Create New Organization</CardTitle>
          <CardDescription>
            Fill out the form below to create a new organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label name="OrganizationName" htmlFor="name">
                Organization Name
              </Label>
              <Input
                name="OrganizationName"
                id="name"
                placeholder="Enter organization name"
                required
              />
            </div>

            <div className=" flex flex-col space-y-2">
              <Label name="organizationType" htmlFor="type">
                Organization Type
              </Label>

              <SelectField
                name="organizationType"
                className="h-10  rounded-md border"
              >
                <option>Other</option>
                <option>NonProfit</option>
                <option>ForProfit</option>
                <option>Government</option>
              </SelectField>
            </div>
            <div className="space-y-2">
              <Label name="address" htmlFor="address-street">
                Address
              </Label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  name="addressStreet"
                  id="address-street"
                  placeholder="Street address"
                />
                <Input
                  name="addressCity"
                  id="address-city"
                  placeholder="City"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Input
                  name="addressState"
                  id="address-state"
                  placeholder="State/Province"
                />
                <SelectField
                  name="addressCountry"
                  className="h-10 rounded-md border"
                >
                  <option>Burundi</option>
                  <option>Other</option>
                </SelectField>
              </div>
            </div>
            <div className="space-y-2">
              <Label name="Phone" htmlFor="phone">
                Phone
              </Label>
              <Input name="Phone" id="phone" placeholder="Enter phone number" />
            </div>
            <div className="space-y-2">
              <Label name="Email" htmlFor="email">
                Email
              </Label>
              <Input
                name="Email"
                id="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-2">
              <Label name="websiteUrl" htmlFor="website">
                Website
              </Label>
              <Input
                name="websiteUrl"
                id="website"
                placeholder="Enter website URL"
              />
            </div>
            <div className="space-y-2">
              <Label name="logo" htmlFor="logo">
                Logo
              </Label>
              <div />
            </div>

            <div className="flex flex-col  space-y-2">
              <Label name="organizationSize" htmlFor="size">
                Organization Size
              </Label>
              <SelectField
                name="organizationSize"
                className="h-10 rounded-md border"
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </SelectField>
            </div>
            <div className=" flex flex-col space-y-2">
              <Label name="Industry" htmlFor="industry">
                Industry
              </Label>

              <SelectField name="Industry" className="h-10 rounded-md border">
                <option>Technology</option>
                <option>HealthCare</option>
                <option>Finance</option>
                <option>Education</option>
                <option>Retail</option>
                <option>Manufactoring</option>
                <option>Other</option>
              </SelectField>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Create Organization
          </Button>
        </CardFooter>
      </Card>
    </Form>
  )
}

export default CreateOrganizationForm
