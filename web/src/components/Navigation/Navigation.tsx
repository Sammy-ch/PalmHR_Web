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
    <section className="content flex min-h-screen w-[180px] flex-col items-center px-5 py-5">
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
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-lg "
          activeClassName="bg-[grey]/10 text-black "
          to={routes.dashboard()}
        >
          <LayoutDashboard />
          Dashboard
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-lg "
          activeClassName="bg-[grey]/10 text-black "
          to={routes.reports()}
        >
          <BookUp2 />
          Reports
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-lg "
          activeClassName="bg-[grey]/10 text-black "
          to={routes.performance()}
        >
          <FilePieChart />
          Performance
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-lg "
          activeClassName="bg-[grey]/10 text-black "
          to={routes.attendance()}
        >
          <UserRoundSearch />
          Attendance
        </NavLink>
        <NavLink
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-lg "
          activeClassName="bg-[grey]/10 text-black "
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
