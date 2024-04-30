import EditEmployeeAttendanceCell from 'src/components/EmployeeAttendance/EditEmployeeAttendanceCell'

type EmployeeAttendancePageProps = {
  attendance_id: string
}

const EditEmployeeAttendancePage = ({
  attendance_id,
}: EmployeeAttendancePageProps) => {
  return <EditEmployeeAttendanceCell attendance_id={attendance_id} />
}

export default EditEmployeeAttendancePage
