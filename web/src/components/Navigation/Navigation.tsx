import {
  LayoutDashboard,
  BookUp2,
  FilePieChart,
  UserRoundSearch,
  Settings,
} from 'lucide-react'

import { NavLink, routes } from '@redwoodjs/router'

import logo from './palmHR_logo.png'
const Navigation = () => {
  return (
    <section className="flex min-h-screen w-[250px] flex-col items-center px-5 py-5">
      <header className="mb-10">
        <img
          src={logo}
          alt={'Palm HR Logo'}
          height={150}
          width={150}
          className="h-auto"
        />
      </header>
      <nav className="flex w-full flex-col gap-3">
        <NavLink
          className="flex w-full items-center gap-5  rounded-md bg-[#ECEFEC] px-5 py-2 text-lg shadow-sm "
          activeClassName="bg-green-500 text-white shadow-md"
          to={routes.home()}
        >
          <LayoutDashboard />
          Dashboard
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-5  rounded-md bg-[#ECEFEC] px-5 py-2 text-lg shadow-sm "
          activeClassName="bg-green-500 text-white shadow-md"
          to={routes.reports()}
        >
          <BookUp2 />
          Reports
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-5  rounded-md bg-[#ECEFEC] px-5 py-2 text-lg shadow-sm "
          activeClassName="bg-green-500 text-white shadow-md"
          to={routes.performance()}
        >
          <FilePieChart />
          Performance
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-5  rounded-md bg-[#ECEFEC] px-5 py-2 text-lg shadow-sm "
          activeClassName="bg-green-500 text-white shadow-md"
          to={routes.attendance()}
        >
          <UserRoundSearch />
          Attendance
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-5  rounded-md bg-[#ECEFEC] px-5 py-2 text-lg shadow-sm "
          activeClassName="bg-green-500 text-white shadow-md"
          to={routes.settings()}
        >
          <Settings />
          Settings
        </NavLink>
      </nav>
    </section>
  )
}

export default Navigation
