import UserOutlined from '@ant-design/icons'
import { Avatar } from 'antd'
import { Bell } from 'lucide-react'

import logo from './MD.jpg'

const DashboardHeader = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between rounded-[5px]">
      <h1 className="text-[30px] font-bold ">Overview</h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Bell />
          <Avatar size={45} icon={<UserOutlined />} src={logo} />
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
