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
      <Set wrap={ScaffoldLayout} title="AdminRoles" titleTo="adminRoles" buttonLabel="New AdminRole" buttonTo="newAdminRole">
        <Route path="/admin-roles/new" page={AdminRoleNewAdminRolePage} name="newAdminRole" />
        <Route path="/admin-roles/{id}/edit" page={AdminRoleEditAdminRolePage} name="editAdminRole" />
        <Route path="/admin-roles/{id}" page={AdminRoleAdminRolePage} name="adminRole" />
        <Route path="/admin-roles" page={AdminRoleAdminRolesPage} name="adminRoles" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Admins" titleTo="admins" buttonLabel="New Admin" buttonTo="newAdmin">
        <Route path="/admins/new" page={AdminNewAdminPage} name="newAdmin" />
        <Route path="/admins/{id:Int}/edit" page={AdminEditAdminPage} name="editAdmin" />
        <Route path="/admins/{id:Int}" page={AdminAdminPage} name="admin" />
        <Route path="/admins" page={AdminAdminsPage} name="admins" />
      </Set>
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />

      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/pricing" page={PricingPage} name="pricing" />
        <Route path="/about" page={AboutPage} name="about" />
      </Set>

      <PrivateSet unauthenticated="home">
        <Route path="/createorganization" page={CreateorganizationPage} name="createorganization" />
      </PrivateSet>

      <PrivateSet wrap={DashoardLayout} unauthenticated="home">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/attendance" page={AttendancePage} name="attendance" />
        <Route path="/performance" page={PerformancePage} name="performance" />
        <Route path="/reports" page={ReportsPage} name="reports" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
