import { NavLink, routes, Link } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'
import { TypedDocumentNode } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

import { Button } from '../ui/button'

import logo from './palmHR_logo.png'

import type { FindUserById, FindUserByIdVariables } from '@/types/graphql'

const GET_USER_ID: TypedDocumentNode<FindUserById, FindUserByIdVariables> = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
    }
  }
`

const HomeNavigation = () => {
  const { isAuthenticated, signUp, logOut, userMetadata } = useAuth()
  const userId = userMetadata?.id
  const { data } = useQuery(GET_USER_ID, {
    variables: { id: userId },
  })

  const HasProfileId = data?.user?.id

  // if (data?.user?.id) {
  //   console.log(data.user.id)
  // } else {
  //   // navigate(routes.newUser())
  // }

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
            <Button className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white   ">
              {HasProfileId ? (
                <Link to={routes.organizations()}>Organizations</Link>
              ) : (
                <Link to={routes.dashboard()}>Create Profile</Link>
              )}
            </Button>
            <Button
              onClick={logOut}
              variant="link"
              className="navbar hover:border-green flex items-center justify-center rounded-lg  text-black   "
            >
              Log Out
            </Button>
          </>
        ) : (
          <Button
            onClick={signUp}
            className="navbar hover:border-green flex h-[40px] w-[120px] items-center justify-center rounded-lg bg-[#00A551] text-white   "
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}

export default HomeNavigation
