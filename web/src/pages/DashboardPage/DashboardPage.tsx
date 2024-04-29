import React from 'react'

import { Metadata } from '@redwoodjs/web'

import AttendanceActivityTable from 'src/components/AttendanceActivityTable/AttendanceActivityTable'
import KpiCard from 'src/components/KpiCard/KpiCard'
// import TopPerformersCard from 'src/components/TopPerformersCard/TopPerformersCard'
const DashboardPage = () => {
  return (
    <main className="content h-full w-full  gap-5  ">
      <Metadata title="Dashboard" description="Access your Dashboard" />
      <section className=" flex h-full flex-col gap-5 ">
        <section className="flex flex-col">
          <div className="flex justify-between gap-5 rounded-md ">
            <KpiCard
              title={'OnTime attendance rate'}
              metric={'56'}
              progress={'15'}
            />
            <KpiCard title={'Absenteeism rate'} metric={'32'} progress={'57'} />
            <KpiCard
              title={'Average working hours'}
              metric={'16'}
              progress={'5'}
            />
            <KpiCard title={'Late'} metric={'48'} progress={'75'} />
          </div>
        </section>
        {/* <section className="flex w-full gap-5">
          <div className="rounded-md   border  shadow-md">
            <AttendanceBarChart />
          </div>
        </section> */}
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
