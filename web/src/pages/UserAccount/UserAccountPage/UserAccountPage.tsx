import UserAccountCell from 'src/components/UserAccount/UserAccountCell'

type UserAccountPageProps = {
  id: string
}

const UserAccountPage = ({ id }: UserAccountPageProps) => {
  return <UserAccountCell id={id} />
}

export default UserAccountPage
