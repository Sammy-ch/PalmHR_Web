import type { Prisma, EmployeeLeaveForm } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeLeaveFormCreateArgs>({
  employeeLeaveForm: {
    one: {
      data: {
        requested_leave_date: '2024-06-25T09:25:21.080Z',
        leave_type: 'PERSONAL',
        leave_start: '2024-06-25T09:25:21.080Z',
        leave_end: '2024-06-25T09:25:21.080Z',
        leave_status: 'APPROVED',
        leave: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
            Organization: {
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
    },
    two: {
      data: {
        requested_leave_date: '2024-06-25T09:25:21.080Z',
        leave_type: 'PERSONAL',
        leave_start: '2024-06-25T09:25:21.080Z',
        leave_end: '2024-06-25T09:25:21.080Z',
        leave_status: 'APPROVED',
        leave: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
            Organization: {
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
    },
  },
})

export type StandardScenario = ScenarioData<
  EmployeeLeaveForm,
  'employeeLeaveForm'
>
