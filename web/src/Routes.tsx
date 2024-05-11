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
      <Set wrap={ScaffoldLayout} title="Admins" titleTo="admins" buttonLabel="New Admin" buttonTo="newAdmin">
        <Route path="/admins/new" page={AdminNewAdminPage} name="newAdmin" />
        <Route path="/admins/{id}/edit" page={AdminEditAdminPage} name="editAdmin" />
        <Route path="/admins/{id}" page={AdminAdminPage} name="admin" />
        <Route path="/admins" page={AdminAdminsPage} name="admins" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Organizations" titleTo="organizations" buttonLabel="New Organization" buttonTo="newOrganization">
        <Route path="/organizations/new" page={OrganizationNewOrganizationPage} name="newOrganization" />
        <Route path="/organizations/{OrganizationId}/edit" page={OrganizationEditOrganizationPage} name="editOrganization" />
        <Route path="/organizations/{OrganizationId}" page={OrganizationOrganizationPage} name="organization" />
        <Route path="/organizations" page={OrganizationOrganizationsPage} name="organizations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EmployeeAttendanceReports" titleTo="employeeAttendanceReports" buttonLabel="New EmployeeAttendanceReport" buttonTo="newEmployeeAttendanceReport">
        <Route path="/employee-attendance-reports/new" page={EmployeeAttendanceReportNewEmployeeAttendanceReportPage} name="newEmployeeAttendanceReport" />
        <Route path="/employee-attendance-reports/{id}/edit" page={EmployeeAttendanceReportEditEmployeeAttendanceReportPage} name="editEmployeeAttendanceReport" />
        <Route path="/employee-attendance-reports/{id}" page={EmployeeAttendanceReportEmployeeAttendanceReportPage} name="employeeAttendanceReport" />
        <Route path="/employee-attendance-reports" page={EmployeeAttendanceReportEmployeeAttendanceReportsPage} name="employeeAttendanceReports" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EmployeeLeaveForms" titleTo="employeeLeaveForms" buttonLabel="New EmployeeLeaveForm" buttonTo="newEmployeeLeaveForm">
        <Route path="/employee-leave-forms/new" page={EmployeeLeaveFormNewEmployeeLeaveFormPage} name="newEmployeeLeaveForm" />
        <Route path="/employee-leave-forms/{id}/edit" page={EmployeeLeaveFormEditEmployeeLeaveFormPage} name="editEmployeeLeaveForm" />
        <Route path="/employee-leave-forms/{id}" page={EmployeeLeaveFormEmployeeLeaveFormPage} name="employeeLeaveForm" />
        <Route path="/employee-leave-forms" page={EmployeeLeaveFormEmployeeLeaveFormsPage} name="employeeLeaveForms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EmployeePayRolls" titleTo="employeePayRolls" buttonLabel="New EmployeePayRoll" buttonTo="newEmployeePayRoll">
        <Route path="/employee-pay-rolls/new" page={EmployeePayRollNewEmployeePayRollPage} name="newEmployeePayRoll" />
        <Route path="/employee-pay-rolls/{id}/edit" page={EmployeePayRollEditEmployeePayRollPage} name="editEmployeePayRoll" />
        <Route path="/employee-pay-rolls/{id}" page={EmployeePayRollEmployeePayRollPage} name="employeePayRoll" />
        <Route path="/employee-pay-rolls" page={EmployeePayRollEmployeePayRollsPage} name="employeePayRolls" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CheckingRequestQueues" titleTo="checkingRequestQueues" buttonLabel="New CheckingRequestQueue" buttonTo="newCheckingRequestQueue">
        <Route path="/checking-request-queues/new" page={CheckingRequestQueueNewCheckingRequestQueuePage} name="newCheckingRequestQueue" />
        <Route path="/checking-request-queues/{id}/edit" page={CheckingRequestQueueEditCheckingRequestQueuePage} name="editCheckingRequestQueue" />
        <Route path="/checking-request-queues/{id}" page={CheckingRequestQueueCheckingRequestQueuePage} name="checkingRequestQueue" />
        <Route path="/checking-request-queues" page={CheckingRequestQueueCheckingRequestQueuesPage} name="checkingRequestQueues" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EmployeeProfiles" titleTo="employeeProfiles" buttonLabel="New EmployeeProfile" buttonTo="newEmployeeProfile">
        <Route path="/employee-profiles/{profile_id}" page={EmployeeProfileEmployeeProfilePage} name="employeeProfile" />
      </Set>
      <Set wrap={ScaffoldLayout} title="AdminRoles" titleTo="adminRoles" buttonLabel="New AdminRole" buttonTo="newAdminRole">
        <Route path="/admin-roles/new" page={AdminRoleNewAdminRolePage} name="newAdminRole" />
        <Route path="/admin-roles/{id}/edit" page={AdminRoleEditAdminRolePage} name="editAdminRole" />
        <Route path="/admin-roles/{id}" page={AdminRoleAdminRolePage} name="adminRole" />
        <Route path="/admin-roles" page={AdminRoleAdminRolesPage} name="adminRoles" />
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

      <PrivateSet wrap={DashoardLayout} unauthenticated="home">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/attendance" page={AttendancePage} name="attendance" />
        <Route path="/performance" page={PerformancePage} name="performance" />
        <Route path="/reports" page={ReportsPage} name="reports" />
        <Route path="/employee-pay-rolls" page={EmployeePayRollEmployeePayRollsPage} name="employeePayRolls" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
