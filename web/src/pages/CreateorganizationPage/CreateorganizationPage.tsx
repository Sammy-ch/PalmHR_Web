import { Form, Label, TextField, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import { Button } from 'src/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'

const CreateorganizationPage = () => {
  const onsubmit = (data) => {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Metadata
        title="Createorganization"
        description="Createorganization page"
      />

      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Create a new organization</CardTitle>
          <CardDescription>
            Organizations are where you can manage your team&apos;s components.
          </CardDescription>
        </CardHeader>

        <Form onSubmit={onsubmit}>
          <CardContent className="grid gap-4">
            <div className="flex flex-col space-y-2">
              <Label name="Organization" htmlFor="organization-name" />
              <TextField
                name="organization-name"
                id="organization-name"
                placeholder="Acme Inc"
                required
                className="rounded-md border p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label name="Address" htmlFor="address" />
              <TextField
                name="address"
                id="address"
                placeholder="Enter your address"
                required
                className="rounded-md border p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label name="Contact Name" htmlFor="contact-name" />
              <Input
                name="contact"
                id="contact-name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center gap-2 space-y-2">
                <Label name="Email" htmlFor="email" />
                <TextField
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded-md border p-2"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 space-y-2">
                <Label name="Phone" htmlFor="phone" />
                <TextField
                  name="num"
                  typeof="num"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="rounded-md border p-2"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Submit>
              <Button>Create organization</Button>
            </Submit>
          </CardFooter>
        </Form>
      </Card>
    </main>
  )
}

export default CreateorganizationPage
