import { Avatar } from 'web/src/components/ui/avatar'
import { Button } from 'web/src/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'web/src/components/ui/table'

import { Metadata } from '@redwoodjs/web'

const AttendancePage = () => {
  return (
    <>
      <Metadata title="Attendance" description="Attendance page" />

      <div className="mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Attendance Management</h1>
          <div className="flex items-center space-x-4">
            <Button variant="default">Add Leave</Button>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950 dark:text-gray-50">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar alt="John Doe" src="/placeholder-user.jpg" />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-2xl font-semibold">5</h4>
                  <p className="text-gray-500 dark:text-gray-400">Days</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <LeafIcon className="h-5 w-5 text-green-500" />
                  <p className="text-green-500">Sick Leave</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">12 Leaves</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950 dark:text-gray-50">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar alt="Jane Smith" src="/placeholder-user.jpg" />
                  <div>
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Product Manager
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-2xl font-semibold">3</h4>
                  <p className="text-gray-500 dark:text-gray-400">Days</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <LuggageIcon className="h-5 w-5 text-blue-500" />
                  <p className="text-blue-500">Vacation</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">8 Leaves</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950 dark:text-gray-50">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar alt="Michael Johnson" src="/placeholder-user.jpg" />
                  <div>
                    <h3 className="font-semibold">Michael Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-2xl font-semibold">7</h4>
                  <p className="text-gray-500 dark:text-gray-400">Days</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-yellow-500" />
                  <p className="text-yellow-500">Personal</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">15 Leaves</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold">Requested Leaves</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Leave Type</TableHead>
                  <TableHead>Days</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Avatar alt="Sarah Lee" src="/placeholder-user.jpg" />
                      <div>
                        <h3 className="font-semibold">Sarah Lee</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <LuggageIcon className="h-5 w-5 text-blue-500" />
                      <p className="text-blue-500">Vacation</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h4 className="text-2xl font-semibold">3</h4>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Avatar alt="David Kim" src="/placeholder-user.jpg" />
                      <div>
                        <h3 className="font-semibold">David Kim</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <LeafIcon className="h-5 w-5 text-green-500" />
                      <p className="text-green-500">Sick Leave</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h4 className="text-2xl font-semibold">5</h4>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Avatar alt="Emily Chen" src="/placeholder-user.jpg" />
                      <div>
                        <h3 className="font-semibold">Emily Chen</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Product Designer
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-5 w-5 text-yellow-500" />
                      <p className="text-yellow-500">Personal</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h4 className="text-2xl font-semibold">2</h4>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AttendancePage

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function LuggageIcon(props) {
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
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  )
}
