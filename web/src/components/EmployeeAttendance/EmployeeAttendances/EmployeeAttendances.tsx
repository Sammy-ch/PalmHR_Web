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
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from 'web/src/components/ui/table'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeAttendance/EmployeeAttendancesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

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
    <div className="rw-segment rw-table-wrapper-responsive">
      <Table>
        <TableHeader>
          <TableRow className={'bg-black'}>
            <TableHead className="text-white">DP</TableHead>
            <TableHead className="text-white">Employee Name</TableHead>
            <TableHead className={'text-white'}>Position</TableHead>
            <TableHead className={'text-white'}>Checking Date</TableHead>
            <TableHead className="text-white">Check In</TableHead>
            <TableHead className="text-white">Check Out</TableHead>
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
              <TableCell>{employeeAttendance.checking_date}</TableCell>
              <TableCell>{employeeAttendance.checkin_time}</TableCell>
              <TableCell>{employeeAttendance.checkout_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default EmployeeAttendancesList
