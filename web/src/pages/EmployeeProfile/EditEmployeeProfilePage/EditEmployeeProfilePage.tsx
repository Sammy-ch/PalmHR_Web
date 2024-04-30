import EditEmployeeProfileCell from 'src/components/EmployeeProfile/EditEmployeeProfileCell'

type EmployeeProfilePageProps = {
  profile_id: string
}

const EditEmployeeProfilePage = ({ profile_id }: EmployeeProfilePageProps) => {
  return <EditEmployeeProfileCell profile_id={profile_id} />
}

export default EditEmployeeProfilePage
