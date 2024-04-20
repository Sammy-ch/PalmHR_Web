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
import { Label } from 'src/components/ui/label'

const CreateorganizationPage = () => {
  return (
    <>
      <Metadata
        title="Createorganization"
        description="Createorganization page"
      />

      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-lg">Create a new organization</CardTitle>
          <CardDescription>
            Organizations are where you can manage your team&apos;s components.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="organization-name">Organization name</Label>
            <Input id="organization-name" placeholder="Acme Inc" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-name">Contact person&apos;s name</Label>
            <Input id="contact-name" placeholder="Enter your name" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="default">Create organization</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default CreateorganizationPage
