import React from 'react'

import { BadgeCheck } from 'lucide-react'
import { ListFilter } from 'lucide-react'
import { Timer } from 'lucide-react'
import { BookX } from 'lucide-react'
import AttendanceBarChart from 'web/src/components/AttendanceBarChart/AttendanceBarChart'

import { useParams } from '@redwoodjs/router'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useQuery } from '@redwoodjs/web'
import { TypedDocumentNode } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EmployeeAttendancesCell from 'src/components/EmployeeAttendance/EmployeeAttendancesCell'
import KpiCardCell from 'src/components/KpiCardCell'
import TopPerformersCard from 'src/components/TopPerformersCard/TopPerformersCard'

const DashboardPage = () => {
  const { id } = useParams()
  const { currentUser } = useAuth()

  // if (!currentUser) {
  //   console.log('Not logged in')
  // }
  // const userId = currentUser?.sub

  // const { data, loading, error } = useQuery(QUERY, {
  //   variables: {
  //     OrganizationId: id,
  //   },
  // })
  // if (loading) return <div>Loading...</div>
  // if (!data && error) {
  //   navigate(routes.organizations())
  // }
  // if (
  //   data?.organization?.OrganizationId === id &&
  //   data?.organization?.Organisation_tag === userId
  // ) {
  //   alert('Welcome to your Dashboard')
  // }

  return (
    <main className="content flex h-full w-full flex-col justify-between  gap-5  ">
      <Metadata title="Dashboard" description="Access your Dashboard" />
      <section className=" mb-10 grid w-full gap-5 rounded-md md:grid-cols-1 lg:grid-cols-4  ">
        <KpiCardCell id={id} />
      </section>
      <h1>Attendance Overview Chart</h1>
      <section className={'w-full border p-5  shadow-md'}>
        <AttendanceBarChart />
      </section>
      <section className="flex h-full w-full grid-flow-col gap-5">
        <div className="flex w-full  rounded-md shadow-md">
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
