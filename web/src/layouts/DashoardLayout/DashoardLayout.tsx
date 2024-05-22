import DashboardHeader from 'web/src/components/DashboardHeader/DashboardHeader'

import Navigation from 'src/components/Navigation/Navigation'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Navigation />
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </main>
  )
}

export default DashoardLayout
