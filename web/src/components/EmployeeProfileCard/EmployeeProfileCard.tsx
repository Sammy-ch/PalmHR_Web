import { Button } from 'web/src/components/ui/button'

import { Link, routes } from '@redwoodjs/router'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import { FindEmployeeProfiles } from '@/types/graphql'

const EmployeeProfileCard = ({ employeeProfiles }: FindEmployeeProfiles) => {
  return (
    <>
      {employeeProfiles.map((employeeProfile) => (
        <div
          className="p flex h-80 w-72 flex-col justify-between rounded-lg bg-white shadow-md dark:bg-gray-800 "
          key={employeeProfile.profile_id}
        >
          <div className="relative  flex flex-col items-center overflow-hidden rounded-t-lg">
            <Avatar className="h-[100px] w-[100px]">
              <AvatarImage
                height={500}
                width={500}
                src={employeeProfile.profile_image}
                alt="@shadcn"
                className="object-cover object-top"
              />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>

            <span className="absolute bottom-2 right-2 inline-block h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h3 className="mb-2 text-lg font-semibold">
              {employeeProfile.first_name} {employeeProfile.last_name}
            </h3>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {employeeProfile.position}
            </p>
            <div className="flex flex-col gap-2 ">
              <Button variant="default">
                <Link
                  to={routes.employeeProfile({
                    profile_id: employeeProfile.profile_id,
                  })}
                  title={
                    'Show employeeProfile ' +
                    employeeProfile.profile_id +
                    ' detail'
                  }
                  className="rw-button rw-button-small"
                >
                  Check Performance
                </Link>
              </Button>
              <Button variant="outline">Remove Employee</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default EmployeeProfileCard
