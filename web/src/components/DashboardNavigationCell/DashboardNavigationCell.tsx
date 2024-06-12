import {
  BookUp2,
  FilePieChart,
  Settings,
  HandCoins,
  UsersIcon,
  HomeIcon,
} from 'lucide-react'
import type {
  FindDashboardNavigationQuery,
  FindDashboardNavigationQueryVariables,
} from 'types/graphql'

import { NavLink, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { Skeleton } from '../ui/skeleton'

export const QUERY: TypedDocumentNode<
  FindDashboardNavigationQuery,
  FindDashboardNavigationQueryVariables
> = gql`
  query FindDashboardNavigationQuery($id: String!) {
    dashboardNavigation: organization(OrganizationId: $id) {
      OrganizationId
    }
  }
`

export const Loading = () => {
  return (
    <main className="grid items-start gap-5 px-2 lg:px-4">
      <Skeleton className="h-7 w-full bg-slate-300" />
      <Skeleton className="h-7 w-full bg-slate-300" />
      <Skeleton className="h-7 w-full bg-slate-300" />
      <Skeleton className="h-7 w-full bg-slate-300" />
      <Skeleton className="h-7 w-full bg-slate-300" />
      <Skeleton className="h-7 w-full bg-slate-300" />
    </main>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDashboardNavigationQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  dashboardNavigation,
}: CellSuccessProps<
  FindDashboardNavigationQuery,
  FindDashboardNavigationQueryVariables
>) => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <NavLink
        to={routes.dashboard({ id: dashboardNavigation.OrganizationId })}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        activeClassName="bg-muted text-slate-800"
      >
        <HomeIcon className="h-4 w-4" />
        Dashboard
      </NavLink>
      <NavLink
        to={routes.reports({ id: dashboardNavigation.OrganizationId })}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        activeClassName="bg-muted text-slate-800"
      >
        <BookUp2 className="h-4 w-4" />
        Reports
      </NavLink>
      <NavLink
        to={routes.performance({ id: dashboardNavigation.OrganizationId })}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        activeClassName="bg-muted text-slate-800"
      >
        <UsersIcon className="h-4 w-4" />
        Employee Stats
      </NavLink>
      <NavLink
        to={routes.attendance({ id: dashboardNavigation.OrganizationId })}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        activeClassName="bg-muted text-slate-800"
      >
        <FilePieChart className="h-4 w-4" />
        Leave Management
      </NavLink>
      <NavLink
        to={routes.employeePayRolls({ id: dashboardNavigation.OrganizationId })}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        activeClassName="bg-muted text-slate-800"
      >
        <HandCoins className="h-4 w-4" />
        Payroll
      </NavLink>
      <NavLink
        to={routes.settings({ id: dashboardNavigation.OrganizationId })}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        activeClassName="bg-muted text-slate-800"
      >
        <Settings className="h-4 w-4" />
        Settings
      </NavLink>
    </nav>
  )
}
