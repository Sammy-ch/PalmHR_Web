import EmployeeAttendanceCell from 'src/components/EmployeeAttendance/EmployeeAttendanceCell'

type EmployeeAttendancePageProps = {
  attendance_id: string
}

const EmployeeAttendancePage = ({
  attendance_id,
}: EmployeeAttendancePageProps) => {
  return <EmployeeAttendanceCell attendance_id={attendance_id} />
}

export default EmployeeAttendancePage
