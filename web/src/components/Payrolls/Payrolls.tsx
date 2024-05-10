import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

import { Button } from '../ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '../ui/card'
import { Input } from '../ui/input'
import { Select } from '../ui/select'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '../ui/table'
const Payrolls = () => {
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between bg-gray-100 px-6 py-4 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Payroll</h1>
        <Button size="sm">Generate Payroll Report</Button>
      </header>
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-medium">Payroll Summary</h2>
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Pay Period</TableHead>
                  <TableHead>Hours Worked</TableHead>
                  <TableHead>Total Pay</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>June 1 - June 15</TableCell>
                  <TableCell>168</TableCell>
                  <TableCell>Fbu 1,205,468.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>June 1 - June 15</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell>Fbu 354,463.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>June 1 - June 15</TableCell>
                  <TableCell>117</TableCell>
                  <TableCell>Fbu 765,136.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sarah Lee</TableCell>
                  <TableCell>June 1 - June 15</TableCell>
                  <TableCell>162</TableCell>
                  <TableCell>Fbu 468,648.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Brown</TableCell>
                  <TableCell>June 1 - June 15</TableCell>
                  <TableCell>90</TableCell>
                  <TableCell>Fbu 654,845.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-medium">Payroll Settings</h2>
          <Form>
            <Card>
              <CardHeader>
                <CardTitle>Payroll Settings</CardTitle>
                <CardDescription>
                  Manage your payroll settings here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label name="pay-period" htmlFor="pay-period">
                      Pay Period
                    </Label>
                    <Select defaultValue="biweekly">
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-Weekly</option>
                      <option value="monthly">Monthly</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label name="pay-date" htmlFor="pay-date">
                      Pay Date
                    </Label>
                    <Input
                      defaultValue="2023-06-15"
                      id="pay-date"
                      name="pay-date"
                      type='date'
                    />
                  </div>
                  <div className="space-y-2">
                    <Label name="overtime-rate" htmlFor="overtime-rate">
                      Overtime Rate
                    </Label>
                    <Input
                      defaultValue="1.5"
                      id="overtime-rate"
                      name="overtime-rate"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label name="tax-rate" htmlFor="tax-rate">
                      Tax Rate
                    </Label>
                    <Input
                      defaultValue="0.25"
                      id="tax-rate"
                      name="tax-rate"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default Payrolls
