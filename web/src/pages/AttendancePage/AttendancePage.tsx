import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AttendancePage = () => {
  return (
    <>
      <Metadata title="Attendance" description="Attendance page" />

      <h1>AttendancePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AttendancePage/AttendancePage.tsx</code>
      </p>
      <p>
        My default route is named <code>attendance</code>, link to me with `
        <Link to={routes.attendance()}>Attendance</Link>`
      </p>
    </>
  )
}

export default AttendancePage
