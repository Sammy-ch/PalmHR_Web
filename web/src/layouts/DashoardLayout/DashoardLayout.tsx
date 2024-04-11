import Navigation from 'src/components/Navigation/Navigation'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  return (
    <div className="flex">
      <header>
        <Navigation />
      </header>
      {children}
    </div>
  )
}

export default DashoardLayout
