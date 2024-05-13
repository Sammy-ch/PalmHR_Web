import AdminRoleCell from 'src/components/AdminRole/AdminRoleCell'

type AdminRolePageProps = {
  id: string
}

const AdminRolePage = ({ id }: AdminRolePageProps) => {
  return <AdminRoleCell id={id} />
}

export default AdminRolePage
