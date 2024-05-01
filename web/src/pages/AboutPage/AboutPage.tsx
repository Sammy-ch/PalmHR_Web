import {
  AvatarImage,
  AvatarFallback,
  Avatar,
} from 'web/src/components/ui/avatar'
import { Button } from 'web/src/components/ui/button'
import { Input } from 'web/src/components/ui/input'
import { Textarea } from 'web/src/components/ui/textarea'

import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />
      <main className="flex flex-col">
        <section className="w-full bg-gray-100 py-30 dark:bg-gray-800 md:py-60">
          <div className="container flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Palm HR
              </h1>
            </div>
            <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400">
              Streamline your HR processes and empower your team with Palm HR,
              the all-in-one HR solution.
            </p>
          </div>
        </section>
        <section className="w-full py-20 md:py-32">
          <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Employee Management</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Easily manage employee information, track attendance, and
                streamline onboarding.
              </p>
            </div>
            <div className="space-y-4">
              <ClockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Time Tracking</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Accurately track employee time and attendance, and generate
                detailed reports.
              </p>
            </div>
            <div className="space-y-4">
              <DollarSignIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-semibold">Payroll</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Automate payroll calculations, tax deductions, and direct
                deposits.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-20 dark:bg-gray-800 md:py-32">
          <div className="container">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet the Team
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-500 dark:text-gray-400">
                The talented individuals behind the creation of Palm HR.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="John Doe" src="/avatars/01.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Co-Founder, CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="Jane Smith" src="/avatars/02.png" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h4 className="text-lg font-semibold">Jane Smith</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Co-Founder, CTO
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="Michael Johnson" src="/avatars/03.png" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h4 className="text-lg font-semibold">Michael Johnson</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32">
          <div className="container">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-500 dark:text-gray-400">
                Have a question or feedback? We&apos;d love to hear from you.
              </p>
            </div>
            {/* <form className="mx-auto mt-10 max-w-md space-y-4">
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Message" />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form> */}
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutPage

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
