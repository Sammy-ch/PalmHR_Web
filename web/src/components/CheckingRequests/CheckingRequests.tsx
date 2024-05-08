import {
  AvatarImage,
  AvatarFallback,
  Avatar,
} from 'web/src/components/ui/avatar'
import { Badge } from 'web/src/components/ui/badge'
import { Button } from 'web/src/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from 'web/src/components/ui/dropdown-menu'

const CheckingRequests = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Pending Requests</h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <th className="px-6 py-3 font-medium">Employee</th>
                <th className="px-6 py-3 font-medium">Date/Time</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <Avatar className="mr-3 h-8 w-8">
                      <AvatarImage alt="John Doe" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  April 15, 2023 - 9:00 AM
                </td>
                <td className="whitespace-nowrap px-6 py-4">Check-In</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Badge variant="pending">Pending</Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <Avatar className="mr-3 h-8 w-8">
                      <AvatarImage
                        alt="Jane Smith"
                        src="/placeholder-user.jpg"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <span>Jane Smith</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  April 16, 2023 - 5:30 PM
                </td>
                <td className="whitespace-nowrap px-6 py-4">Check-Out</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Badge variant="pending">Pending</Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <Avatar className="mr-3 h-8 w-8">
                      <AvatarImage
                        alt="Michael Johnson"
                        src="/placeholder-user.jpg"
                      />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <span>Michael Johnson</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  April 17, 2023 - 8:45 AM
                </td>
                <td className="whitespace-nowrap px-6 py-4">Check-In</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Badge variant="approved">Approved</Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <Avatar className="mr-3 h-8 w-8">
                      <AvatarImage
                        alt="Sarah Lee"
                        src="/placeholder-user.jpg"
                      />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <span>Sarah Lee</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  April 18, 2023 - 6:15 PM
                </td>
                <td className="whitespace-nowrap px-6 py-4">Check-Out</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Badge variant="rejected">Rejected</Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CheckingRequests

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
