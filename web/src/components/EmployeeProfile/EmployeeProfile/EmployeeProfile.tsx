import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'
import { StepBack } from 'lucide-react'
import type {
  DeleteEmployeeProfileMutation,
  DeleteEmployeeProfileMutationVariables,
  FindEmployeeProfileByProfileId,
} from 'types/graphql'
import {
  AvatarImage,
  AvatarFallback,
  Avatar,
} from 'web/src/components/ui/avatar'
import { Button } from 'web/src/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from 'web/src/components/ui/card'

import { routes, navigate, Link } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_EMPLOYEE_PROFILE_MUTATION: TypedDocumentNode<
  DeleteEmployeeProfileMutation,
  DeleteEmployeeProfileMutationVariables
> = gql`
  mutation DeleteEmployeeProfileMutation($profile_id: String!) {
    deleteEmployeeProfile(profile_id: $profile_id) {
      profile_id
    }
  }
`

interface Props {
  employeeProfile: NonNullable<
    FindEmployeeProfileByProfileId['employeeProfile']
  >
}

const EmployeeProfile = ({ employeeProfile }: Props) => {
  const [deleteEmployeeProfile] = useMutation(
    DELETE_EMPLOYEE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeProfile deleted')
        navigate(routes.employeeProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    profile_id: DeleteEmployeeProfileMutationVariables['profile_id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete employeeProfile ' + profile_id + '?'
      )
    ) {
      deleteEmployeeProfile({ variables: { profile_id } })
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between  bg-[#000000] px-6 py-4 text-white">
          <div className="flex items-center space-x-4">
            <Link
              to={routes.performance()}
              className="flex items-center justify-center gap-2"
            >
              <Button size="icon" variant="outline" className="bg-black">
                <StepBack />
              </Button>
              <span>Return</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold">
                {employeeProfile.first_name} {employeeProfile.last_name}
              </h1>
              <p className="text-gray-400">{employeeProfile.position}</p>
            </div>
            <div className="flex-shrink-0">
              <Avatar>
                <AvatarImage
                  alt="Profile Image"
                  src={employeeProfile.profile_image}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
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
                <CardDescription>
                  Vacation days taken this month
                </CardDescription>
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
              <div className="grid grid-cols-2 gap-6">
                <BarChart className="aspect-[4/3]" />
                <PieChart className="aspect-[4/3]" />
              </div>
              <div className="grid  gap-6">
                <LineChart className="aspect-[4/3]" />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}

export default EmployeeProfile

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

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: 'Jan', value: 111 },
          { id: 'Feb', value: 157 },
          { id: 'Mar', value: 129 },
          { id: 'Apr', value: 150 },
          { id: 'May', value: 119 },
          { id: 'Jun', value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={'#ffffff'}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={'#ffffff'}
        arcLabelsRadiusOffset={0.65}
        colors={['#2563eb']}
        theme={{
          labels: {
            text: {
              fontSize: '18px',
            },
          },
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
        }}
        role="application"
      />
    </div>
  )
}
