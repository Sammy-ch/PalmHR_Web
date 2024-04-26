import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface EmployeeLeaveProps {
  fullName: string
  profileDp: string
  position: string
  leaveDuration: string
  leaveCount: number
  LeaveType: string
  icon: React.ElementType
}

const EmployeeLeaveCard = ({
  profileDp,
  fullName,
  position,
  leaveCount,
  leaveDuration,
  LeaveType,
  icon: Icon,
}: EmployeeLeaveProps) => {
  return (
    <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950 dark:text-gray-50">
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-[50px] w-[50px]">
              <AvatarImage
                height={500}
                width={500}
                src={profileDp}
                alt="@shadcn"
                className="object-cover object-top"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>{' '}
            <div>
              <h3 className="font-semibold">{fullName}</h3>
              <p className="text-gray-500 dark:text-gray-400">{position}</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-2xl font-semibold">{leaveDuration}</h4>
            <p className="text-gray-500 dark:text-gray-400">Days</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-green-500" />
            <p className="text-green-500">{LeaveType}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            {leaveCount} Leaves
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeLeaveCard
