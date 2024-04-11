import { NavLink, routes } from '@redwoodjs/router'

import logo from './palmHR_logo.png'
const HomeNavigation = () => {
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter flex items-center justify-between ">
      <img src={logo} alt="Palm_HR_Logo" height={200} width={200} />
      <nav>
        <NavLink activeClassName="border-b-2" to={routes.home()}>
          Home
        </NavLink>
        <NavLink activeClassName="border-b-2" to={routes.about()}>
          About
        </NavLink>
        <NavLink activeClassName="border-b-2" to={routes.pricing()}>
          Pricing
        </NavLink>
        <NavLink activeClassName="border-b-2" to={routes.contact()}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default HomeNavigation
