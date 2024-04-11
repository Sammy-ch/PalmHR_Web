import { Button } from '../ui/button'
import {Download} from 'lucide-react'
import logo from './iphone-15-pro-on-white-background-top-view-removebg-preview.png'

const HeroSection = () => {
  return (
    <main className="grid min-h-screen grid-cols-2  place-items-center ">
      <section className="nav flex flex-col gap-20  text-[3rem]">
        <h2 className="hero-h1">
          Welcome to <span className="text-[#00a551]">PALM HR</span>{''}
          :{' '}Revolutionizing HR Management
        </h2>
        <p className="text-2xl">
          Experience the convenience of having all your HR needs in one place.
          From payroll to performance tracking, our comprehensive app simplifies
          every aspect of HR management.
        </p>
        <div className="flex gap-2">
        <Button className="p-6 text-lg hover:bg-[#00a551]">
          Get Started
        </Button>
        <Button className=" p-6 flex gap-2  text-lg bg-[#00a551]">
          Download App
          <Download />
          </Button>
             </div>
      </section>
      <section className="pl-20">
        <img src={logo} alt=""  />
      </section>
    </main>
  )
}

export default HeroSection
