import type { EmployeeAttendanceReport } from '@prisma/client'

import {
  employeeAttendanceReports,
  employeeAttendanceReport,
  createEmployeeAttendanceReport,
  updateEmployeeAttendanceReport,
  deleteEmployeeAttendanceReport,
} from './employeeAttendanceReports'
import type { StandardScenario } from './employeeAttendanceReports.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employeeAttendanceReports', () => {
  scenario(
    'returns all employeeAttendanceReports',
    async (scenario: StandardScenario) => {
      const result = await employeeAttendanceReports()

      expect(result.length).toEqual(
        Object.keys(scenario.employeeAttendanceReport).length
      )
    }
  )

  scenario(
    'returns a single employeeAttendanceReport',
    async (scenario: StandardScenario) => {
      const result = await employeeAttendanceReport({
        id: scenario.employeeAttendanceReport.one.id,
      })

      expect(result).toEqual(scenario.employeeAttendanceReport.one)
    }
  )

  scenario(
    'creates a employeeAttendanceReport',
    async (scenario: StandardScenario) => {
      const result = await createEmployeeAttendanceReport({
        input: {
          employee_id: scenario.employeeAttendanceReport.two.employee_id,
          TotalOvertime: '2024-05-11T12:43:36.042Z',
          TotalWorkhours: '2024-05-11T12:43:36.042Z',
          TotalSickLeaves: '2024-05-11T12:43:36.042Z',
          AbstenteeismRate: 7153819,
          EarlyAttendaceRate: 498992,
          LateAttedanceRate: 1646673,
        },
      })

      expect(result.employee_id).toEqual(
        scenario.employeeAttendanceReport.two.employee_id
      )
      expect(result.TotalOvertime).toEqual(new Date('2024-05-11T12:43:36.042Z'))
      expect(result.TotalWorkhours).toEqual(
        new Date('2024-05-11T12:43:36.042Z')
      )
      expect(result.TotalSickLeaves).toEqual(
        new Date('2024-05-11T12:43:36.042Z')
      )
      expect(result.AbstenteeismRate).toEqual(7153819)
      expect(result.EarlyAttendaceRate).toEqual(498992)
      expect(result.LateAttedanceRate).toEqual(1646673)
    }
  )

  scenario(
    'updates a employeeAttendanceReport',
    async (scenario: StandardScenario) => {
      const original = (await employeeAttendanceReport({
        id: scenario.employeeAttendanceReport.one.id,
      })) as EmployeeAttendanceReport
      const result = await updateEmployeeAttendanceReport({
        id: original.id,
        input: { TotalOvertime: '2024-05-12T12:43:36.042Z' },
      })

      expect(result.TotalOvertime).toEqual(new Date('2024-05-12T12:43:36.042Z'))
    }
  )

  scenario(
    'deletes a employeeAttendanceReport',
    async (scenario: StandardScenario) => {
      const original = (await deleteEmployeeAttendanceReport({
        id: scenario.employeeAttendanceReport.one.id,
      })) as EmployeeAttendanceReport
      const result = await employeeAttendanceReport({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
