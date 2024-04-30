import LeaveCustomCell from 'src/components/LeaveCustom/LeaveCustomCell'

type LeaveCustomPageProps = {
  id: string
}

const LeaveCustomPage = ({ id }: LeaveCustomPageProps) => {
  return <LeaveCustomCell id={id} />
}

export default LeaveCustomPage
