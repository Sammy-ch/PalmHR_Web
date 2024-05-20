import PayRollSettingCell from 'src/components/PayRollSetting/PayRollSettingCell'

type PayRollSettingPageProps = {
  id: string
}

const PayRollSettingPage = ({ id }: PayRollSettingPageProps) => {
  return <PayRollSettingCell id={id} />
}

export default PayRollSettingPage
