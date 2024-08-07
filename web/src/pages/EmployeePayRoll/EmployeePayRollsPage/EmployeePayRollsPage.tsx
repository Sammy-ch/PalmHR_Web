import { useState } from 'react'

import { useParams } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import EmployeePayRollsCell from 'src/components/EmployeePayRoll/EmployeePayRollsCell'
import Organizationpayrollsettingcard from 'src/components/Organizationpayrollsettingcard/Organizationpayrollsettingcard'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from 'src/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from 'src/components/ui/dialog'

const QUERY = gql`
  query FindOrganizationPayrollSetting($id: String!) {
    organizationPayrollSettingsByOrgId(org_id: $id) {
      org_id
    }
  }
`

const EmployeePayRollsPage = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id },
  })
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false)

  console.log(data)

  const closeDialog = () => {
    setIsSecondDialogOpen(false)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      {!data.organizationPayrollSettingByOrg && (
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Welcome to Employee Payrolls Tab
              </AlertDialogTitle>
              <AlertDialogDescription>
                Get Started by setting up your organization payroll settings.{' '}
                <br />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setIsSecondDialogOpen(true)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {data.organizationPayrollSettingByOrg && <EmployeePayRollsCell />}
      {isSecondDialogOpen && (
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Organization Payroll Settings</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <Organizationpayrollsettingcard
                org_id={id}
                onClose={closeDialog}
              />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default EmployeePayRollsPage
