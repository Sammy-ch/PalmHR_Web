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
        className="mx-20 flex min-h-screen items-center justify-center text-center"
      >
        <section className="nav flex flex-col items-center justify-center gap-10  text-[3rem]">
          <h2 className="hero-h1 text-[5rem]">
            Welcome to <span className="text-[#00a551]">PALM HR</span>
            {''}: Revolutionizing HR Management
          </h2>
          <p className="px-[15rem] text-xl">
            Experience the convenience of having all your HR needs in one place.
            From payroll to performance tracking, our comprehensive app
            simplifies every aspect of HR management.
          </p>
          <div className="flex gap-2">
            <Button className="rounded-full p-6 text-lg shadow-md">Get Started</Button>
            <Button className="flex gap-2 rounded-full bg-white text-black border-2 shadowm-md  p-6 text-lg">
              Download App
              <Download />
            </Button>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  )
}

export default HeroSection
