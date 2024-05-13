import React from 'react'

import { BadgeCheck } from 'lucide-react'
import { ListFilter } from 'lucide-react'
import { Timer } from 'lucide-react'
import { BookX } from 'lucide-react'

import { Metadata } from '@redwoodjs/web'

import AttendanceLineChart from 'src/components/AttendanceLineChart/AttendanceLineChart'
import EmployeeAttendancesCell from 'src/components/EmployeeAttendance/EmployeeAttendancesCell'
import KpiCard from 'src/components/KpiCard/KpiCard'

// import AttendanceBarChart from 'src/components/AttendanceBarChart/AttendanceBarChart'
import TopPerformersCard from 'src/components/TopPerformersCard/TopPerformersCard'

const DashboardPage = () => {
  return (
    <main className="content flex h-full w-full flex-col justify-between  gap-5  ">
      <Metadata title="Dashboard" description="Access your Dashboard" />
      <section className=" mb-10 grid w-full gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4  ">
        <KpiCard
          title={'OnTime Attendance'}
          metric={'56'}
          icon={BadgeCheck}
          progress={'+20.1% from last month'}
        />
        <KpiCard
          title={'Absenteeism rate'}
          icon={ListFilter}
          metric={'32'}
          progress={'+20.1% from last month'}
        />
        <KpiCard
          title={'Average working hours'}
          metric={'16'}
          progress={'+20.1% from last month'}
          icon={Timer}
        />
        <KpiCard
          title={'Late Attendance'}
          metric={'48'}
          progress={'+20.1% from last month'}
          icon={BookX}
        />
      </section>
      <h1>Attendance Overview Chart</h1>
      <section className={'w-full border  shadow-md'}>
        <AttendanceLineChart />
      </section>
      <section className="flex h-full w-full grid-flow-col gap-5">
        <div className="flex w-full items-center justify-center rounded-md border shadow-md">
          <EmployeeAttendancesCell />
        </div>
        <div className={'shadow-md'}>
          <TopPerformersCard />
        </div>
      </section>
    </main>
  )
}

export default DashboardPage
