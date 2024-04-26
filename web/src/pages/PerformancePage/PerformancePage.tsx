import EmployeeProfileCard from 'web/src/components/EmployeeProfileCard/EmployeeProfileCard'

import { Metadata } from '@redwoodjs/web'

import chaddryDp from './Chaddry1.jpg'
import gilbertDp from './Gilbert1.jpg'
import loretteDp from './Lorette1.jpg'
import alainDp from './santana.jpg'
const PerformancePage = () => {
  return (
    <>
      <Metadata title="Performance" description="Performance page" />

      <main className="">
        <h1 className="mb-8 text-xl font-bold">Our Team</h1>
        <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <EmployeeProfileCard
            fullName={'Alain Cherubin'}
            profileDp={alainDp}
            position={'FullStack Developer'}
          />

          <EmployeeProfileCard
            fullName={'Kelly Lorette'}
            profileDp={loretteDp}
            position={'Research and Statistics manager'}
          />
          <EmployeeProfileCard
            fullName={'Mugisha Gilbert'}
            profileDp={gilbertDp}
            position={'Graphics Designer'}
          />
          <EmployeeProfileCard
            fullName={'Chaddry Mberincuti'}
            profileDp={chaddryDp}
            position={'Social Media Graphics designer '}
          />
        </div>
      </main>
    </>
  )
}

export default PerformancePage
