import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PerformancePage = () => {
  return (
    <>
      <Metadata title="Performance" description="Performance page" />

      <h1>PerformancePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PerformancePage/PerformancePage.tsx</code>
      </p>
      <p>
        My default route is named <code>performance</code>, link to me with `
        <Link to={routes.performance()}>Performance</Link>`
      </p>
    </>
  )
}

export default PerformancePage
