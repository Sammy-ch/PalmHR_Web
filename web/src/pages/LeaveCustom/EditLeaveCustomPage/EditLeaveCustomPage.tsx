import EditLeaveCustomCell from 'src/components/LeaveCustom/EditLeaveCustomCell'

type LeaveCustomPageProps = {
  id: string
}

const EditLeaveCustomPage = ({ id }: LeaveCustomPageProps) => {
  return <EditLeaveCustomCell id={id} />
}

export default EditLeaveCustomPage
