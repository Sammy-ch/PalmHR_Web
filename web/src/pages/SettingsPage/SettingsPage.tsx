import { Button } from 'web/src/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from 'web/src/components/ui/card'
import { Checkbox } from 'web/src/components/ui/checkbox'
import { Input } from 'web/src/components/ui/input'
// import { Label } from 'web/src/components/ui/label'

import { Form, Label, TextField, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

const newLocal = 'flex min-h-screen w-full flex-col'
const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />

      <div className={newLocal}>
        <main className="flex flex-1 flex-col gap-4  p-4  md:gap-8">
          <div className="grid w-full max-w-6xl gap-6">
            <Form>
              <Card>
                <CardHeader>
                  <CardTitle>General</CardTitle>
                  <CardDescription>
                    Update your general account settings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="flex items-center gap-5 space-y-2">
                      <Label name="Name" htmlFor="name">
                        Name
                      </Label>
                      <TextField
                        name="Name"
                        id="name"
                        placeholder="Enter your name"
                        className="rounded-sm border p-2"
                      />
                    </div>
                    <div className="flex items-center gap-5 space-y-2">
                      <Label name="Email" htmlFor="email">
                        Email
                      </Label>
                      <TextField
                        name="Email"
                        id="email"
                        placeholder="Enter your email"
                        className="rounded-sm border p-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label name="Password" htmlFor="password">
                        Password
                      </Label>
                      <Input
                        name="Password"
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <Button>
                    <Submit>Save</Submit>
                  </Button>
                </CardFooter>
              </Card>
            </Form>

            <Form>
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Manage your notification preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Checkbox defaultChecked id="email-notifications" />
                      <div className="space-y-1">
                        <Label
                          name="email-notifications"
                          htmlFor="email-notifications"
                        >
                          Email Notifications
                        </Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Receive email notifications for important updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Checkbox id="push-notifications" />
                      <div className="space-y-1">
                        <Label
                          name="push-notifications"
                          htmlFor="push-notifications"
                        >
                          Push Notifications
                        </Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Receive push notifications for real-time updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <Button>
                    <Submit>Save</Submit>
                  </Button>{' '}
                </CardFooter>
              </Card>
            </Form>
{/*
            <Form>
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>
                    Manage your account security settings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Checkbox id="two-factor-auth" />
                      <div className="space-y-1">
                        <Label name="two-factor" htmlFor="two-factor-auth">
                          Two-Factor Authentication
                        </Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Add an extra layer of security to your account.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Checkbox id="logout-on-idle" />
                      <div className="space-y-1">
                        <Label name="logout-idle" htmlFor="logout-on-idle">
                          Logout on Idle
                        </Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automatically log out after a period of inactivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <Button>
                    <Submit>Save</Submit>
                  </Button>{' '}
                </CardFooter>
              </Card>
            </Form> */}

            {/* <Form>
              <Card>
                <CardHeader>
                  <CardTitle>Integrations</CardTitle>
                  <CardDescription>
                    Manage your third-party integrations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Checkbox id="google-calendar" />
                      <div className="space-y-1">
                        <Label name="Google-calendar" htmlFor="google-calendar">
                          Google Calendar
                        </Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Sync your calendar events with the dashboard.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Checkbox id="slack-integration" />
                      <div className="space-y-1">
                        <Label
                          name="Slack-integration"
                          htmlFor="slack-integration"
                        >
                          Slack Integration
                        </Label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Receive notifications and updates in your Slack
                          workspace.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <Button>
                    <Submit>Save</Submit>
                  </Button>{' '}
                </CardFooter>
              </Card>
            </Form> */}
          </div>
        </main>
      </div>
    </>
  )
}

export default SettingsPage
