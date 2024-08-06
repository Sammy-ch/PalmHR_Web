import type {
  EditEmployeePayRollById,
  UpdateEmployeePayRollInput,
} from 'types/graphql'

import { Form } from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

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
import { Label } from '../ui/label'

type FormEmployeePayRoll = NonNullable<
  EditEmployeePayRollById['employeePayRoll']
>

interface EmployeePayRollFormProps {
  employeePayRoll?: EditEmployeePayRollById['employeePayRoll']
  onSave: (
    data: UpdateEmployeePayRollInput,
    id?: FormEmployeePayRoll['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CREATE_EMPLOYEE_PAYROLL = gql`
  mutation CreateEmployeePayRollMutation($input: CreateEmployeePayRollInput!) {
    createEmployeePayRoll(input: $input) {
      id
    }
  }
`

const EmployeePayrollCard = ({ id }) => {
  const [createEmployeePayRoll, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_PAYROLL
  )

  const onSubmit = (data: EmployeePayRollFormProps) => {
    const inputData = { ...data, id }

    createEmployeePayRoll({ variables: { input: inputData } })
      .then(() => {
        console.log('Employee payroll created successfully')
      })
      .catch((err) => {
        console.error('Error creating employee payroll:', err)
      })
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Payroll Details</CardTitle>
        <CardDescription>
          Review and update your payroll information.
        </CardDescription>
      </CardHeader>
      <Form onSubmit={onSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="base-salary">Base Salary</Label>
              <Input
                name="base_salary"
                id="base-salary"
                type="number"
                placeholder="fbu 0.00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="net-salary">Net Salary</Label>
              <Input
                name="net_salary"
                id="net-salary"
                type="number"
                placeholder="fbu 0.00"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gross-salary">Gross Salary</Label>
              <Input
                name="gross_salary"
                id="gross-salary"
                type="number"
                placeholder="fbu 0.00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bonuses">Bonuses</Label>
              <Input
                name="bonuses"
                id="bonuses"
                type="number"
                placeholder="fbu 0.00"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="labor-cost">Labor Cost</Label>
              <Input
                name="labor_cost"
                id="labor-cost"
                type="number"
                placeholder="fbu 0.00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ipr">IPR (Individual Performance Rating)</Label>
              <Input name="IPR" id="ipr" type="number" placeholder="0.0" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </CardFooter>
      </Form>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </Card>
  )
}

export default EmployeePayrollCard
