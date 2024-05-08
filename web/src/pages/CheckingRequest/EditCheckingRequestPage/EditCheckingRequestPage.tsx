import EditCheckingRequestCell from 'src/components/CheckingRequest/EditCheckingRequestCell'

type CheckingRequestPageProps = {
  id: string
}

const EditCheckingRequestPage = ({ id }: CheckingRequestPageProps) => {
  return <EditCheckingRequestCell id={id} />
}

export default EditCheckingRequestPage
