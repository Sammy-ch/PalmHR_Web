import EditCheckingRequestQueueCell from 'src/components/CheckingRequestQueue/EditCheckingRequestQueueCell'

type CheckingRequestQueuePageProps = {
  id: string
}

const EditCheckingRequestQueuePage = ({
  id,
}: CheckingRequestQueuePageProps) => {
  return <EditCheckingRequestQueueCell id={id} />
}

export default EditCheckingRequestQueuePage
