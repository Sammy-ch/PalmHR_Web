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
      {children}
      <footer>
        <HomeFooter />
      </footer>
    </>
  )
}

export default HomeLayout
