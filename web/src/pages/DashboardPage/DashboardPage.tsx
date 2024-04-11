import React from 'react'

import { Metadata } from '@redwoodjs/web'

import AttendanceActivityTable from 'src/components/AttendanceActivityTable/AttendanceActivityTable'
import AttendanceChartCard from 'src/components/AttendanceChartCard/AttendanceChartCard'
import AttendancePieChart from 'src/components/AttendancePieChart/AttendancePieChart'
import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'
import KpiCard from 'src/components/KpiCard/KpiCard'

const DashboardPage = () => {
  return (
    <main className="h-full w-full gap-5  px-5 py-2 ">
      <Metadata title="Dashboard" description="Access your Dashboard" />

      <DashboardHeader />
      <section className="my-5 flex h-full flex-col gap-5 ">
        <section className="flex flex-col">
          <div className="flex gap-2 rounded-md ">
            <KpiCard title={'OnTime'} metric={'203.2'} progress={'129'} />
            <KpiCard title={'Absenteeism'} metric={'203.2'} progress={'129'} />
            <KpiCard title={'Late'} metric={'203.2'} progress={'129'} />
            <KpiCard title={'Late'} metric={'203.2'} progress={'129'} />
          </div>
        </section>
        <section className="flex w-full gap-5">
          <div className="h-[400px] rounded-md border  shadow-md">
            <AttendanceChartCard />
          </div>
          <div className="w-[400px] rounded-md bg-slate-50 shadow-md">
            <AttendancePieChart />
          </div>
        </section>
        <section className="flex h-full w-full grid-flow-col gap-5">
          <div className="col-span-3 w-full rounded-md bg-slate-50 p-5 shadow-md">
            <AttendanceActivityTable />
          </div>
        </section>
      </section>
    </main>
  )
}

export default DashboardPage
