import { Metadata } from '@redwoodjs/web'

import EmployeeProfilesCell from 'src/components/EmployeeProfile/EmployeeProfilesCell'
const PerformancePage = () => {
  return (
    <>
      <Metadata title="Performance" description="Performance page" />
      <main className="">
        <h1 className="mb-8 text-xl font-bold">Our Team</h1>
        <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <EmployeeProfilesCell />
        </div>
      </main>
    </>
  )
}

export default PerformancePage
