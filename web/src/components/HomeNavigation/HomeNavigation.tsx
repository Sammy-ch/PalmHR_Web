import { NavLink, routes, Link } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import { Button } from '../ui/button'

import logo from './palmHR_logo.png'
const HomeNavigation = () => {
  const { isAuthenticated, signUp } = useAuth()
  return (
    <header className="navbar border-1 z-10 mx-20 mt-5 flex items-center justify-between rounded-full bg-white p-5 shadow-md ">
      <img src={logo} alt="Palm_HR_Logo" height={100} width={150} />
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
          className="navbar text-md flex h-[40px] w-[150px] items-center justify-center rounded-full border-2   border-[#00A551] hover:bg-[#00A551]  hover:text-white  "
        >
          DASHBOARD
        </Link>
      ) : (
        <Button
          onClick={signUp}
          className=" w-[100px] rounded-full bg-[#00A551] text-lg hover:bg-white hover:text-black hover:outline"
        >
          SignUp
        </Button>
      )}
    </header>
  )
}

export default HomeNavigation
