import { format } from 'date-fns/format'
import { getMilliseconds } from 'date-fns/getMilliseconds'

import { Form, Label } from '@redwoodjs/forms'

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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectItem,
} from '../ui/select'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '../ui/table'

import type { FindEmployeePayRolls } from '@/types/graphql'
const Payrolls = ({ employeePayRolls }: FindEmployeePayRolls) => {
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
                {employeePayRolls.map((employeePayRoll) => (
                  <TableRow key={employeePayRoll.id}>
                    <TableCell>
                      {employeePayRoll.employee.first_name +
                        ' ' +
                        employeePayRoll.employee.last_name}
                    </TableCell>
                    <TableCell>
                      {format(employeePayRoll.pay_period_start, 'MMMM do')} -{' '}
                      {format(employeePayRoll.pay_period_end, 'MMMM do')}
                    </TableCell>
                    <TableCell>
                      {getMilliseconds(employeePayRoll.report.TotalWorkhours)}
                    </TableCell>
                    <TableCell>
                      Fbu{' '}
                      {employeePayRoll.net_salary && employeePayRoll.net_salary}
                    </TableCell>
                  </TableRow>
                ))}
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
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue
                          className="text-black"
                          placeholder="Select a period"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Pay Period</SelectLabel>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectGroup>
                      </SelectContent>
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
                      type="date"
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
                    <Input defaultValue="0.25" id="tax-rate" name="tax-rate" />
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
