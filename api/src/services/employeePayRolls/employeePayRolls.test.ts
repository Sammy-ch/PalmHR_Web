import type { EmployeePayRoll } from '@prisma/client'

import {
  employeePayRolls,
  employeePayRoll,
  createEmployeePayRoll,
  updateEmployeePayRoll,
  deleteEmployeePayRoll,
} from './employeePayRolls'
import type { StandardScenario } from './employeePayRolls.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employeePayRolls', () => {
  scenario(
    'returns all employeePayRolls',
    async (scenario: StandardScenario) => {
      const result = await employeePayRolls()

      expect(result.length).toEqual(
        Object.keys(scenario.employeePayRoll).length
      )
    }
  )

  scenario(
    'returns a single employeePayRoll',
    async (scenario: StandardScenario) => {
      const result = await employeePayRoll({
        id: scenario.employeePayRoll.one.id,
      })

      expect(result).toEqual(scenario.employeePayRoll.one)
    }
  )

  scenario('creates a employeePayRoll', async (scenario: StandardScenario) => {
    const result = await createEmployeePayRoll({
      input: { id: scenario.employeePayRoll.two.id, base_salary: 999229 },
    })

    expect(result.id).toEqual(scenario.employeePayRoll.two.id)
    expect(result.base_salary).toEqual(999229)
  })

  scenario('updates a employeePayRoll', async (scenario: StandardScenario) => {
    const original = (await employeePayRoll({
      id: scenario.employeePayRoll.one.id,
    })) as EmployeePayRoll
    const result = await updateEmployeePayRoll({
      id: original.id,
      input: { base_salary: 6241293 },
    })

    expect(result.base_salary).toEqual(6241293)
  })

  scenario('deletes a employeePayRoll', async (scenario: StandardScenario) => {
    const original = (await deleteEmployeePayRoll({
      id: scenario.employeePayRoll.one.id,
    })) as EmployeePayRoll
    const result = await employeePayRoll({ id: original.id })

    expect(result).toEqual(null)
  })
})
