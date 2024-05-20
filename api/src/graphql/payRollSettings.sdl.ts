export const schema = gql`
  type PayRollSetting {
    id: String!
    user_id: String!
    user: User!
    housing: Int
    transport: Int
    INSS: Int
    INSS_contribution: Int
    INSS_payroll_risks: Int
    medical_insurance: Int
    IPR: Int
  }

  type Query {
    payRollSettings: [PayRollSetting!]! @requireAuth
    payRollSetting(id: String!): PayRollSetting @requireAuth
  }

  input CreatePayRollSettingInput {
    user_id: String!
    housing: Int
    transport: Int
    INSS: Int
    INSS_contribution: Int
    INSS_payroll_risks: Int
    medical_insurance: Int
    IPR: Int
  }

  input UpdatePayRollSettingInput {
    user_id: String
    housing: Int
    transport: Int
    INSS: Int
    INSS_contribution: Int
    INSS_payroll_risks: Int
    medical_insurance: Int
    IPR: Int
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
