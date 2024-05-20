import { Form } from '@redwoodjs/forms'

import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
const CreateUserProfile = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="animated-background flex h-screen min-h-screen w-screen items-center justify-center bg-gradient-to-r from-green-300  to-green-200">
      <Form onSubmit={onSubmit}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Create User Profile</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    name="first-name"
                    id="first-name"
                    placeholder="Max"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    name="last-name"
                    id="last-name"
                    placeholder="Robinson"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {/* <Link to={routes.organizations()} className="underline">
                Sign in
              </Link> */}
            </div>
          </CardContent>
        </Card>
      </Form>{' '}
    </div>
  )
}

export default CreateUserProfile
