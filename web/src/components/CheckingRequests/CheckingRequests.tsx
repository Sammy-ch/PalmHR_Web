import { useEffect } from 'react'

import { createClient } from '@supabase/supabase-js'
import type {
  DeleteCheckingRequestMutation,
  DeleteCheckingRequestMutationVariables,
} from 'types/graphql'
import {
  AvatarImage,
  AvatarFallback,
  Avatar,
} from 'web/src/components/ui/avatar'
import { Badge } from 'web/src/components/ui/badge'
import { Button } from 'web/src/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from 'web/src/components/ui/dropdown-menu'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { FindCheckingRequests } from '@/types/graphql'

const DELETE_CHECKING_REQUEST_MUTATION: TypedDocumentNode<
  DeleteCheckingRequestMutation,
  DeleteCheckingRequestMutationVariables
> = gql`
  mutation DeleteCheckingRequestMutation($id: String!) {
    deleteCheckingRequest(id: $id) {
      id
    }
  }
`

const CheckingRequests = ({ checkingRequests }: FindCheckingRequests) => {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )
  useEffect(() => {
    const subscription = supabase
      .channel('checking_requests_queue')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'checking_requests',
        },
        (payload) => {
          if (payload) {
            console.log(payload)
            const newCheckingRequest = payload.new
            toast.success(
              `New CheckingRequest created added: ${newCheckingRequest.id}`
            )
          }
        }
      )
      .subscribe()

    subscription.subscribe()
  })

  const [deleteCheckingRequest] = useMutation(
    DELETE_CHECKING_REQUEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequest deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteCheckingRequestMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete checkingRequest ' + id + '?')
    ) {
      deleteCheckingRequest({ variables: { id } })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Pending Requests</h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <th className="px-6 py-3 font-medium">Employee</th>
                <th className="px-6 py-3 font-medium">Date/Time</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {checkingRequests.map((checkingRequest) => (
                <tr
                  key={checkingRequest.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <Avatar className="mr-3 h-8 w-8">
                        <AvatarImage
                          alt="profile"
                          src={checkingRequest.employee.profile_image}
                        />
                        <AvatarFallback>DP</AvatarFallback>
                      </Avatar>
                      <span>
                        {checkingRequest.employee.first_name}{' '}
                        {checkingRequest.employee.last_name}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {new Date(
                      checkingRequest.checking_date
                    ).toLocaleDateString()}{' '}
                    -{' '}
                    {checkingRequest.checking_time
                      ? new Date(
                          checkingRequest.checking_time
                        ).toLocaleTimeString('en-US', { timeZone: 'GMT' })
                      : '--:--:--'}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {checkingRequest.checking_type}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Badge variant="default">
                      {checkingRequest.checking_status}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Approve</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDeleteClick(checkingRequest.id)}
                        >
                          {' '}
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CheckingRequests

function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
