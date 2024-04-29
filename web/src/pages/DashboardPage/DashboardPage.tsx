import React from 'react'

import { BadgeCheck } from 'lucide-react'
import { ListFilter } from 'lucide-react'
import { Timer } from 'lucide-react'
import { BookX } from 'lucide-react'
import AttendanceActivityTable from 'web/src/components/AttendanceActivityTable/AttendanceActivityTable'

import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import KpiCard from 'src/components/KpiCard/KpiCard'

// import AttendanceBarChart from 'src/components/AttendanceBarChart/AttendanceBarChart'
// import TopPerformersCard from 'src/components/TopPerformersCard/TopPerformersCard'
const DashboardPage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  if (isAuthenticated) {
    console.log(currentUser)
  }
  return (
    <main className="content h-full w-full  gap-5  ">
      <Metadata title="Dashboard" description="Access your Dashboard" />
      <section className=" flex h-full flex-col gap-5 ">
        <section className="flex flex-col">
          <div className="flex justify-between gap-5 rounded-md ">
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
          </div>
        </section>
        <section className="flex w-full gap-5">
          <div className="rounded-md   border  shadow-md"></div>
        </section>
        <section className="flex h-full w-full grid-flow-col gap-5">
          <div className="w-full rounded-md ">
            <AttendanceActivityTable />
          </div>
          <div>{/* <TopPerformersCard /> */}</div>
        </section>
      </section>
    </main>
  )
}

export default DashboardPage
