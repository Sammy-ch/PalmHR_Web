import { Button } from 'web/src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'web/src/components/ui/card'
import { Input } from 'web/src/components/ui/input'
import { Label } from 'web/src/components/ui/label'

import { Form, Submit, SubmitHandler, FieldError } from '@redwoodjs/forms'
import { Link } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

import logo from './palmhr_logo.png'

interface FormValues {
  Fname: string
  Lname: string
  email: string
  password: string | number
}

const SignupPage = () => {
  const { signUp } = useAuth()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Metadata title="Signup" description="Signup page" />
      <div className="py-10">
        <img src={logo} alt="" height={200} width={350} />
      </div>
      <Card className="nav mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form onSubmit={onSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="Fname"
                    placeholder="Max"
                    required
                  />
                  <FieldError name="Fname" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" name="Lname" placeholder="Robinson" />
                  <FieldError name="Lname" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
                <FieldError name="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" />
                <FieldError name="password" />
              </div>
              <Submit
                type="submit"
                className="h-10 w-full rounded-md border bg-black text-white"
                onClick={signUp}
              >
                Create an account
              </Submit>
              <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="#" className="underline">
                Sign in
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
}

export default SignupPage
