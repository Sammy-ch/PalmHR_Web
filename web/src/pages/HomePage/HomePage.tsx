import React from 'react'

import { Metadata } from '@redwoodjs/web'

import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'

const HomePage = () => {
  return (
    <main className="min-h-screen w-full gap-5 px-2 py-2">
      <Metadata title="Home" description="Palm HR Dashboard" />
      <DashboardHeader />
      <section className="flex h-full flex-col gap-5 ">
        <section className="grid h-[500px] grid-flow-col gap-5  ">
          <div className="rounded-md bg-[#ECEFEC] shadow-md"></div>
          <div className="rounded-md bg-[#ECEFEC] shadow-md"></div>
        </section>
        <section className="grid h-full grid-flow-col gap-5">
          <div className="col-span-3 rounded-md bg-[#ECEFEC] shadow-md"></div>
          <div className="rounded-md bg-[#ECEFEC] shadow-md"></div>
        </section>
      </section>
    </main>
  )
}

export default HomePage
