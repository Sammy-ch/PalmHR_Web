export const schema = gql`
  type OrganizationPayrollSetting {
    id: String!
    org_id: String!
    organization: Organization!
    housing: Int
    transportation: Int
    INSS: Int
    INSS_patronal: Int
    INSS_risque: Int
    medical_insurance: Int
  }

  type Query {
    organizationPayrollSettings: [OrganizationPayrollSetting!]! @requireAuth
    organizationPayrollSetting(id: String!): OrganizationPayrollSetting
      @requireAuth
    organizationPayrollSettingByOrg(
      org_id: String!
    ): OrganizationPayrollSetting! @requireAuth
  }

  input CreateOrganizationPayrollSettingInput {
    org_id: String!
    housing: Int
    transportation: Int
    INSS: Int
    INSS_patronal: Int
    INSS_risque: Int
    medical_insurance: Int
  }

  input UpdateOrganizationPayrollSettingInput {
    org_id: String
    housing: Int
    transportation: Int
    INSS: Int
    INSS_patronal: Int
    INSS_risque: Int
    medical_insurance: Int
  }

  type Mutation {
    createOrganizationPayrollSetting(
      input: CreateOrganizationPayrollSettingInput!
    ): OrganizationPayrollSetting! @requireAuth
    updateOrganizationPayrollSetting(
      id: String!
      input: UpdateOrganizationPayrollSettingInput!
    ): OrganizationPayrollSetting! @requireAuth
    deleteOrganizationPayrollSetting(id: String!): OrganizationPayrollSetting!
      @requireAuth
  }
`
