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
      <Set wrap={ScaffoldLayout} title="EmployeePayRolls" titleTo="employeePayRolls" buttonLabel="New EmployeePayRoll" buttonTo="newEmployeePayRoll">
        <Route path="/employee-pay-rolls" page={EmployeePayRollEmployeePayRollsPage} name="employeePayRolls" />
      </Set>
      <Set wrap={ScaffoldLayout} title="OrganizationPayrollSettings" titleTo="organizationPayrollSettings" buttonLabel="New OrganizationPayrollSetting" buttonTo="newOrganizationPayrollSetting">
        <Route path="/organization-payroll-settings/new" page={OrganizationPayrollSettingNewOrganizationPayrollSettingPage} name="newOrganizationPayrollSetting" />
        <Route path="/organization-payroll-settings/{id}/edit" page={OrganizationPayrollSettingEditOrganizationPayrollSettingPage} name="editOrganizationPayrollSetting" />
        <Route path="/organization-payroll-settings/{id}" page={OrganizationPayrollSettingOrganizationPayrollSettingPage} name="organizationPayrollSetting" />
        <Route path="/organization-payroll-settings" page={OrganizationPayrollSettingOrganizationPayrollSettingsPage} name="organizationPayrollSettings" />
      </Set>
      <Route path="/verify-organization-email" page={VerifyOrganizationEmailPage} name="verifyOrganizationEmail" />

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="UserAccounts" titleTo="userAccounts" buttonLabel="New UserAccount" buttonTo="newUserAccount">
        <Route path="/user-accounts/new" page={UserAccountNewUserAccountPage} name="newUserAccount" />
        <Route path="/user-accounts/{id}/edit" page={UserAccountEditUserAccountPage} name="editUserAccount" />
        <Route path="/user-accounts/{id}" page={UserAccountUserAccountPage} name="userAccount" />
        <Route path="/user-accounts" page={UserAccountUserAccountsPage} name="userAccounts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="PayRollSettings" titleTo="payRollSettings" buttonLabel="New PayRollSetting" buttonTo="newPayRollSetting">
        <Route path="/pay-roll-settings/new" page={PayRollSettingNewPayRollSettingPage} name="newPayRollSetting" />
        <Route path="/pay-roll-settings/{id}/edit" page={PayRollSettingEditPayRollSettingPage} name="editPayRollSetting" />
        <Route path="/pay-roll-settings/{id}" page={PayRollSettingPayRollSettingPage} name="payRollSetting" />
        <Route path="/pay-roll-settings" page={PayRollSettingPayRollSettingsPage} name="payRollSettings" />
      </Set>
      <Set title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="EmployeeAttendances" titleTo="employeeAttendances" buttonLabel="New EmployeeAttendance" buttonTo="newEmployeeAttendance">
        <Route path="/employee-attendances/new" page={EmployeeAttendanceNewEmployeeAttendancePage} name="newEmployeeAttendance" />
        <Route path="/employee-attendances/{attendance_id}/edit" page={EmployeeAttendanceEditEmployeeAttendancePage} name="editEmployeeAttendance" />
        <Route path="/employee-attendances/{attendance_id}" page={EmployeeAttendanceEmployeeAttendancePage} name="employeeAttendance" />
        <Route path="/employee-attendances" page={EmployeeAttendanceEmployeeAttendancesPage} name="employeeAttendances" />
      </Set>
      <Set wrap={DashoardLayout} title="EmployeeProfiles" titleTo="employeeProfiles" buttonLabel="New EmployeeProfile" buttonTo="newEmployeeProfile">
        <Route path="/employee-profiles/new" page={EmployeeProfileNewEmployeeProfilePage} name="newEmployeeProfile" />
        <Route path="/employee-profiles/{profile_id}/edit" page={EmployeeProfileEditEmployeeProfilePage} name="editEmployeeProfile" />
        <Route path="/employee-profiles/{profile_id}" page={EmployeeProfileEmployeeProfilePage} name="employeeProfile" />
        <Route path="/employee-profiles" page={EmployeeProfileEmployeeProfilesPage} name="employeeProfiles" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Admins" titleTo="admins" buttonLabel="New Admin" buttonTo="newAdmin">
        <Route path="/admins/new" page={AdminNewAdminPage} name="newAdmin" />
        <Route path="/admins/{id}/edit" page={AdminEditAdminPage} name="editAdmin" />
        <Route path="/admins/{id}" page={AdminAdminPage} name="admin" />
        <Route path="/admins" page={AdminAdminsPage} name="admins" />
      </Set>
      <PrivateSet unauthenticated="home">
        <Route path="/organization/new" page={OrganizationNewOrganizationPage} name="newOrganization" />
        <Route path="/organizations/{OrganizationId}/edit" page={OrganizationEditOrganizationPage} name="editOrganization" />
        <Route path="/organization/{OrganizationId}" page={OrganizationOrganizationPage} name="organization" />
      </PrivateSet>
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
      </Set>
      <Set wrap={ScaffoldLayout} title="CheckingRequestQueues" titleTo="checkingRequestQueues" buttonLabel="New CheckingRequestQueue" buttonTo="newCheckingRequestQueue">
        <Route path="/checking-request-queues/new" page={CheckingRequestQueueNewCheckingRequestQueuePage} name="newCheckingRequestQueue" />
        <Route path="/checking-request-queues/{id}/edit" page={CheckingRequestQueueEditCheckingRequestQueuePage} name="editCheckingRequestQueue" />
        <Route path="/checking-request-queues/{id}" page={CheckingRequestQueueCheckingRequestQueuePage} name="checkingRequestQueue" />
        <Route path="/checking-request-queues" page={CheckingRequestQueueCheckingRequestQueuesPage} name="checkingRequestQueues" />
      </Set>

      <Set wrap={ScaffoldLayout} title="AdminRoles" titleTo="adminRoles" buttonLabel="New AdminRole" buttonTo="newAdminRole">
        <Route path="/admin-roles/new" page={AdminRoleNewAdminRolePage} name="newAdminRole" />
        <Route path="/admin-roles/{id}/edit" page={AdminRoleEditAdminRolePage} name="editAdminRole" />
        <Route path="/admin-roles/{id}" page={AdminRoleAdminRolePage} name="adminRole" />
        <Route path="/admin-roles" page={AdminRoleAdminRolesPage} name="adminRoles" />
      </Set>

      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/pricing" page={PricingPage} name="pricing" />
        <Route path="/about" page={AboutPage} name="about" />
      </Set>

      <PrivateSet wrap={DashoardLayout} unauthenticated="home" prerender={true}>
        <Route path="/dashboard/organization/{id}" page={DashboardPage} name="dashboard" />
        <Route path="/dashboard/reports/{id}" page={ReportsPage} name="reports" />
        <Route path="/dashboard/employee-stats/{id}" page={PerformancePage} name="performance" />
        <Route path="/organization/attendance/{id}" page={AttendancePage} name="attendance" />
        <Route path="/organization/pay-rolls/{id}" page={EmployeePayRollEmployeePayRollsPage} name="employeePayRolls" />
        <Route path="/organization/settings/{id}" page={SettingsPage} name="settings" />
        <Route path="/organization/pay-rolls/{id}/new" page={EmployeePayRollNewEmployeePayRollPage} name="newEmployeePayRoll" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
