import UserOutlined from '@ant-design/icons'
import { Avatar } from 'antd'
import { Bell } from 'lucide-react'
import { SquareUserRound } from 'lucide-react'
import NotificationCard from 'web/src/components/NotificationCard/NotificationCard'
import { Button } from 'web/src/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'web/src/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'web/src/components/ui/dropdown-menu'

import { useRouteName } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import CheckingRequestsCell from '../CheckingRequest/CheckingRequestsCell'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const DashboardHeader = () => {
  const { userMetadata } = useAuth()
  const routeName = useRouteName()

  return (
    <div className="header-h1 flex h-[80px] w-full items-center justify-between px-5">
      <h1 className="text-3xl font-semibold ">
        {capitalizeFirstLetter(routeName)}
      </h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Drawer>
            <DrawerTrigger>
              <SquareUserRound />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  {' '}
                  <h1 className="mb-6 text-3xl font-bold">
                    Employee Check-In/Check-Out Requests
                  </h1>
                </DrawerTitle>
              </DrawerHeader>
              <CheckingRequestsCell />
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Bell />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <NotificationCard />
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar
                size={45}
                icon={<UserOutlined />}
                src={userMetadata.picture}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Admins</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
