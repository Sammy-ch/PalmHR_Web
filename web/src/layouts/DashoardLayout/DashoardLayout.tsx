import DashboardHeader from 'web/src/components/DashboardHeader/DashboardHeader'

import Navigation from 'src/components/Navigation/Navigation'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  return (
    <main className="flex w-full">
      <header className="border-r-[1px]">
        <Navigation />
      </header>
      <div className="flex w-full flex-col">
        <div className="border-b-[1px]">
          <DashboardHeader />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </main>
  )
}

export default DashoardLayout
