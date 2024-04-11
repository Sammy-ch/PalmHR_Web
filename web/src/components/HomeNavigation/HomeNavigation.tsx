import { NavLink, routes } from '@redwoodjs/router'

import { Button } from '../ui/button'

import logo from './palmHR_logo.png'
const HomeNavigation = () => {
  return (
    <header className=" z-10 mx-20 p-5 flex items-center justify-between bg-white ">
      <img src={logo} alt="Palm_HR_Logo" height={200} width={200} />
      <nav className="flex gap-10 text-xl">
        <NavLink className="nav" activeClassName="border-b-2 border-[#00a551]" to={routes.home()}>
          Home
        </NavLink>
        <NavLink className="nav" activeClassName="border-b-2 border-[#00a551]" to={routes.pricing()}>
          Pricing
        </NavLink>
        <NavLink className="nav" activeClassName="border-b-2 border-[#00a551]" to={routes.about()}>
          About
        </NavLink>
        <NavLink className="nav" activeClassName="border-b-2 border-[#00a551]" to={routes.contact()}>
          Contact
        </NavLink>
      </nav>
      <Button className="nav rounded-full w-[100px] text-lg bg-[#00A551] hover:bg-white hover:text-black hover:outline">Login</Button>
    </header>
  )
}

export default HomeNavigation
