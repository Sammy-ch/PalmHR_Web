import { Button } from 'web/src/components/ui/button'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface EmployeeProps {
  fullName: string
  profileDp: string
  position: string
}

const EmployeeProfileCard = ({
  profileDp,
  position,
  fullName,
}: EmployeeProps) => {
  return (
    <div className="flex  h-80 w-72 flex-col justify-between rounded-lg bg-white shadow-md dark:bg-gray-800 ">
      <div className="relative  flex flex-col items-center overflow-hidden rounded-t-lg">
        <Avatar className="h-[120px] w-[120px]">
          <AvatarImage height={500} width={500} src={profileDp} alt="@shadcn" className='object-cover object-top' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* <img
          alt={fullName}
          className="h-full w-full object-cover object-top"
          height={300}
          src={profileDp}
          style={{
            aspectRatio: '400/300',
            objectFit: 'cover',
          }}
          width={400}
        /> */}
        <span className="absolute bottom-2 right-2 inline-block h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{fullName}</h3>
        <p className="mb-2 text-gray-500 dark:text-gray-400">{position}</p>
        <div className="flex flex-col gap-2 ">
          <Button variant="default">Check Performance </Button>
          <Button variant="outline">Remove Employee</Button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeProfileCard
