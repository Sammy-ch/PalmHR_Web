import { useEffect, useState } from 'react'

import { SignInButton } from '@clerk/clerk-react'

import { NavLink, navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import { Button } from '../ui/button'

import logo from './palmHR_logo.png'

const HomeNavigation = () => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const [orgId, setOrgId] = useState('')

  useEffect(() => {
    setOrgId(currentUser?.id)
  }, [currentUser])

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
          <main className="flex gap-2">
            <Button
              onClick={() => {
                navigate(routes.dashboard({ id: orgId }))
              }}
              className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white   "
            >
              Dashboard
            </Button>
            <Button
              onClick={() => logOut()}
              className="navbar hover:border-green flex  items-center justify-center rounded-lg  text-white   "
            >
              Log out
            </Button>
          </main>
        ) : (
          <>
            {/* <Button
              onClick={() => navigate(routes.login())}
              className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white   "
            >
              Log In
            </Button> */}
            <SignInButton mode="modal" />
          </>
        )}
      </div>
    </header>
  )
}

export default HomeNavigation
