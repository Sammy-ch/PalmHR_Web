import type {
  DeleteEmployeeAttendanceMutation,
  DeleteEmployeeAttendanceMutationVariables,
  FindEmployeeAttendances,
} from 'types/graphql'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'web/src/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'web/src/components/ui/table'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeAttendance/EmployeeAttendancesCell'

import PrintButton from '../../PrintButton/PrintButton'

const DELETE_EMPLOYEE_ATTENDANCE_MUTATION: TypedDocumentNode<
  DeleteEmployeeAttendanceMutation,
  DeleteEmployeeAttendanceMutationVariables
> = gql`
  mutation DeleteEmployeeAttendanceMutation($attendance_id: String!) {
    deleteEmployeeAttendance(attendance_id: $attendance_id) {
      attendance_id
    }
  }
`

const EmployeeAttendancesList = ({
  employeeAttendances,
}: FindEmployeeAttendances) => {
  const [deleteEmployeeAttendance] = useMutation(
    DELETE_EMPLOYEE_ATTENDANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendance deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (
    attendance_id: DeleteEmployeeAttendanceMutationVariables['attendance_id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete employeeAttendance ' +
          attendance_id +
          '?'
      )
    ) {
      deleteEmployeeAttendance({ variables: { attendance_id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive h-[16rem] overflow-scroll">
      <Table>
        <TableHeader>
          <TableRow className={'bg-black hover:bg-black'}>
            <TableHead className="text-white">DP</TableHead>
            <TableHead className="text-white">Employee Name</TableHead>
            <TableHead className={'text-white'}>Position</TableHead>
            <TableHead className={'text-white'}>Checking Date</TableHead>
            <TableHead className="text-white">Check In</TableHead>
            <TableHead className="text-white">Check Out</TableHead>
            <TableHead className="text-white">Working Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeeAttendances.map((employeeAttendance) => (
            <TableRow key={employeeAttendance.attendance_id}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={employeeAttendance.employee.profile_image}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">
                {employeeAttendance.employee.first_name}{' '}
                {employeeAttendance.employee.last_name}
              </TableCell>
              <TableCell>{employeeAttendance.employee.position}</TableCell>
              <TableCell>
                {' '}
                {new Date(
                  employeeAttendance.checking_date
                ).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {' '}
                {employeeAttendance.checkin_time
                  ? new Date(
                      employeeAttendance.checkin_time
                    ).toLocaleTimeString('en-US', { timeZone: 'GMT' })
                  : '--:--:--'}
              </TableCell>
              <TableCell>
                {' '}
                {employeeAttendance.checkout_time
                  ? new Date(
                      employeeAttendance.checkout_time
                    ).toLocaleTimeString('en-US', { timeZone: 'GMT' })
                  : 'NaN'}
              </TableCell>
              <TableCell className="">
                {employeeAttendance.checkout_time
                  ? calculateWorkingHours(
                      employeeAttendance.checkin_time,
                      employeeAttendance.checkout_time
                    )
                  : '--:--:--'}
                {}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <PrintButton employeeAttendances={employeeAttendances} />
      </div>
    </div>
  )
}

export default EmployeeAttendancesList
function verifyWorkingHours(workTime: number) {
  if (workTime > 8) {
    return 8
  } else if (workTime < 1) {
    return 0
  } else {
    return workTime
  }
}

function calculateWorkingHours(checkinTime: string, checkoutTime: string) {
  const checkinDate = new Date(checkinTime)
  const checkoutDate = new Date(checkoutTime)

  const diffInMilliseconds = checkoutDate.getTime() - checkinDate.getTime()
  const diffInMinutes = diffInMilliseconds / (1000 * 60)
  console.log('working time : ', verifyWorkingHours(diffInMinutes / 60))
  const diffInHours = verifyWorkingHours(diffInMinutes / 60)

  return diffInHours.toFixed(1)
}
