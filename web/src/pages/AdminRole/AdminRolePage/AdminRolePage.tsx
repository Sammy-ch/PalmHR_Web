import AdminRoleCell from 'src/components/AdminRole/AdminRoleCell'

type AdminRolePageProps = {
  id: number
}

const AdminRolePage = ({ id }: AdminRolePageProps) => {
  return <AdminRoleCell id={id} />
}

export default AdminRolePage
