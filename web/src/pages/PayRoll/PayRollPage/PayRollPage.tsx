import PayRollCell from 'src/components/PayRoll/PayRollCell'

type PayRollPageProps = {
  id: string
}

const PayRollPage = ({ id }: PayRollPageProps) => {
  return <PayRollCell id={id} />
}

export default PayRollPage
