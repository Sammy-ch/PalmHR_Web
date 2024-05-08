import CheckingRequestCell from 'src/components/CheckingRequest/CheckingRequestCell'

type CheckingRequestPageProps = {
  id: string
}

const CheckingRequestPage = ({ id }: CheckingRequestPageProps) => {
  return <CheckingRequestCell id={id} />
}

export default CheckingRequestPage
