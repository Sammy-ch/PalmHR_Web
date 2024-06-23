import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import type {
  DeleteCheckingRequestQueueMutation,
  DeleteCheckingRequestQueueMutationVariables,
  FindCheckingRequestQueues,
  CreateEmployeeAttendanceMutation,
  CreateEmployeeAttendanceMutationVariables,
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

import { QUERY } from 'src/components/CheckingRequestQueue/CheckingRequestQueuesCell'

const DELETE_CHECKING_REQUEST_QUEUE_MUTATION: TypedDocumentNode<
  DeleteCheckingRequestQueueMutation,
  DeleteCheckingRequestQueueMutationVariables
> = gql`
  mutation DeleteCheckingRequestQueueMutation($id: String!) {
    deleteCheckingRequestQueue(id: $id) {
      id
    }
  }
`

const ADD_EMPLOYEE_ATTENDANCE_MUTATION: TypedDocumentNode<
  CreateEmployeeAttendanceMutation,
  CreateEmployeeAttendanceMutationVariables
> = gql`
  mutation CreateEmployeeAttendanceMutation(
    $data: CreateEmployeeAttendanceInput!
  ) {
    createEmployeeAttendance(input: $data) {
      employee_id
      attendance_tag
      checkin_time
      checkout_time
      checking_date
    }
  }
`

const CheckingRequestQueuesList = ({
  checkingRequestQueues,
}: FindCheckingRequestQueues) => {
  const [deleteCheckingRequestQueue] = useMutation(
    DELETE_CHECKING_REQUEST_QUEUE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckingRequestQueue deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const [createEmployeeAttendance] = useMutation(
    ADD_EMPLOYEE_ATTENDANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendance approved')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (
    id: DeleteCheckingRequestQueueMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete checkingRequestQueue ' + id + '?'
      )
    ) {
      deleteCheckingRequestQueue({ variables: { id } })
    }
  }

  const approveCheckin = (
    checkingRequest: FindCheckingRequestQueues['checkingRequestQueues']
  ) => {
    if (
      confirm(
        'Are you sure you want to approve checkingRequestQueue ' +
          checkingRequest.id +
          '?'
      )
    ) {
      const employeeAttendanceData: CreateEmployeeAttendanceMutation['createEmployeeAttendance'] =
        {
          employee_id: checkingRequest.employee_id,
          checkin_time: checkingRequest.checking_time,
          checking_date: checkingRequest.checking_date,
          attendance_tag: 'PRESENT',
        }

      createEmployeeAttendance({ variables: { data: employeeAttendanceData } })
        .then(() => {
          // Delete the checking request after approving the check-in
          deleteCheckingRequestQueue({ variables: { id: checkingRequest.id } })
        })
        .catch((error) => {
          toast.error(error.message)
        })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold">
        Employee Check-In/Check-Out Requests
      </h1>
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
              {checkingRequestQueues.map((checkingRequest) => (
                <tr
                  className="border-b border-gray-200 dark:border-gray-700"
                  key={checkingRequest.employee_id}
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <Avatar className="mr-3 h-8 w-8">
                        {checkingRequest ? (
                          <AvatarImage
                            alt="John Doe"
                            src={checkingRequest.employee.profile_image}
                          />
                        ) : (
                          <AvatarFallback>DP</AvatarFallback>
                        )}
                      </Avatar>
                      <span>
                        {checkingRequest.employee.first_name +
                          ' ' +
                          checkingRequest.employee.last_name}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {new Date(checkingRequest.checking_date).toDateString()} -{' '}
                    {format(
                      toZonedTime(checkingRequest.checking_time, 'GMT'),
                      'p'
                    )}
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
                          <MoveHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => approveCheckin(checkingRequest)}
                        >
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDeleteClick(checkingRequest.id)}
                        >
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

export default CheckingRequestQueuesList

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}
