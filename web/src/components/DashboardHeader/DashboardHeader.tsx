import UserOutlined from '@ant-design/icons'
import { Avatar } from 'antd'
import { Bell } from 'lucide-react'

import logo from './MD.jpg'

const DashboardHeader = () => {
  return (
    <div className="header-h1 flex h-[80px] w-full items-center justify-between px-5">
      <h1 className="text-3xl font-semibold ">Dashboard</h1>
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
