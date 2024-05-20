import EditPayRollSettingCell from 'src/components/PayRollSetting/EditPayRollSettingCell'

type PayRollSettingPageProps = {
  id: string
}

const EditPayRollSettingPage = ({ id }: PayRollSettingPageProps) => {
  return <EditPayRollSettingCell id={id} />
}

export default EditPayRollSettingPage
