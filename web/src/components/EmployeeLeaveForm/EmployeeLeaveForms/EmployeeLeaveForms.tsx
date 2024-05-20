import { LeafyGreen } from 'lucide-react'
import type {
  EditEmployeeLeaveFormById,
  FindEmployeeLeaveFormById,
  FindEmployeeLeaveForms,
  UpdateEmployeeLeaveFormMutationVariables,
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

const UPDATE_EMPLOYEE_LEAVE_FORM_MUTATION: TypedDocumentNode<
  FindEmployeeLeaveFormById,
  UpdateEmployeeLeaveFormMutationVariables
> = gql`
  mutation UpdateEmployeeLeaveFormMutation(
    $id: String!
    $input: UpdateEmployeeLeaveFormInput!
  ) {
    updateEmployeeLeaveForm(id: $id, input: $input) {
      id
      leave_approval
    }
  }
`

const EmployeeLeaveFormsList = ({
  employeeLeaveForms,
  approvedEmployeeLeaveForms,
}: FindEmployeeLeaveForms) => {
  const [updateEmployeeLeaveForm] = useMutation(
    UPDATE_EMPLOYEE_LEAVE_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('Leave Request has been approved')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onApproveClick = (
    id: EditEmployeeLeaveFormById['employeeLeaveForm']['id']
  ) => {
    if (confirm('Do you want to approve this leave request?')) {
      updateEmployeeLeaveForm({
        variables: {
          id,
          input: { leave_approval: true },
        },
      })
    }
  }

  const onDeclineClick = (
    id: UpdateEmployeeLeaveFormMutationVariables['id']
  ) => {
    if (confirm('Do you want to approve this leave request?')) {
      updateEmployeeLeaveForm({
        variables: {
          id,
          input: { leave_approval: false },
        },
      })
    }
  }

  const filteredEmployeeLeaveForms = employeeLeaveForms.filter(
    (leave) => leave.leave_approval !== true
  )

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
                {filteredEmployeeLeaveForms.map((employeeLeaveData) => (
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
                      {employeeLeaveData.leave_approval === null ? (
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onApproveClick(employeeLeaveData.id)}
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onDeclineClick(employeeLeaveData.id)}
                          >
                            Decline
                          </Button>
                        </div>
                      ) : employeeLeaveData.leave_approval === true ? (
                        'Approved'
                      ) : (
                        'Declined'
                      )}
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
