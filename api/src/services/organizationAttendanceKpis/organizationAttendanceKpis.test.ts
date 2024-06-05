import type { OrganizationAttendanceKpi } from '@prisma/client'

import {
  organizationAttendanceKpis,
  organizationAttendanceKpi,
  createOrganizationAttendanceKpi,
  updateOrganizationAttendanceKpi,
  deleteOrganizationAttendanceKpi,
} from './organizationAttendanceKpis'
import type { StandardScenario } from './organizationAttendanceKpis.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('organizationAttendanceKpis', () => {
  scenario(
    'returns all organizationAttendanceKpis',
    async (scenario: StandardScenario) => {
      const result = await organizationAttendanceKpis()

      expect(result.length).toEqual(
        Object.keys(scenario.organizationAttendanceKpi).length
      )
    }
  )

  scenario(
    'returns a single organizationAttendanceKpi',
    async (scenario: StandardScenario) => {
      const result = await organizationAttendanceKpi({
        id: scenario.organizationAttendanceKpi.one.id,
      })

      expect(result).toEqual(scenario.organizationAttendanceKpi.one)
    }
  )

  scenario(
    'creates a organizationAttendanceKpi',
    async (scenario: StandardScenario) => {
      const result = await createOrganizationAttendanceKpi({
        input: {
          TotalOvertime: 3182847,
          TotalWorkhours: 2664438,
          TotalSickLeaves: 9341734,
          AbstenteeismRate: 6373681,
          EarlyAttendaceRate: 3689699,
          LateAttedanceRate: 4717937,
          org_id: scenario.organizationAttendanceKpi.two.org_id,
        },
      })

      expect(result.TotalOvertime).toEqual(3182847)
      expect(result.TotalWorkhours).toEqual(2664438)
      expect(result.TotalSickLeaves).toEqual(9341734)
      expect(result.AbstenteeismRate).toEqual(6373681)
      expect(result.EarlyAttendaceRate).toEqual(3689699)
      expect(result.LateAttedanceRate).toEqual(4717937)
      expect(result.org_id).toEqual(
        scenario.organizationAttendanceKpi.two.org_id
      )
    }
  )

  scenario(
    'updates a organizationAttendanceKpi',
    async (scenario: StandardScenario) => {
      const original = (await organizationAttendanceKpi({
        id: scenario.organizationAttendanceKpi.one.id,
      })) as OrganizationAttendanceKpi
      const result = await updateOrganizationAttendanceKpi({
        id: original.id,
        input: { TotalOvertime: 4650632 },
      })

      expect(result.TotalOvertime).toEqual(4650632)
    }
  )

  scenario(
    'deletes a organizationAttendanceKpi',
    async (scenario: StandardScenario) => {
      const original = (await deleteOrganizationAttendanceKpi({
        id: scenario.organizationAttendanceKpi.one.id,
      })) as OrganizationAttendanceKpi
      const result = await organizationAttendanceKpi({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
