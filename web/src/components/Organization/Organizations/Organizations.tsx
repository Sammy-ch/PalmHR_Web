import type {
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables,
  FindOrganizations,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Organization/OrganizationsCell'
import { Button } from 'src/components/ui/button'
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from 'src/components/ui/card'
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from 'src/components/ui/dropdown-menu'

const DELETE_ORGANIZATION_MUTATION: TypedDocumentNode<
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables
> = gql`
  mutation DeleteOrganizationMutation($OrganizationId: String!) {
    deleteOrganization(OrganizationId: $OrganizationId) {
      OrganizationId
    }
  }
`

const OrganizationsList = ({ organizations }: FindOrganizations) => {
  const [deleteOrganization] = useMutation(DELETE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('Organization deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (
    OrganizationId: DeleteOrganizationMutationVariables['OrganizationId']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete organization ' + OrganizationId + '?'
      )
    ) {
      deleteOrganization({ variables: { OrganizationId } })
    }
  }

  return (
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Organization id</th>
    //         <th>Organization name</th>
    //         <th>Address</th>
    //         <th>Email</th>
    //         <th>Phone</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {organizations.map((organization) => (
    //         <tr key={organization.OrganizationId}>
    //           <td>{truncate(organization.OrganizationId)}</td>
    //           <td>{truncate(organization.OrganizationName)}</td>
    //           <td>{truncate(organization.Address)}</td>
    //           <td>{truncate(organization.Email)}</td>
    //           <td>{truncate(organization.Phone)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.organization({
    //                   OrganizationId: organization.OrganizationId,
    //                 })}
    //                 title={
    //                   'Show organization ' +
    //                   organization.OrganizationId +
    //                   ' detail'
    //                 }
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editOrganization({
    //                   OrganizationId: organization.OrganizationId,
    //                 })}
    //                 title={'Edit organization ' + organization.OrganizationId}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete organization ' + organization.OrganizationId}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(organization.OrganizationId)}
    //               >
    //                 Delete
    //               </button>
    //             </nav>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="flex-col items-center gap-6 text-lg font-medium md:flex md:flex-row md:gap-5 md:text-sm lg:gap-6">
          <Link
            to={routes.home()}
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">PALM HR</span>
          </Link>
          <Link
            to={routes.organizations()}
            className="text-foreground transition-colors hover:text-foreground"
            href="#"
          >
            Organizations
          </Link>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="secondary">
                <CircleUserIcon className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold">MIREGO AFRICA</CardTitle>
              <ActivityIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex gap-2 text-xs font-bold text-muted-foreground">
                <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                <span>No. Employees</span>
              </div>
              <div className="flex gap-2 text-xs font-bold text-muted-foreground">
                <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                <span>Address</span>
              </div>
              <div className="flex gap-2 text-xs font-bold text-muted-foreground">
                <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                <span>Email</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default OrganizationsList

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

function CircleUserIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}
