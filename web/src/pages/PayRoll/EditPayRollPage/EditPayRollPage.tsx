import EditPayRollCell from 'src/components/PayRoll/EditPayRollCell'

type PayRollPageProps = {
  id: string
}

const EditPayRollPage = ({ id }: PayRollPageProps) => {
  return <EditPayRollCell id={id} />
}

export default EditPayRollPage
