import AdminCell from 'src/components/Admin/AdminCell'

type AdminPageProps = {
  id: number
}

const AdminPage = ({ id }: AdminPageProps) => {
  return <AdminCell id={id} />
}

export default AdminPage
