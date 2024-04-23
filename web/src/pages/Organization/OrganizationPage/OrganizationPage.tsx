import OrganizationCell from 'src/components/Organization/OrganizationCell'

type OrganizationPageProps = {
  OrganizationId: number
}

const OrganizationPage = ({ OrganizationId }: OrganizationPageProps) => {
  return <OrganizationCell OrganizationId={OrganizationId} />
}

export default OrganizationPage
