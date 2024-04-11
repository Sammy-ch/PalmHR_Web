// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import { Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import DashoardLayout from './layouts/DashoardLayout/DashoardLayout'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/pricing" page={PricingPage} name="pricing" />
      <Route path="/about" page={AboutPage} name="about" />
      <Set wrap={HomeLayout} >
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={DashoardLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/attendance" page={AttendancePage} name="attendance" />
        <Route path="/performance" page={PerformancePage} name="performance" />
        <Route path="/reports" page={ReportsPage} name="reports" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
