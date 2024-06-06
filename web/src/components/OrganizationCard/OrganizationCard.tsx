import { Link, routes } from '@redwoodjs/router'

import { Button } from 'src/components/ui/button'
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from 'src/components/ui/card'

import { Avatar, AvatarImage } from '../ui/avatar'

import Logo from './MiregoLogo.png'

import { FindOrganizationByOrganizationId } from '@/types/graphql'
interface Props {
  organization: NonNullable<FindOrganizationByOrganizationId['organization']>
}

const OrganizationCard = ({ organization }: Props) => {
  return (
    <Card className="m-5 w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-5">
        <CardTitle className="text-2xl font-bold">
          {organization.OrganizationName}
        </CardTitle>
        <Avatar className="mr-3 h-[4rem] w-[3.5rem] rounded-none">
          <AvatarImage alt="OrgLogo" src={Logo} />
        </Avatar>{' '}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2 text-xs font-bold text-muted-foreground">
          <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          <span>No. Employees</span>
        </div>
        <div className="flex gap-2 text-xs font-bold text-muted-foreground">
          <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          <span>Address</span>
          <span>{organization.Address}</span>
        </div>
        <div className="flex gap-2 text-xs font-bold text-muted-foreground">
          <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          <span>Email</span>
          <span>{organization.Email}</span>
        </div>
        <Link
          to={routes.dashboard({ id: organization.OrganizationId })}
          className="w-full"
        >
          <Button className="mt-5 h-8 w-full bg-[#03a550] hover:border hover:bg-white hover:text-muted-foreground">
            View
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default OrganizationCard

function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}
