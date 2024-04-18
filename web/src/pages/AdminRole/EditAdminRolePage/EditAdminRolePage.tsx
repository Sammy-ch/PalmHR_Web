import EditAdminRoleCell from 'src/components/AdminRole/EditAdminRoleCell'

type AdminRolePageProps = {
  id: string
}

const EditAdminRolePage = ({ id }: AdminRolePageProps) => {
  return <EditAdminRoleCell id={id} />
}

export default EditAdminRolePage
