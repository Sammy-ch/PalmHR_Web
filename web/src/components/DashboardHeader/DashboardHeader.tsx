import UserOutlined from '@ant-design/icons'
import { Avatar } from 'antd'
import { Dropdown, message } from 'antd'
import type { MenuProps } from 'antd'
import { Bell } from 'lucide-react'

import logo from './MD.jpg'

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.')
  console.log('click', e)
}

const items: MenuProps['items'] = [
  {
    label: 'Profile',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Settings',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: 'Delete account',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
  },
]

const menuProps = {
  items,
  onClick: handleMenuClick,
}

const DashboardHeader = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between rounded-[5px]">
      <h1 className="text-[30px] font-bold ">Overview</h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Bell />
          <Avatar size={45} icon={<UserOutlined />} src={logo} />
        </div>
        <Dropdown.Button menu={menuProps}>Account</Dropdown.Button>
      </div>
    </div>
  )
}

export default DashboardHeader
