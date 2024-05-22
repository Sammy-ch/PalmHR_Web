export const schema = gql`
  type PayRollSetting {
    id: String!
    org_id: String!
    organization: Organization!
    housing: Int
    transport: Int
    INSS: Int
    INSS_contribution: Int
    INSS_payroll_risks: Int
    medical_insurance: Int
    IPR: Int
    User: User
    userId: String
  }

  type Query {
    payRollSettings: [PayRollSetting!]! @requireAuth
    payRollSetting(id: String!): PayRollSetting @requireAuth
  }

  input CreatePayRollSettingInput {
    org_id: String!
    housing: Int
    transport: Int
    INSS: Int
    INSS_contribution: Int
    INSS_payroll_risks: Int
    medical_insurance: Int
    IPR: Int
    userId: String
  }

  input UpdatePayRollSettingInput {
    org_id: String
    housing: Int
    transport: Int
    INSS: Int
    INSS_contribution: Int
    INSS_payroll_risks: Int
    medical_insurance: Int
    IPR: Int
    userId: String
  }

  type Mutation {
    createPayRollSetting(input: CreatePayRollSettingInput!): PayRollSetting!
      @requireAuth
    updatePayRollSetting(
      id: String!
      input: UpdatePayRollSettingInput!
    ): PayRollSetting! @requireAuth
    deletePayRollSetting(id: String!): PayRollSetting! @requireAuth
  }
`
