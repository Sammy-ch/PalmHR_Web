import { BookUp2, FilePieChart, Settings, HandCoins } from 'lucide-react'
import DashboardHeader from 'web/src/components/DashboardHeader/DashboardHeader'

import { routes, Link } from '@redwoodjs/router'

import Navigation from 'src/components/Navigation/Navigation'
import { Badge } from 'src/components/ui/badge'
import { Button } from 'src/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from 'src/components/ui/card'

type UserDashboardLayoutProps = {
  children?: React.ReactNode
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {
  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              to={routes.dashboard()}
              className="flex items-center gap-2 font-semibold"
              href="#"
            >
              <h1>User Dashboard</h1>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <h1>Organizations</h1>
              <Link
                to={routes.organizations()}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                All Organizations
              </Link>

              <div className="mt-5 border-t-2 pt-2">
                <h1>Account</h1>
                <Link
                  to={routes.organizations()}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  Security{' '}
                </Link>
                <Link
                  to={routes.settings()}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  Settings{' '}
                </Link>
              </div>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <Button className="w-full" size="sm">
                Log Out
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </main>
  )
}

export default UserDashboardLayout
