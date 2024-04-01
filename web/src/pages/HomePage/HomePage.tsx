import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()
  return (
    <main className="w-full px-5 pt-2">
      <Metadata title="Home" description="Palm HR Dashboard" />
      <DashboardHeader />
      <span className="text-white">{JSON.stringify({ isAuthenticated })}</span>
      <button
        className="text-white"
        onClick={() =>
          signUp({
            email: 'alaincherubin@gmail.com',
            password: 'santanasaint7',
          })
        }
      >
        Sign Up
      </button>
    </main>
  )
}

export default HomePage
