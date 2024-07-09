import { addDays, format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'
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
import { cn } from 'web/src/lib/utils'

import { Metadata } from '@redwoodjs/web'

const ReportsPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  })
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
          <div className="grid gap-6 md:grid-cols-3"></div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Date Range</CardTitle>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={'outline'}
                      className={cn(
                        'w-[300px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, 'LLL dd, y')} -{' '}
                            {format(date.to, 'LLL dd, y')}
                          </>
                        ) : (
                          format(date.from, 'LLL dd, y')
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />{' '}
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
