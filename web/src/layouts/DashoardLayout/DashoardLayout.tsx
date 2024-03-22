import Navigation from 'src/components/Navigation/Navigation'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  return (
    <div className="flex">
      <aside>
        <Navigation />
      </aside>
      {children}
    </div>
  )
}

export default DashoardLayout
