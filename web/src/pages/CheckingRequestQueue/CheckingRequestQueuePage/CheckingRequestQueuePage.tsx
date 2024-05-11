import CheckingRequestQueueCell from 'src/components/CheckingRequestQueue/CheckingRequestQueueCell'

type CheckingRequestQueuePageProps = {
  id: string
}

const CheckingRequestQueuePage = ({ id }: CheckingRequestQueuePageProps) => {
  return <CheckingRequestQueueCell id={id} />
}

export default CheckingRequestQueuePage
