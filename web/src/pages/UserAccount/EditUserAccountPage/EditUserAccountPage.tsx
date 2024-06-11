import EditUserAccountCell from 'src/components/UserAccount/EditUserAccountCell'

type UserAccountPageProps = {
  id: string
}

const EditUserAccountPage = ({ id }: UserAccountPageProps) => {
  return <EditUserAccountCell id={id} />
}

export default EditUserAccountPage
