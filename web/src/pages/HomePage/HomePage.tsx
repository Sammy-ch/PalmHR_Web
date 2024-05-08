import React from 'react'

import HeroSection from 'web/src/components/HeroSection/HeroSection'
import { Button } from 'web/src/components/ui/button'
import { CardHeader, CardContent, Card } from 'web/src/components/ui/card'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <main className="w-full">
      <Metadata title="Home" description="Welcome to Palm HR" />
      <HeroSection />
      <main className="flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your HR Processes
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Palm HR offers a comprehensive suite of tools to manage your
                  team, from onboarding to payroll and everything in between.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Onboarding</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your new hire process with customizable onboarding
                  workflows.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Time Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily track employee time and attendance with our intuitive
                  time tracking tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Payroll</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automate your payroll process and ensure your team is paid on
                  time, every time.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Performance Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your performance review process and provide
                  meaningful feedback to your team.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Reporting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Generate comprehensive reports to gain insights into your
                  workforce and make data-driven decisions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Employee Self-Service</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Empower your team with a self-service portal to manage their
                  information and requests.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Flexible Pricing for Your Needs
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your business. We offer
                  competitive pricing and flexible options.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col">
                <CardHeader className="border-b border-gray-200 py-4 dark:border-gray-800">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Perfect for small teams
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between py-8">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Up to 10 employees
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Basic HR tools
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Limited support
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-8">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="border-b border-gray-200 py-4 dark:border-gray-800">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ideal for growing teams
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between py-8">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Up to 50 employees
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Advanced HR tools
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Priority support
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-8">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="border-b border-gray-200 py-4 dark:border-gray-800">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tailored for large organizations
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between py-8">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Unlimited employees
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Enterprise-grade HR tools
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                        Dedicated support
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-8">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full border-t py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Get Started
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Take Control of Your HR with Palm HR
                </h2>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to={routes.contact()}
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Schedule a Demo
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                  See how Palm HR can streamline your HR processes. Schedule a
                  demo with our team today.
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to={routes.contact()}
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  )
}

export default HomePage

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
