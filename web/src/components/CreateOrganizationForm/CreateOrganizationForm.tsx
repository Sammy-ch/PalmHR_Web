import {
  Form,
  Label,
  FormError,
  Submit,
  FieldError,
  RWGqlError,
  TextAreaField,
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
import { Input } from '../ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select'

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
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Create New Organization</CardTitle>
          <CardDescription>
            Fill out the form below to create a new organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label name="name" htmlFor="name">
                Organization Name
              </Label>
              <Input
                name="name"
                id="name"
                placeholder="Enter organization name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label name="type" htmlFor="type">
                Organization Type
              </Label>
              <Select id="type">
                <SelectTrigger>
                  <SelectValue placeholder="Select organization type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="non-profit">Non-profit</SelectItem>
                  <SelectItem value="for-profit">For-profit</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
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
                <Select id="address-country">
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label name="phone" htmlFor="phone">
                Phone
              </Label>
              <Input name="phone" id="phone" placeholder="Enter phone number" />
            </div>
            <div className="space-y-2">
              <Label name="email" htmlFor="email">
                Email
              </Label>
              <Input
                name="email"
                id="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-2">
              <Label name="website" htmlFor="website">
                Website
              </Label>
              <Input
                name="website"
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

            <div className="space-y-2">
              <Label name="organizationSize" htmlFor="size">
                Organization Size
              </Label>
              <Select id="size">
                <SelectTrigger>
                  <SelectValue placeholder="Select organization size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201+">201+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label name="industry" htmlFor="industry">
                Industry
              </Label>
              <Select id="industry">
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
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
