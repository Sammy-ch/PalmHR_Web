import EditEmployeeAttendanceReportCell from 'src/components/EmployeeAttendanceReport/EditEmployeeAttendanceReportCell'

type EmployeeAttendanceReportPageProps = {
  id: string
}

const EditEmployeeAttendanceReportPage = ({
  id,
}: EmployeeAttendanceReportPageProps) => {
  return <EditEmployeeAttendanceReportCell id={id} />
}

export default EditEmployeeAttendanceReportPage
