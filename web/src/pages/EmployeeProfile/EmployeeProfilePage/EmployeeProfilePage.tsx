import EmployeeProfileCell from 'src/components/EmployeeProfile/EmployeeProfileCell'

type EmployeeProfilePageProps = {
  profile_id: string
}

const EmployeeProfilePage = ({ profile_id }: EmployeeProfilePageProps) => {
  return <EmployeeProfileCell profile_id={profile_id} />
}

export default EmployeeProfilePage
