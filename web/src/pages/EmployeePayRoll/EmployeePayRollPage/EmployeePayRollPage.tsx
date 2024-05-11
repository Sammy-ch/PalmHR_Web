import EmployeePayRollCell from 'src/components/EmployeePayRoll/EmployeePayRollCell'

type EmployeePayRollPageProps = {
  id: string
}

const EmployeePayRollPage = ({ id }: EmployeePayRollPageProps) => {
  return <EmployeePayRollCell id={id} />
}

export default EmployeePayRollPage
