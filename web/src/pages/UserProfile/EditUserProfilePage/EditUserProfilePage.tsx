import EditUserProfileCell from 'src/components/UserProfile/EditUserProfileCell'

type UserProfilePageProps = {
  user_id: string
}

const EditUserProfilePage = ({ user_id }: UserProfilePageProps) => {
  return <EditUserProfileCell user_id={user_id} />
}

export default EditUserProfilePage
