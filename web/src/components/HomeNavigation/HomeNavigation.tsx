import { NavLink, routes, Link } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import { Button } from '../ui/button'

import logo from './palmHR_logo.png'
const HomeNavigation = () => {
  const { isAuthenticated, signUp } = useAuth()
  return (
    <header className="navbar  border-1 z-10  flex items-center justify-between  bg-white py-2 px-10 shadow-md ">
      <img src={logo} alt="Palm_HR_Logo" height={100} width={200} />
      <nav className="flex gap-10 text-lg">
        <NavLink
          className=""
          activeClassName="border-b-2 border-[#00a551]"
          to={routes.home()}
        >
          Home
        </NavLink>
        <NavLink
          className=""
          activeClassName="border-b-2 border-[#00a551]"
          to={routes.pricing()}
        >
          Pricing
        </NavLink>
        <NavLink
          className=""
          activeClassName="border-b-2 border-[#00a551]"
          to={routes.about()}
        >
          About
        </NavLink>
        <NavLink
          className=""
          activeClassName="border-b-2 border-[#00a551]"
          to={routes.contact()}
        >
          Contact
        </NavLink>
      </nav>
      {isAuthenticated ? (
        <Link
          to={routes.dashboard()}
          className="navbar flex h-[40px] w-[120px] items-center justify-center rounded-md bg-[#00A551] text-white   "
        >
          Dashboard
        </Link>
      ) : (
        <Button
          onClick={signUp}
          className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white   "
        >
          Sign Up
        </Button>
      )}
    </header>
  )
}

export default HomeNavigation
