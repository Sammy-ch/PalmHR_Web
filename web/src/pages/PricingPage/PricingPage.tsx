import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PricingPage = () => {
  return (
    <>
      <Metadata title="Pricing" description="Pricing page" />

      <h1>PricingPage</h1>
      <p>
        Find me in <code>./web/src/pages/PricingPage/PricingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>pricing</code>, link to me with `
        <Link to={routes.pricing()}>Pricing</Link>`
      </p>
    </>
  )
}

export default PricingPage
