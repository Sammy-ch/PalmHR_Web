import type { Prisma, OrganizationPayrollSetting } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.OrganizationPayrollSettingCreateArgs>({
    organizationPayrollSetting: {
      one: {
        data: {
          organization: {
            create: {
              OrganizationId: 'String',
              OrganizationName: 'String',
              organizationType: 'NonProfit',
              addressStreet: 'String',
              addressCity: 'String',
              addressState: 'String',
              addressCountry: 'String',
              Email: 'String',
              websiteUrl: 'String',
              Phone: 'String',
              organizationSize: 'Small',
              Industry: 'Technology',
            },
          },
        },
      },
      two: {
        data: {
          organization: {
            create: {
              OrganizationId: 'String',
              OrganizationName: 'String',
              organizationType: 'NonProfit',
              addressStreet: 'String',
              addressCity: 'String',
              addressState: 'String',
              addressCountry: 'String',
              Email: 'String',
              websiteUrl: 'String',
              Phone: 'String',
              organizationSize: 'Small',
              Industry: 'Technology',
            },
          },
        },
      },
    },
  })

export type StandardScenario = ScenarioData<
  OrganizationPayrollSetting,
  'organizationPayrollSetting'
>
