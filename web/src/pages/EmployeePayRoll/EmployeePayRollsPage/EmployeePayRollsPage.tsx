import { useEffect, useState } from 'react'

import type { EditOrganizationPayrollSettingById } from 'types/graphql'

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
import { Button } from 'src/components/ui/button' // Import the Button component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from 'src/components/ui/dialog'
import UpdateOrganizationpayrollsettingcard from 'src/components/UpdateOrganizationpayrollsettingcard/UpdateOrganizationpayrollsettingcard'

const QUERY = gql`
  query FindOrganizationPayrollSetting($id: String!) {
    organizationPayrollSetting(org_id: $id) {
      id
      org_id
      INSS
      INSS_patronal
      INSS_risque
      housing
      medical_insurance
      transportation
    }
  }
`

const EmployeePayRollsPage = () => {
  const { id } = useParams()
  const [payrollSettings, setPayrollSettings] =
    useState<EditOrganizationPayrollSettingById['organizationPayrollSetting']>()
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false)

  const { data, loading, error } = useQuery(QUERY, {
    variables: { id },
  })

  useEffect(() => {
    if (data) {
      setPayrollSettings(data.organizationPayrollSetting)
    }
  }, [data])

  const openDialog = () => {
    setIsSecondDialogOpen(true)
  }

  const closeDialog = () => {
    setIsSecondDialogOpen(false)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      {!payrollSettings && (
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
              <AlertDialogAction onClick={openDialog}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Employee Payrolls</h1>
        <Button onClick={openDialog}>
          {payrollSettings ? 'Payroll Settings' : 'Set Payroll Settings'}
        </Button>
      </div>
      {<EmployeePayRollsCell />}
      {isSecondDialogOpen && (
        <Dialog open={isSecondDialogOpen} onOpenChange={setIsSecondDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Organization Payroll Settings</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              {payrollSettings ? (
                <UpdateOrganizationpayrollsettingcard
                  id={payrollSettings.id}
                  onClose={closeDialog}
                  organizationPayrollSettings={payrollSettings}
                />
              ) : (
                <Organizationpayrollsettingcard
                  org_id={id}
                  onClose={closeDialog}
                />
              )}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default EmployeePayRollsPage
