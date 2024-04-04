import React from 'react'

import { Metadata } from '@redwoodjs/web'

import AttendanceChartCard from 'src/components/AttendanceChartCard/AttendanceChartCard'
import AttendancePieChart from 'src/components/AttendancePieChart/AttendancePieChart'
import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'
import KpiCard from 'src/components/KpiCard/KpiCard'

const HomePage = () => {
  return (
    <main className="min-h-screen w-full gap-5 px-2 py-2 ">
      <Metadata title="Home" description="Palm HR Dashboard" />
      <DashboardHeader />
      <section className="flex h-full flex-col gap-5 ">
        <section className="flex flex-col gap-5">
          <div className="flex gap-2 rounded-md ">
            <KpiCard title={'OnTime'} metric={'203.2'} progress={'129'} />
            <KpiCard title={'Absenteeism'} metric={'203.2'} progress={'129'} />
            <KpiCard title={'Late'} metric={'203.2'} progress={'129'} />
            <KpiCard title={'OnTime'} metric={'203.2'} progress={'129'} />
          </div>
          <div className="h-[500px] w-full rounded-md border shadow-md">
            <AttendanceChartCard />
          </div>
        </section>
        <section className="flex h-full w-full grid-flow-col gap-5">
          <div className="col-span-3 w-full rounded-md bg-[#ECEFEC] shadow-md"></div>
          <div className="w-[400px] rounded-md bg-[#ECEFEC] shadow-md">
            <AttendancePieChart />
          </div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
