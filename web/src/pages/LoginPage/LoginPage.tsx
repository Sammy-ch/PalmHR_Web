import { useEffect, useRef, useState } from 'react'

import {
  Form,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

const LoginPage = () => {
  const { client, logIn } = useAuth()

  const [userSession, setUserSession] = useState('')

  useEffect(() => {
    async function getUserSession() {
      const { data } = await client.auth.getSession()

      if (data) {
        setUserSession(data.session.user.id)
      }
    }

    getUserSession()
  }, [client])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      authMethod: 'password',
      email: data.email,
      password: data.password,
    })

    if (response.error) {
      toast(response.error.message)
    } else {
      toast.success('Welcome back!')
      navigate(routes.dashboard({ id: userSession }))
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your dashboard
            </p>
          </div>
          <Form onSubmit={onSubmit} className="">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  ref={emailRef}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Submit className="w-full rounded-md bg-black p-2 text-white">
                Login
              </Submit>
            </div>
          </Form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          alt="placeholder"
          src="/placeholder.svg"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default LoginPage

// <>
// <Metadata title="Login" />

// <main className="rw-main">
//   <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
//   <div className="rw-scaffold rw-login-container">
//     <div className="rw-segment">
//       <header className="rw-segment-header">
//         <h2 className="rw-heading rw-heading-secondary">Login</h2>
//       </header>

//       <div className="rw-segment-main">
//         <div className="rw-form-wrapper">
//           <Form onSubmit={onSubmit} className="rw-form-wrapper">
//             <Label
//               name="email"
//               className="rw-label"
//               errorClassName="rw-label rw-label-error"
//             >
//               Email
//             </Label>
//             <TextField
//               name="email"
//               className="rw-input"
//               errorClassName="rw-input rw-input-error"
//               ref={emailRef}
//               validation={{
//                 required: {
//                   value: true,
//                   message: 'Email is required',
//                 },
//               }}
//             />

//             <FieldError name="email" className="rw-field-error" />

//             <Label
//               name="password"
//               className="rw-label"
//               errorClassName="rw-label rw-label-error"
//             >
//               Password
//             </Label>
//             <PasswordField
//               name="password"
//               className="rw-input"
//               errorClassName="rw-input rw-input-error"
//               autoComplete="current-password"
//               validation={{
//                 required: {
//                   value: true,
//                   message: 'Password is required',
//                 },
//               }}
//             />

//             <div className="rw-forgot-link">
//               <Link
//                 to={routes.forgotPassword()}
//                 className="rw-forgot-link"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <FieldError name="password" className="rw-field-error" />

//             <div className="rw-button-group">
//               <Submit className="rw-button rw-button-blue">Login</Submit>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//     <div className="rw-login-link">
//       <span>Don&apos;t have an account?</span>{' '}
//       <Link to={routes.signup()} className="rw-link">
//         Sign up!
//       </Link>
//     </div>
//   </div>
// </main>
// </>
