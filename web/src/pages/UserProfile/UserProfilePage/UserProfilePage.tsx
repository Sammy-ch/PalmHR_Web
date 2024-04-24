import UserProfileCell from 'src/components/UserProfile/UserProfileCell'

type UserProfilePageProps = {
  user_id: number
}

const UserProfilePage = ({ user_id }: UserProfilePageProps) => {
  return <UserProfileCell user_id={user_id} />
}

export default UserProfilePage
