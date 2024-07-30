import React, { forwardRef } from 'react'

import AttendanceActivityTable from 'src/components/AttendanceActivityTable'

interface PrintableAttendanceTableProps {
  employeeAttendances: FindEmployeeAttendances['employeeAttendances']
}
const PrintableAttendanceTable = forwardRef<
  HTMLDivElement,
  PrintableAttendanceTableProps
>(({ employeeAttendances }, ref) => (
  <div ref={ref}>
    <div className="print-header">
      <h1>Attendance Report</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
    </div>
    <AttendanceActivityTable employeeAttendances={employeeAttendances} />
  </div>
))

export default PrintableAttendanceTable
