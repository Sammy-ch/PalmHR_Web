// web/src/components/PrintButton.tsx
import React, { useRef } from 'react'

import ReactToPrint from 'react-to-print'

import PrintableAttendanceTable from '../PrintableAttendenceTable'

interface PrintButtonProps {
  employeeAttendances: FindEmployeeAttendances['employeeAttendances']
}
const PrintButton: React.FC<PrintButtonProps> = ({ employeeAttendances }) => {
  const componentRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="no-print border-1 flex items-center justify-center rounded-lg border-neutral-500/75 px-[2rem] py-[1rem] shadow-md">
            Print Attendance
          </button>
        )}
        content={() => componentRef.current}
      />
      <div className="no-print">
        <PrintableAttendanceTable
          ref={componentRef}
          employeeAttendances={employeeAttendances}
        />
      </div>
    </div>
  )
}

export default PrintButton
