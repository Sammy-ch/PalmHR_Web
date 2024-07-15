import type { EmployeeLeaveForm } from '@prisma/client'

import {
  employeeLeaveForms,
  employeeLeaveForm,
  createEmployeeLeaveForm,
  updateEmployeeLeaveForm,
  deleteEmployeeLeaveForm,
} from './employeeLeaveForms'
import type { StandardScenario } from './employeeLeaveForms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employeeLeaveForms', () => {
  scenario(
    'returns all employeeLeaveForms',
    async (scenario: StandardScenario) => {
      const result = await employeeLeaveForms()

      expect(result.length).toEqual(
        Object.keys(scenario.employeeLeaveForm).length
      )
    }
  )

  scenario(
    'returns a single employeeLeaveForm',
    async (scenario: StandardScenario) => {
      const result = await employeeLeaveForm({
        id: scenario.employeeLeaveForm.one.id,
      })

      expect(result).toEqual(scenario.employeeLeaveForm.one)
    }
  )

  scenario('creates a employeeLeaveForm', async () => {
    const result = await createEmployeeLeaveForm({
      input: {
        requested_leave_date: '2024-06-25T09:25:20.993Z',
        leave_type: 'PERSONAL',
        leave_start: '2024-06-25T09:25:20.993Z',
        leave_end: '2024-06-25T09:25:20.993Z',
        leave_status: 'APPROVED',
      },
    })

    expect(result.requested_leave_date).toEqual(
      new Date('2024-06-25T09:25:20.993Z')
    )
    expect(result.leave_type).toEqual('PERSONAL')
    expect(result.leave_start).toEqual(new Date('2024-06-25T09:25:20.993Z'))
    expect(result.leave_end).toEqual(new Date('2024-06-25T09:25:20.993Z'))
    expect(result.leave_status).toEqual('APPROVED')
  })

  scenario(
    'updates a employeeLeaveForm',
    async (scenario: StandardScenario) => {
      const original = (await employeeLeaveForm({
        id: scenario.employeeLeaveForm.one.id,
      })) as EmployeeLeaveForm
      const result = await updateEmployeeLeaveForm({
        id: original.id,
        input: { requested_leave_date: '2024-06-26T09:25:20.993Z' },
      })

      expect(result.requested_leave_date).toEqual(
        new Date('2024-06-26T09:25:20.993Z')
      )
    }
  )

  scenario(
    'deletes a employeeLeaveForm',
    async (scenario: StandardScenario) => {
      const original = (await deleteEmployeeLeaveForm({
        id: scenario.employeeLeaveForm.one.id,
      })) as EmployeeLeaveForm
      const result = await employeeLeaveForm({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
