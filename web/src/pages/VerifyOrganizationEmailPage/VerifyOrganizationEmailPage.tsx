import { Metadata } from '@redwoodjs/web'

import { Button } from 'src/components/ui/button'

const VerifyOrganizationEmailPage = () => {
  return (
    <>
      <Metadata
        title="VerifyOrganizationEmail"
        description="VerifyOrganizationEmail page"
      />

      <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Verify Your Organization Email
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              To continue using our platform, please verify your company email
              address.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                Verify Email
              </Button>
            </div>
          </form>
          <div className="rounded-md bg-muted p-6">
            <h3 className="text-lg font-medium text-foreground">
              Frequently Asked Questions
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li>
                <h4 className="font-medium text-foreground">
                  Why do I need to verify my email?
                </h4>
                <p>
                  Verifying your email helps us ensure that you are the
                  legitimate owner of the account and that your information is
                  secure.
                </p>
              </li>
              <li>
                <h4 className="font-medium text-foreground">
                  How long does the verification process take?
                </h4>
                <p>
                  The verification process is typically instant, but it may take
                  a few minutes in some cases.
                </p>
              </li>
              <li>
                <h4 className="font-medium text-foreground">
                  What if I can not access the email address?
                </h4>
                <p>
                  If you are unable to access the email address, please contact
                  our support team for assistance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyOrganizationEmailPage
