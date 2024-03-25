import { Metadata } from '@redwoodjs/web'

import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'
const HomePage = () => {
  return (
    <main className="w-full bg-[#000000] px-5 pt-2">
      <Metadata title="Home" description="Palm HR Dashboard" />
      <DashboardHeader />
    </main>
  )
}

export default HomePage
