import { LeafyGreen } from 'lucide-react'
import type {
  DeleteEmployeeLeaveFormMutation,
  DeleteEmployeeLeaveFormMutationVariables,
  FindEmployeeLeaveForms,
} from 'types/graphql'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'web/src/components/ui/avatar'
import { Button } from 'web/src/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'web/src/components/ui/table'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeLeaveForm/EmployeeLeaveFormsCell'

import EmployeeLeaveCard from '../../EmployeeLeaveCard/EmployeeLeaveCard'

const DELETE_EMPLOYEE_LEAVE_FORM_MUTATION: TypedDocumentNode<
  DeleteEmployeeLeaveFormMutation,
  DeleteEmployeeLeaveFormMutationVariables
> = gql`
  mutation DeleteEmployeeLeaveFormMutation($id: String!) {
    deleteEmployeeLeaveForm(id: $id) {
      id
    }
  }
`

const EmployeeLeaveFormsList = ({
  employeeLeaveForms,
  approvedEmployeeLeaveForms,
}: FindEmployeeLeaveForms) => {
  const [deleteEmployeeLeaveForm] = useMutation(
    DELETE_EMPLOYEE_LEAVE_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeLeaveForm deleted')
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

  const onDeleteClick = (
    id: DeleteEmployeeLeaveFormMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete employeeLeaveForm ' + id + '?')
    ) {
      deleteEmployeeLeaveForm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {approvedEmployeeLeaveForms.map((approvedLeave) => (
          <EmployeeLeaveCard
            key={approvedLeave.id}
            profileDp={approvedLeave.leave.profile_image}
            fullName={
              approvedLeave.leave.first_name +
              '' +
              approvedLeave.leave.last_name
            }
            position={approvedLeave.leave.position}
            leaveDuration={approvedLeave.leave_days}
            LeaveType={approvedLeave.leave_type}
            icon={LeafyGreen}
          />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Requested Leaves</h2>
        <div className="overflow-x-auto">
          <div className="rw-segment rw-table-wrapper-responsive">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Leave Type</TableHead>
                  <TableHead>Days</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeLeaveForms.map((employeeLeaveData) => (
                  <TableRow key={employeeLeaveData.id}>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-[50px] w-[50px]">
                          <AvatarImage
                            height={500}
                            width={500}
                            src={employeeLeaveData.leave.profile_image}
                            alt="@shadcn"
                            className="object-cover object-top"
                          />
                          <AvatarFallback>DP</AvatarFallback>
                        </Avatar>{' '}
                        <div>
                          <h3 className="font-semibold">
                            {employeeLeaveData.leave.first_name +
                              ' ' +
                              employeeLeaveData.leave.last_name}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {employeeLeaveData.leave.position}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <p className="text-blue-500">
                          {employeeLeaveData.leave_type}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <h4 className="text-2xl font-semibold">3</h4>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onDeleteClick(employeeLeaveData.id)}
                        >
                          Decline
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeLeaveFormsList
