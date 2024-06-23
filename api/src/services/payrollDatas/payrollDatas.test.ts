import type { PayrollData } from '@prisma/client'

import {
  payrollDatas,
  payrollData,
  createPayrollData,
  updatePayrollData,
  deletePayrollData,
} from './payrollDatas'
import type { StandardScenario } from './payrollDatas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('payrollDatas', () => {
  scenario('returns all payrollDatas', async (scenario: StandardScenario) => {
    const result = await payrollDatas()

    expect(result.length).toEqual(Object.keys(scenario.payrollData).length)
  })

  scenario(
    'returns a single payrollData',
    async (scenario: StandardScenario) => {
      const result = await payrollData({ id: scenario.payrollData.one.id })

      expect(result).toEqual(scenario.payrollData.one)
    }
  )

  scenario('creates a payrollData', async (scenario: StandardScenario) => {
    const result = await createPayrollData({
      input: { org_id: scenario.payrollData.two.org_id },
    })

    expect(result.org_id).toEqual(scenario.payrollData.two.org_id)
  })

  scenario('updates a payrollData', async (scenario: StandardScenario) => {
    const original = (await payrollData({
      id: scenario.payrollData.one.id,
    })) as PayrollData
    const result = await updatePayrollData({
      id: original.id,
      input: { org_id: scenario.payrollData.two.org_id },
    })

    expect(result.org_id).toEqual(scenario.payrollData.two.org_id)
  })

  scenario('deletes a payrollData', async (scenario: StandardScenario) => {
    const original = (await deletePayrollData({
      id: scenario.payrollData.one.id,
    })) as PayrollData
    const result = await payrollData({ id: original.id })

    expect(result).toEqual(null)
  })
})
