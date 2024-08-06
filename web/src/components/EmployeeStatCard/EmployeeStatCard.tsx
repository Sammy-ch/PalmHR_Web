import { useState } from 'react'

import { CreditCard, Settings, User, Trash } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import type { FindEmployeeProfileByProfileId } from 'types/graphql'

import EmployeePayrollCard from '../EmployeePayrollCard/EmployeePayrollCard'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card'
import { ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { ChartConfig, ChartContainer } from '../ui/chart'
import { ChartLegend, ChartLegendContent } from '../ui/chart'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface Props {
  employeeProfile: NonNullable<
    FindEmployeeProfileByProfileId['employeeProfile']
  >
}

const EmployeeStatCard = ({ employeeProfile }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handlePayrollSettingsClick = () => {
    setIsDialogOpen(true)
  }
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between rounded-md bg-black px-6 py-4 text-white">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Avatar>
              <AvatarImage src={employeeProfile.profile_image} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {employeeProfile.first_name} {employeeProfile.last_name}
            </h1>
            <p className="text-gray-400">{employeeProfile.position}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <EmployeeProfileDropdownMenu
            onPayrollSettingsClick={handlePayrollSettingsClick}
          />
        </div>
      </header>
      <main className="grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total Attendance</CardTitle>
              <CardDescription>
                Total employee attendance for the month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">92%</div>
              <p className="text-gray-500 dark:text-gray-400">
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>On-Time Arrivals</CardTitle>
              <CardDescription>
                Percentage of employees arriving on time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6 fill-primary" />
                <span className="text-4xl font-bold">87%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Overtime Hours</CardTitle>
              <CardDescription>
                Total overtime hours worked this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">142 hrs</div>
              <p className="text-gray-500 dark:text-gray-400">
                +10% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sick Leave</CardTitle>
              <CardDescription>Sick leave taken this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">28 days</div>
              <p className="text-gray-500 dark:text-gray-400">
                -3% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vacation Days</CardTitle>
              <CardDescription>Vacation days taken this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">65 days</div>
              <p className="text-gray-500 dark:text-gray-400">
                +2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Late Arrivals</CardTitle>
              <CardDescription>
                Percentage of employees arriving late
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6 fill-primary" />
                <span className="text-4xl font-bold">13%</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Detailed attendance analytics</CardDescription>
          </CardHeader>
          <CardContent className="grid h-full gap-6">
            <div className="grid grid-cols-1 gap-6">
              <EmployeeAttendanceBarChart className="aspect-[4/3]" />
            </div>
          </CardContent>
        </Card>
      </main>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payroll Settings</DialogTitle>
          </DialogHeader>
          <EmployeePayrollCard id={employeeProfile.profile_id} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EmployeeStatCard

function EmployeeAttendanceBarChart(props: any) {
  const chartConfig = {
    OnTime: {
      label: 'OnTime',
      color: '#2563eb',
    },
    Late: {
      label: 'Late',
      color: '#60a5fa',
    },
  } satisfies ChartConfig
  const chartData = [
    { month: 'January', OnTime: 186, Late: 80 },
    { month: 'February', OnTime: 305, Late: 200 },
    { month: 'March', OnTime: 237, Late: 120 },
    { month: 'April', OnTime: 73, Late: 190 },
    { month: 'May', OnTime: 209, Late: 130 },
    { month: 'June', OnTime: 214, Late: 140 },
  ]
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full"
      {...props}
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="OnTime" fill="var(--color-OnTime)" radius={4} />
        <Bar dataKey="Late" fill="var(--color-Late)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function EmployeeProfileDropdownMenu({ onPayrollSettingsClick }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-black">
          Profile
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Employee Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Generate Report</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Generate Payroll</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={onPayrollSettingsClick}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Payroll Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Trash color="red" className="mr-2 h-4 w-4" />
          <span className="text-red-500">Delete Employee</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
