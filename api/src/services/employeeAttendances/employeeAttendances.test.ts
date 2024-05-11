import type { EmployeeAttendance } from '@prisma/client'

import {
  employeeAttendances,
  employeeAttendance,
  createEmployeeAttendance,
  updateEmployeeAttendance,
  deleteEmployeeAttendance,
} from './employeeAttendances'
import type { StandardScenario } from './employeeAttendances.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employeeAttendances', () => {
  scenario(
    'returns all employeeAttendances',
    async (scenario: StandardScenario) => {
      const result = await employeeAttendances()

      expect(result.length).toEqual(
        Object.keys(scenario.employeeAttendance).length
      )
    }
  )

  scenario(
    'returns a single employeeAttendance',
    async (scenario: StandardScenario) => {
      const result = await employeeAttendance({
        attendance_id: scenario.employeeAttendance.one.attendance_id,
      })

      expect(result).toEqual(scenario.employeeAttendance.one)
    }
  )

  scenario(
    'creates a employeeAttendance',
    async (scenario: StandardScenario) => {
      const result = await createEmployeeAttendance({
        input: {
          employee_id: scenario.employeeAttendance.two.employee_id,
          attendance_tag: 'PRESENT',
        },
      })

      expect(result.employee_id).toEqual(
        scenario.employeeAttendance.two.employee_id
      )
      expect(result.attendance_tag).toEqual('PRESENT')
    }
  )

  scenario(
    'updates a employeeAttendance',
    async (scenario: StandardScenario) => {
      const original = (await employeeAttendance({
        attendance_id: scenario.employeeAttendance.one.attendance_id,
      })) as EmployeeAttendance
      const result = await updateEmployeeAttendance({
        attendance_id: original.attendance_id,
        input: { attendance_tag: 'ABSENT' },
      })

      expect(result.attendance_tag).toEqual('ABSENT')
    }
  )

  scenario(
    'deletes a employeeAttendance',
    async (scenario: StandardScenario) => {
      const original = (await deleteEmployeeAttendance({
        attendance_id: scenario.employeeAttendance.one.attendance_id,
      })) as EmployeeAttendance
      const result = await employeeAttendance({
        attendance_id: original.attendance_id,
      })

      expect(result).toEqual(null)
    }
  )
})
