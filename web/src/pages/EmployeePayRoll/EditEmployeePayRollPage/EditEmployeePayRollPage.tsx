import EditEmployeePayRollCell from 'src/components/EmployeePayRoll/EditEmployeePayRollCell'

type EmployeePayRollPageProps = {
  id: string
}

const EditEmployeePayRollPage = ({ id }: EmployeePayRollPageProps) => {
  return <EditEmployeePayRollCell id={id} />
}

export default EditEmployeePayRollPage
