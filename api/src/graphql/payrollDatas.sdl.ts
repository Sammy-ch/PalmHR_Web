export const schema = gql`
  type PayrollData {
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
    userId: String
  }

  type Query {
    payrollDatas: [PayrollData!]! @requireAuth
    payrollData(id: String!): PayrollData @requireAuth
  }

  input CreatePayrollDataInput {
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

  input UpdatePayrollDataInput {
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
    createPayrollData(input: CreatePayrollDataInput!): PayrollData! @requireAuth
    updatePayrollData(
      id: String!
      input: UpdatePayrollDataInput!
    ): PayrollData! @requireAuth
    deletePayrollData(id: String!): PayrollData! @requireAuth
  }
`
