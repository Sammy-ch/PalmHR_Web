import OrganizationPayrollSettingCell from 'src/components/OrganizationPayrollSetting/OrganizationPayrollSettingCell'

type OrganizationPayrollSettingPageProps = {
  id: string
}

const OrganizationPayrollSettingPage = ({
  id,
}: OrganizationPayrollSettingPageProps) => {
  return <OrganizationPayrollSettingCell id={id} />
}

export default OrganizationPayrollSettingPage
