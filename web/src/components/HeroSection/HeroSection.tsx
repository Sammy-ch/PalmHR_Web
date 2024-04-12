import Spline from '@splinetool/react-spline'
import { Download } from 'lucide-react'

import { Button } from '../ui/button'

// import logo from './iphone-15-pro-on-white-background-top-view-removebg-preview.png'

const HeroSection = () => {
  return (
    <main className="grid min-h-screen grid-cols-2 pt-20 ">
      <section className="nav flex flex-col gap-10  text-[3rem]">
        <h2 className="hero-h1">
          Welcome to <span className="text-[#00a551]">PALM HR</span>
          {''}: Revolutionizing HR Management
        </h2>
        <p className="text-xl">
          Experience the convenience of having all your HR needs in one place.
          From payroll to performance tracking, our comprehensive app simplifies
          every aspect of HR management.
        </p>
        <div className="flex gap-2">
          <Button className="p-6 text-lg hover:bg-[#00a551]">
            Get Started
          </Button>
          <Button className=" flex gap-2 bg-[#00a551] p-6 text-lg">
            Download App
            <Download />
          </Button>
        </div>
      </section>
      <section className="pl-20 h-full  ">
        <Spline scene="https://prod.spline.design/RQLVtoJceDYzvQie/scene.splinecode" className='h-full' />{' '}
      </section>
    </main>
  )
}

export default HeroSection
