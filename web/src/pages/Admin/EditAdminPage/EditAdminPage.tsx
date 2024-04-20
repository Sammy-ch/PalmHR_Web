import EditAdminCell from 'src/components/Admin/EditAdminCell'

type AdminPageProps = {
  id: number
}

const EditAdminPage = ({ id }: AdminPageProps) => {
  return <EditAdminCell id={id} />
}

export default EditAdminPage
