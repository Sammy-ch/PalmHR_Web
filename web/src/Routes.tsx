// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import { PrivateSet, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import DashoardLayout from './layouts/DashoardLayout/DashoardLayout'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="PayRolls" titleTo="payRolls" buttonLabel="New PayRoll" buttonTo="newPayRoll">
        <Route path="/pay-rolls/new" page={PayRollNewPayRollPage} name="newPayRoll" />
        <Route path="/pay-rolls/{id}/edit" page={PayRollEditPayRollPage} name="editPayRoll" />
        <Route path="/pay-rolls/{id}" page={PayRollPayRollPage} name="payRoll" />
        <Route path="/pay-rolls" page={PayRollPayRollsPage} name="payRolls" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CheckingRequests" titleTo="checkingRequests" buttonLabel="New CheckingRequest" buttonTo="newCheckingRequest">
        <Route path="/checking-requests/new" page={CheckingRequestNewCheckingRequestPage} name="newCheckingRequest" />
        <Route path="/checking-requests/{id}/edit" page={CheckingRequestEditCheckingRequestPage} name="editCheckingRequest" />
        <Route path="/checking-requests/{id}" page={CheckingRequestCheckingRequestPage} name="checkingRequest" />
        <Route path="/checking-requests" page={CheckingRequestCheckingRequestsPage} name="checkingRequests" />
      </Set>
      <Set wrap={ScaffoldLayout} title="LeaveCustoms" titleTo="leaveCustoms" buttonLabel="New LeaveCustom" buttonTo="newLeaveCustom">
        <Route path="/leave-customs/new" page={LeaveCustomNewLeaveCustomPage} name="newLeaveCustom" />
        <Route path="/leave-customs/{id}/edit" page={LeaveCustomEditLeaveCustomPage} name="editLeaveCustom" />
        <Route path="/leave-customs/{id}" page={LeaveCustomLeaveCustomPage} name="leaveCustom" />
        <Route path="/leave-customs" page={LeaveCustomLeaveCustomsPage} name="leaveCustoms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EmployeeAttendances" titleTo="employeeAttendances" buttonLabel="New EmployeeAttendance" buttonTo="newEmployeeAttendance">
        <Route path="/employee-attendances/new" page={EmployeeAttendanceNewEmployeeAttendancePage} name="newEmployeeAttendance" />
        <Route path="/employee-attendances/{attendance_id}/edit" page={EmployeeAttendanceEditEmployeeAttendancePage} name="editEmployeeAttendance" />
        <Route path="/employee-attendances/{attendance_id}" page={EmployeeAttendanceEmployeeAttendancePage} name="employeeAttendance" />
        <Route path="/employee-attendances" page={EmployeeAttendanceEmployeeAttendancesPage} name="employeeAttendances" />
      </Set>
      <Set title="EmployeeProfiles" titleTo="employeeProfiles" buttonLabel="New EmployeeProfile" buttonTo="newEmployeeProfile">
        <Route path="/employee-profiles/new" page={EmployeeProfileNewEmployeeProfilePage} name="newEmployeeProfile" />
        <Route path="/employee-profiles/{profile_id}/edit" page={EmployeeProfileEditEmployeeProfilePage} name="editEmployeeProfile" />
        <Route path="/performance/{profile_id}" page={EmployeeProfileEmployeeProfilePage} name="employeeProfile" />
        <Route path="/employee-profiles" page={EmployeeProfileEmployeeProfilesPage} name="employeeProfiles" />
      </Set>
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/pricing" page={PricingPage} name="pricing" />
        <Route path="/about" page={AboutPage} name="about" />
      </Set>

      <Set wrap={DashoardLayout} >
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/attendance" page={AttendancePage} name="attendance" />
        <Route path="/performance" page={PerformancePage} name="performance" />
        <Route path="/reports" page={ReportsPage} name="reports" />
        <Route path="/pay-rolls" page={PayRollPayRollsPage} name="payRolls" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
