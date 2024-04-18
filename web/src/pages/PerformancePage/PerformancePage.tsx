import { Metadata } from '@redwoodjs/web'

const PerformancePage = () => {
  return (
    <>
      <Metadata title="Performance" description="Performance page" />

      <main className="container px-4 md:px-6">
        <h1 className="mb-8 text-xl font-bold">Our Team</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="John Doe"
                className="h-full w-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                }}
                width={400}
              />
              <span className="absolute bottom-2 right-2 inline-block h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">John Doe</h3>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Software Engineer
              </p>
              <div className="flex items-center space-x-2">
                <LocateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  San Francisco, CA
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in 2019
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Jane Smith"
                className="h-full w-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                }}
                width={400}
              />
              <span className="absolute bottom-2 right-2 inline-block h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Jane Smith</h3>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Product Manager
              </p>
              <div className="flex items-center space-x-2">
                <LocateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  New York, NY
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in 2017
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Michael Johnson"
                className="h-full w-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                }}
                width={400}
              />
              <span className="absolute bottom-2 right-2 inline-block h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Michael Johnson</h3>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                UI/UX Designer
              </p>
              <div className="flex items-center space-x-2">
                <LocateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chicago, IL
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in 2020
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md dark:bg-gray-800">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                alt="Sarah Lee"
                className="h-full w-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                }}
                width={400}
              />
              <span className="absolute bottom-2 right-2 inline-block h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Sarah Lee</h3>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Data Analyst
              </p>
              <div className="flex items-center space-x-2">
                <LocateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seattle, WA
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PerformancePage

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
