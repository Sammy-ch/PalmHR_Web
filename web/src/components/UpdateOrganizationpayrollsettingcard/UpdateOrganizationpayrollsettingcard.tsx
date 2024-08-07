import { Form } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'

import type { EditOrganizationPayrollSettingById } from '@/types/graphql'
import { UpdateOrganizationPayrollSettingInput } from '@/types/graphql'

interface UpdateOrganizationpayrollsettingcardProps {
  org_id: string
  onClose: () => void
  organizationPayrollSettings?: EditOrganizationPayrollSettingById['organizationPayrollSetting']
}

const UPDATE_ORGANIZATION_PAYROLL_SETTING = gql`
  mutation UpdateOrganizationPayrollSettingMutation(
    $id: String!
    $input: UpdateOrganizationPayrollSettingInput!
  ) {
    updateOrganizationPayrollSetting(id: $id, input: $input) {
      id
      org_id
    }
  }
`

const UpdateOrganizationpayrollsettingcard = ({
  org_id,
  onClose,
  organizationPayrollSettings,
}: UpdateOrganizationpayrollsettingcardProps) => {
  const [updateOrganizationPayrollSetting, { loading, error }] = useMutation(
    UPDATE_ORGANIZATION_PAYROLL_SETTING
  )

  const onSubmit = (data: UpdateOrganizationPayrollSettingInput) => {
    const inputData = { ...data, org_id }

    updateOrganizationPayrollSetting({
      variables: { id: organizationPayrollSettings.id, input: inputData },
    })
      .then(() => {
        console.log('Organization payroll setting updated successfully')
        onClose()
      })
      .catch((err) => {
        console.error('Error updating organization payroll setting:', err)
      })
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Update Payroll Settings</CardTitle>
        <CardDescription>
          Modify your payroll deductions and contributions.
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
              defaultValue={organizationPayrollSettings.housing}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="transportation">Transportation</Label>
            <Input
              name="transportation"
              id="transportation"
              type="number"
              placeholder="0.00"
              defaultValue={organizationPayrollSettings.transportation}
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
              defaultValue={organizationPayrollSettings.INSS_patronal}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="inss-risque">INSS Risque</Label>
            <Input
              name="INSS_risque"
              id="inss-risque"
              type="number"
              placeholder="0.00"
              defaultValue={organizationPayrollSettings.INSS_risque}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="medical-insurance">Medical Insurance</Label>
            <Input
              name="medical_insurance"
              id="medical-insurance"
              type="number"
              placeholder="0.00"
              defaultValue={organizationPayrollSettings.medical_insurance}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update settings'}
          </Button>{' '}
        </CardFooter>
      </Form>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </Card>
  )
}

export default UpdateOrganizationpayrollsettingcard
