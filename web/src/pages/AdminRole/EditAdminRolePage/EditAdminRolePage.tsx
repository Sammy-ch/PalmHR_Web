import EditAdminRoleCell from 'src/components/AdminRole/EditAdminRoleCell'

type AdminRolePageProps = {
  id: number
}

const EditAdminRolePage = ({ id }: AdminRolePageProps) => {
  return <EditAdminRoleCell id={id} />
}

export default EditAdminRolePage
