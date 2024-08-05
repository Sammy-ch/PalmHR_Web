import type { OrganizationPayrollSetting } from '@prisma/client'

import {
  organizationPayrollSettings,
  organizationPayrollSetting,
  createOrganizationPayrollSetting,
  updateOrganizationPayrollSetting,
  deleteOrganizationPayrollSetting,
} from './organizationPayrollSettings'
import type { StandardScenario } from './organizationPayrollSettings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('organizationPayrollSettings', () => {
  scenario(
    'returns all organizationPayrollSettings',
    async (scenario: StandardScenario) => {
      const result = await organizationPayrollSettings()

      expect(result.length).toEqual(
        Object.keys(scenario.organizationPayrollSetting).length
      )
    }
  )

  scenario(
    'returns a single organizationPayrollSetting',
    async (scenario: StandardScenario) => {
      const result = await organizationPayrollSetting({
        id: scenario.organizationPayrollSetting.one.id,
      })

      expect(result).toEqual(scenario.organizationPayrollSetting.one)
    }
  )

  scenario(
    'creates a organizationPayrollSetting',
    async (scenario: StandardScenario) => {
      const result = await createOrganizationPayrollSetting({
        input: { org_id: scenario.organizationPayrollSetting.two.org_id },
      })

      expect(result.org_id).toEqual(
        scenario.organizationPayrollSetting.two.org_id
      )
    }
  )

  scenario(
    'updates a organizationPayrollSetting',
    async (scenario: StandardScenario) => {
      const original = (await organizationPayrollSetting({
        id: scenario.organizationPayrollSetting.one.id,
      })) as OrganizationPayrollSetting
      const result = await updateOrganizationPayrollSetting({
        id: original.id,
        input: { org_id: scenario.organizationPayrollSetting.two.org_id },
      })

      expect(result.org_id).toEqual(
        scenario.organizationPayrollSetting.two.org_id
      )
    }
  )

  scenario(
    'deletes a organizationPayrollSetting',
    async (scenario: StandardScenario) => {
      const original = (await deleteOrganizationPayrollSetting({
        id: scenario.organizationPayrollSetting.one.id,
      })) as OrganizationPayrollSetting
      const result = await organizationPayrollSetting({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
