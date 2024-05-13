import EmployeeLeaveFormCell from 'src/components/EmployeeLeaveForm/EmployeeLeaveFormCell'

type EmployeeLeaveFormPageProps = {
  id: string
}

const EmployeeLeaveFormPage = ({ id }: EmployeeLeaveFormPageProps) => {
  return <EmployeeLeaveFormCell id={id} />
}

export default EmployeeLeaveFormPage
