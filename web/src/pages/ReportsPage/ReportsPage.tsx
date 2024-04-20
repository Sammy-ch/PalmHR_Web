import { Button } from 'web/src/components/ui/button'
import { Calendar } from 'web/src/components/ui/calendar'
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from 'web/src/components/ui/card'
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from 'web/src/components/ui/popover'

import { Metadata } from '@redwoodjs/web'
const ReportsPage = () => {
  return (
    <>
      <Metadata title="Reports" description="Reports page" />

      <div className="w-full md:px-6">
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 dark:text-gray-400">
              View and download employee attendance data.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Hours Worked</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">2,345</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Hours per Employee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">40</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Number of Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">59</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Date Range</CardTitle>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full justify-start" variant="outline">
                      <CalendarDaysIcon className="mr-2 h-4 w-4" />
                      June 1, 2023 - June 30, 2023
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar mode="range" numberOfMonths={2} />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Export Data</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-end">
                <Button variant="outline">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download CSV
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Previous Reports</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>May 2023 Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Attendance data for May 2023.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>April 2023 Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Attendance data for April 2023.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>March 2023 Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Attendance data for March 2023.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportsPage

function CalendarDaysIcon(props) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
