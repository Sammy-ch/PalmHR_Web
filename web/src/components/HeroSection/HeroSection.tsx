import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

import { AuroraBackground } from '../ui/aurora-background'
import { Button } from '../ui/button'

// import logo from './iphone-15-pro-on-white-background-top-view-removebg-preview.png'

const HeroSection = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mx-20 grid min-h-screen grid-cols-2 pt-[5rem]"
      >
        <section className="nav flex flex-col gap-10  text-[3rem]">
          <h2 className="hero-h1">
            Welcome to <span className="text-[#00a551]">PALM HR</span>
            {''}: Revolutionizing HR Management
          </h2>
          <p className="text-xl">
            Experience the convenience of having all your HR needs in one place.
            From payroll to performance tracking, our comprehensive app
            simplifies every aspect of HR management.
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
        <section className="h-full pl-20  ">
          <Spline
            scene="https://prod.splzine.design/RQLVtoJceDYzvQie/scene.splinecode"
            className="h-full"
          />{' '}
        </section>
      </motion.div>
    </AuroraBackground>
  )
}

export default HeroSection
