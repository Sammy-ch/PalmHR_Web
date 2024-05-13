import EmployeeAttendanceReportCell from 'src/components/EmployeeAttendanceReport/EmployeeAttendanceReportCell'

type EmployeeAttendanceReportPageProps = {
  id: string
}

const EmployeeAttendanceReportPage = ({
  id,
}: EmployeeAttendanceReportPageProps) => {
  return <EmployeeAttendanceReportCell id={id} />
}

export default EmployeeAttendanceReportPage
