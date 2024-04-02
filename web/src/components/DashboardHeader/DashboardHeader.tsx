import { Bell } from 'lucide-react'
import { Avatar } from 'primereact/avatar'

import logo from './MD.jpg'
const DashboardHeader = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between rounded-[5px]">
      <h1 className="text-[30px] font-bold ">Overview</h1>
      <div className='flex items-center gap-5'>
        <Avatar image={logo} size="normal" shape="circle" />
        <Bell />
      </div>
    </div>
  )
}

export default DashboardHeader
