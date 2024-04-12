import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const CreateorganizationPage = () => {
  return (
    <>
      <Metadata
        title="Createorganization"
        description="Createorganization page"
      />

      <h1>CreateorganizationPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/CreateorganizationPage/CreateorganizationPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>createorganization</code>, link to me
        with `<Link to={routes.createorganization()}>Createorganization</Link>`
      </p>
    </>
  )
}

export default CreateorganizationPage
