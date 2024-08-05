import EditOrganizationPayrollSettingCell from 'src/components/OrganizationPayrollSetting/EditOrganizationPayrollSettingCell'

type OrganizationPayrollSettingPageProps = {
  id: string
}

const EditOrganizationPayrollSettingPage = ({
  id,
}: OrganizationPayrollSettingPageProps) => {
  return <EditOrganizationPayrollSettingCell id={id} />
}

export default EditOrganizationPayrollSettingPage
