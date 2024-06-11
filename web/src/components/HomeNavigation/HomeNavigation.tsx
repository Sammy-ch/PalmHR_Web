import { NavLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import UserNavigationCell from 'src/components/UserNavigationCell'

import { Button } from '../ui/button'

import logo from './palmHR_logo.png'

const HomeNavigation = () => {
  const { isAuthenticated, signUp, currentUser } = useAuth()
  let org_id
  if (currentUser) {
    org_id = currentUser.sub as string
  }
  return (
    <header className="sub-header border-1 z-10  flex items-center justify-between rounded-full  bg-white px-10 py-2 shadow-md ">
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
      <div className="flex">
        {isAuthenticated ? (
          <>
            <UserNavigationCell id={org_id}  />
          </>
        ) : (
          <>
            <Button
              onClick={signUp}
              className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white   "
            >
              Sign In
            </Button>
          </>
        )}
      </div>
    </header>
  )
}

export default HomeNavigation
