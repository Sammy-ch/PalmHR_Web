import { CircleUserRound } from 'lucide-react'
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

import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'
import AttendanceRadialBarChart from 'src/components/AttendanceRadialBarChart/AttendanceRadialBarChart'

import AttendanceBarChart from '../../AttendanceBarChart/AttendanceBarChart'

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
  console.log(employeeProfile.AttendanceReport)

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between bg-[#1E293B] px-6 py-4 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Avatar>
                <AvatarImage alt="DP" src={employeeProfile.profile_image} />
                <AvatarFallback>
                  <CircleUserRound color={'black'} />
                </AvatarFallback>
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
            <Button
              type="button"
              variant={'destructive'}
              onClick={() => onDeleteClick(employeeProfile.profile_id)}
              className={'text-md font-medium'}
            >
              Delete Employee Profile
            </Button>
          </div>
        </header>
        <main className="grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Work Hours</CardTitle>
                <CardDescription>
                  Total Work Hours for this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {employeeProfile.AttendanceReport.TotalWorkhours}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>On-Time Arrivals</CardTitle>
                <CardDescription>
                  On Time arrival rate this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {/*<ClockIcon className="h-6 w-6 fill-primary" />*/}
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
                <CardTitle>Absenteeism Rate</CardTitle>
                <CardDescription>Absenteeism rate this month</CardDescription>
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
                  Late Attendance rate this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
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
              <div className="grid grid-rows-2 gap-6">
                <AttendanceBarChart className="aspect-[4/3]" />
                <AttendanceRadialBarChart className="aspect-[4/2]" />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      <nav className="rw-button-group"></nav>
    </>
  )
}

export default EmployeeProfile
