import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
import type { FindEmployeeProfileByProfileId } from 'types/graphql'

import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card'

interface Props {
  employeeProfile: NonNullable<
    FindEmployeeProfileByProfileId['employeeProfile']
  >
}

const EmployeeStatCard = ({ employeeProfile }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between bg-[#1E293B] px-6 py-4 text-white">
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
          <Button variant="outline" size="icon">
            <GaugeIcon className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="outline" size="icon">
            <BellIcon className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>
      <main className="grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <BarChart className="aspect-[4/3]" />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <LineChart className="aspect-[4/3]" />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default EmployeeStatCard

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: 'Jan', count: 111 },
          { name: 'Feb', count: 157 },
          { name: 'Mar', count: 129 },
          { name: 'Apr', count: 150 },
          { name: 'May', count: 119 },
          { name: 'Jun', count: 72 },
        ]}
        keys={['count']}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={['#2563eb']}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
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

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 'Desktop',
            data: [
              { x: 'Jan', y: 43 },
              { x: 'Feb', y: 137 },
              { x: 'Mar', y: 61 },
              { x: 'Apr', y: 145 },
              { x: 'May', y: 26 },
              { x: 'Jun', y: 154 },
            ],
          },
          {
            id: 'Mobile',
            data: [
              { x: 'Jan', y: 60 },
              { x: 'Feb', y: 48 },
              { x: 'Mar', y: 177 },
              { x: 'Apr', y: 78 },
              { x: 'May', y: 96 },
              { x: 'Jun', y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: 'point',
        }}
        yScale={{
          type: 'linear',
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={['#2563eb', '#e11d48']}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
