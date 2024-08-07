import type { EditOrganizationPayrollSettingById } from 'types/graphql'

import { Form } from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { Button } from 'src/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

interface OrganizationPayrollSettingFormProps {
  organizationPayrollSetting?: EditOrganizationPayrollSettingById['organizationPayrollSetting']
  onSave: (
    data: OrganizationPayrollSettingFormProps,
    id?: OrganizationPayrollSettingFormProps['organizationPayrollSetting']['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

interface OrganizationpayrollsettingcardProps {
  org_id: string
  onClose: () => void
}

const CREATE_ORGANIZATION_PAYROLL_SETTING = gql`
  mutation CreateOrganizationPayrollSettingMutation(
    $input: CreateOrganizationPayrollSettingInput!
  ) {
    createOrganizationPayrollSetting(input: $input) {
      id
    }
  }
`

const Organizationpayrollsettingcard = ({
  org_id,
  onClose,
}: OrganizationpayrollsettingcardProps) => {
  const [createOrganizationPayrollSetting, { loading, error }] = useMutation(
    CREATE_ORGANIZATION_PAYROLL_SETTING
  )

  const onSubmit = (data: OrganizationPayrollSettingFormProps) => {
    const inputData = { ...data, org_id }

    createOrganizationPayrollSetting({ variables: { input: inputData } })
      .then(() => {
        console.log('Organization payroll setting created successfully')
        onClose()
      })
      .catch((err) => {
        console.error('Error creating organization payroll setting:', err)
      })
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Payroll Settings</CardTitle>
        <CardDescription>
          Configure your payroll deductions and contributions.
        </CardDescription>
      </CardHeader>
      <Form onSubmit={onSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="housing">Housing</Label>
            <Input
              name="housing"
              id="housing"
              type="number"
              placeholder="0.00"
              min="0"
              max="100"
              step="0.01"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="transportation">Transportation</Label>
            <Input
              name="transportation"
              id="transportation"
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="inss">INSS</Label>
            <Input name="INSS" id="inss" type="number" placeholder="0.00" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="inss-patronal">INSS Patronal</Label>
            <Input
              name="INSS_patronal"
              id="inss-patronal"
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="inss-risque">INSS Risque</Label>
            <Input
              name="INSS_risque"
              id="inss-risque"
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="medical-insurance">Medical Insurance</Label>
            <Input
              name="medical_insurance"
              id="medical-insurance"
              type="number"
              placeholder="0.00"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Settings'}
          </Button>{' '}
        </CardFooter>
      </Form>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </Card>
  )
}

export default Organizationpayrollsettingcard
