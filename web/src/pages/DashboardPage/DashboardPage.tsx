import React from 'react'

import AttendanceBarChart from 'web/src/components/AttendanceBarChart/AttendanceBarChart'

import { useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import EmployeeAttendancesCell from 'src/components/EmployeeAttendance/EmployeeAttendancesCell'
import KpiCardCell from 'src/components/KpiCardCell'

const DashboardPage = () => {
  const { id } = useParams()
  return (
    <main className="content flex h-full w-full flex-col justify-between gap-5">
      <Metadata title="Dashboard" description="Access your Dashboard" />
      <section className="grid w-full gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4  ">
        <KpiCardCell />
      </section>
      <h1>Attendance Overview Chart</h1>
      <section className={'w-full border p-2 shadow-md'}>
        <AttendanceBarChart />
      </section>
      <section className="flex h-full w-full grid-flow-col gap-5">
        <div className="flex w-full items-center justify-center  rounded-md border shadow-md">
          <EmployeeAttendancesCell orgId={id} />
        </div>
      </section>
    </main>
  )
}

export default DashboardPage
