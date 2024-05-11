import EditEmployeeLeaveFormCell from 'src/components/EmployeeLeaveForm/EditEmployeeLeaveFormCell'

type EmployeeLeaveFormPageProps = {
  id: string
}

const EditEmployeeLeaveFormPage = ({ id }: EmployeeLeaveFormPageProps) => {
  return <EditEmployeeLeaveFormCell id={id} />
}

export default EditEmployeeLeaveFormPage
