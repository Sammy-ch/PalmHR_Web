import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

import type { FindEmployeeAttendances } from '@/types/graphql'

export default function AttendanceActivityTable({
  employeeAttendances,
}: FindEmployeeAttendances) {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Attendance Stat</CardTitle>
        <CardDescription>Recent attendance activity</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee Name</TableHead>
              <TableHead className="hidden sm:table-cell">Position</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Check In</TableHead>
              <TableHead className="text-right">Check Out</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeeAttendances.map((employeeAttendance) => (
              <TableRow
                className="bg-accent"
                key={employeeAttendance.attendance_id}
              >
                <TableCell>
                  <div className="font-medium">
                    {employeeAttendance.employee.first_name}{' '}
                    {employeeAttendance.employee.last_name}
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {employeeAttendance.employee.email}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {employeeAttendance.employee.position}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {employeeAttendance.presence_tag}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(
                    employeeAttendance.checking_date
                  ).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {new Date(employeeAttendance.checkin_time).toLocaleTimeString(
                    'en-US',
                    { timeZone: 'GMT' }
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {new Date(
                    employeeAttendance.checkout_time
                  ).toLocaleTimeString('en-US', { timeZone: 'GMT' })}{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
