import { Button } from 'web/src/components/ui/button'
import { Input } from 'web/src/components/ui/input'
import { Textarea } from 'web/src/components/ui/textarea'

import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'
const ContactPage = () => {
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-44">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Contact Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in touch with Palm HR
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:mx-0">
                Have a question or need help with our HR management platform?
                Our friendly team is here to assist you.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  alt="Palm HR"
                  className="mr-2"
                  height="48"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '48/48',
                    objectFit: 'cover',
                  }}
                  width="48"
                />
                <span className="text-xl font-bold">Palm HR</span>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 dark:text-gray-200">
              <Form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label name="name" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label name="email" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label name="message" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    name="message"
                    className="min-h-[100px]"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-start gap-8 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Information
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p>123 Main St, Anytown USA</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p>+1 (555) 555-5555</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p>support@palmhr.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Location
              </h2>
              <img
                alt="Map"
                className="rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width="600"
              />
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default ContactPage

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
