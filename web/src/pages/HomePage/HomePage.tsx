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
        <section className="grid w-full grid-flow-col gap-5 ">
          <div className="w-full rounded-md shadow-md">
            <AttendanceChartCard />
          </div>
          <div className="grid grid-cols-2 gap-5 rounded-md  ">
            <KpiCard />
            <KpiCard />
            <KpiCard />
            <KpiCard />
          </div>
        </section>
        <section className="flex h-full w-full grid-flow-col gap-5">
          <div className="col-span-3 rounded-md bg-[#ECEFEC] shadow-md w-full"></div>
          <div className="rounded-md bg-[#ECEFEC] shadow-md w-[400px]"><AttendancePieChart/></div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
