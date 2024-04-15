import HomeFooter from 'src/components/HomeFooter/HomeFooter'
import HomeNavigation from 'src/components/HomeNavigation/HomeNavigation'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <header className="absolute z-10 my-5 w-full px-20">
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
