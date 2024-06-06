import { Button } from 'web/src/components/ui/button'

import { Metadata } from '@redwoodjs/web'

import EmployeeLeaveFormsCell from 'src/components/EmployeeLeaveForm/EmployeeLeaveFormsCell'

const AttendancePage = () => {
  return (
    <>
      <Metadata title="Attendance" description="Attendance page" />

      <div className="mx-auto w-full px-4">
        <div className="mb-6 flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Attendance Management</h1>
          <div className="flex items-center space-x-4">
            <Button variant="default">Add Leave</Button>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
        <EmployeeLeaveFormsCell />
      </div>
    </>
  )
}

export default AttendancePage
