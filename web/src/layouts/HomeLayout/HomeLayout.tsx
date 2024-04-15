import HomeFooter from 'src/components/HomeFooter/HomeFooter'
import HomeNavigation from 'src/components/HomeNavigation/HomeNavigation'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <header>
        <HomeNavigation />
      </header>
      <main className="min-h-screen">{children}</main>
      <footer>
        <HomeFooter />
      </footer>
    </>
  )
}

export default HomeLayout
