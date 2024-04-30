import UserOutlined from '@ant-design/icons'
import { Avatar } from 'antd'
import { Bell } from 'lucide-react'

import { useRouteName } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const DashboardHeader = () => {
  const { userMetadata } = useAuth()
  console.log(userMetadata)
  const routeName = useRouteName()

  return (
    <div className="header-h1 flex h-[80px] w-full items-center justify-between px-5">
      <h1 className="text-3xl font-semibold ">
        {capitalizeFirstLetter(routeName)}
      </h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Bell />
          <Avatar
            size={45}
            icon={<UserOutlined />}
            src={userMetadata.picture}
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
