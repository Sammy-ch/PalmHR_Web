import EditOrganizationCell from 'src/components/Organization/EditOrganizationCell'

type OrganizationPageProps = {
  OrganizationId: string
}

const EditOrganizationPage = ({ OrganizationId }: OrganizationPageProps) => {
  return <EditOrganizationCell OrganizationId={OrganizationId} />
}

export default EditOrganizationPage
