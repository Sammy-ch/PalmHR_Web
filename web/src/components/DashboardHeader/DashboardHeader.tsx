import { Avatar } from 'primereact/avatar'
const DashboardHeader = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between rounded-[5px] bg-[#111010] px-5">
      <h1 className="text-[25px] text-white">Dashboard</h1>
      <Avatar
        label="M"
        size="xlarge"
        shape="circle"
        style={{ backgroundColor: 'green', color: '#ffffff' }}
      />
    </div>
  )
}

export default DashboardHeader
