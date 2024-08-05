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

const EmployeePayrollCard = () => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Payroll Details</CardTitle>
        <CardDescription>
          Review and update your payroll information.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pay-period-start">Pay Period Start</Label>
            <Input id="pay-period-start" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pay-period-end">Pay Period End</Label>
            <Input id="pay-period-end" type="date" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="base-salary">Base Salary</Label>
            <Input id="base-salary" type="number" placeholder="$0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="net-salary">Net Salary</Label>
            <Input id="net-salary" type="number" placeholder="$0.00" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gross-salary">Gross Salary</Label>
            <Input id="gross-salary" type="number" placeholder="$0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bonuses">Bonuses</Label>
            <Input id="bonuses" type="number" placeholder="$0.00" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="labor-cost">Labor Cost</Label>
            <Input id="labor-cost" type="number" placeholder="$0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ipr">IPR (Individual Performance Rating)</Label>
            <Input id="ipr" type="number" placeholder="0.0" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}

export default EmployeePayrollCard
