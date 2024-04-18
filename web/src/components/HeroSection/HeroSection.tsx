import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

import { Link, routes } from '@redwoodjs/router'

import { AuroraBackground } from '../ui/aurora-background'

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
          <h2 className="header text-[5rem]">
            Welcome to <span className="text-[#00a551]">Palm HR</span>
            {''}: Revolutionizing HR Management
          </h2>
          <p className="content px-[15rem] text-2xl">
            Experience the convenience of having all your HR needs in one place.
            From payroll to performance tracking, our comprehensive app
            simplifies every aspect of HR management.
          </p>

          <div className="flex gap-2">
            <Link
              to={routes.home()}
              className="content w-40 rounded-full bg-slate-800 p-2 text-lg text-white shadow-md"
            >
              Get Started
            </Link>
            <Link
              to={routes.home()}
              className="shadowm-md content flex w-40 gap-2 rounded-full border-2  bg-white p-2 text-lg text-black"
            >
              Download App
              <Download />
            </Link>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  )
}

export default HeroSection
