export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Admin: {
        Row: {
          email: string
          first_name: string
          id: string
          last_name: string
          org_id: string
        }
        Insert: {
          email: string
          first_name: string
          id?: string
          last_name: string
          org_id: string
        }
        Update: {
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          org_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Admin_org_id_fkey'
            columns: ['org_id']
            isOneToOne: false
            referencedRelation: 'Organization'
            referencedColumns: ['OrganizationId']
          }
        ]
      }
      AdminRole: {
        Row: {
          adminId: string | null
          id: string
          role: string
        }
        Insert: {
          adminId?: string | null
          id?: string
          role: string
        }
        Update: {
          adminId?: string | null
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: 'AdminRole_adminId_fkey'
            columns: ['adminId']
            isOneToOne: false
            referencedRelation: 'Admin'
            referencedColumns: ['id']
          }
        ]
      }
      CheckingRequestQueue: {
        Row: {
          checking_date: string
          checking_status: Database['public']['Enums']['CheckingStatus']
          checking_time: string
          checking_type: Database['public']['Enums']['CheckingType']
          employee_id: string
          id: string
        }
        Insert: {
          checking_date: string
          checking_status: Database['public']['Enums']['CheckingStatus']
          checking_time: string
          checking_type: Database['public']['Enums']['CheckingType']
          employee_id: string
          id?: string
        }
        Update: {
          checking_date?: string
          checking_status?: Database['public']['Enums']['CheckingStatus']
          checking_time?: string
          checking_type?: Database['public']['Enums']['CheckingType']
          employee_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'CheckingRequestQueue_employee_id_fkey'
            columns: ['employee_id']
            isOneToOne: false
            referencedRelation: 'EmployeeProfile'
            referencedColumns: ['profile_id']
          }
        ]
      }
      EmployeeAttendance: {
        Row: {
          attendance_id: string
          attendance_tag: Database['public']['Enums']['AttendanceTag']
          checkin_time: string | null
          checking_date: string | null
          checkout_time: string | null
          employee_id: string
          working_time: string | null
        }
        Insert: {
          attendance_id: string
          attendance_tag: Database['public']['Enums']['AttendanceTag']
          checkin_time?: string | null
          checking_date?: string | null
          checkout_time?: string | null
          employee_id: string
          working_time?: string | null
        }
        Update: {
          attendance_id?: string
          attendance_tag?: Database['public']['Enums']['AttendanceTag']
          checkin_time?: string | null
          checking_date?: string | null
          checkout_time?: string | null
          employee_id?: string
          working_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'EmployeeAttendance_employee_id_fkey'
            columns: ['employee_id']
            isOneToOne: false
            referencedRelation: 'EmployeeProfile'
            referencedColumns: ['profile_id']
          }
        ]
      }
      EmployeeAttendanceReport: {
        Row: {
          AbstenteeismRate: number
          EarlyAttendaceRate: number
          employee_id: string
          id: string
          LateAttedanceRate: number
          TotalOvertime: number
          TotalSickLeaves: number
          TotalWorkhours: number
        }
        Insert: {
          AbstenteeismRate: number
          EarlyAttendaceRate: number
          employee_id: string
          id?: string
          LateAttedanceRate: number
          TotalOvertime: number
          TotalSickLeaves: number
          TotalWorkhours: number
        }
        Update: {
          AbstenteeismRate?: number
          EarlyAttendaceRate?: number
          employee_id?: string
          id?: string
          LateAttedanceRate?: number
          TotalOvertime?: number
          TotalSickLeaves?: number
          TotalWorkhours?: number
        }
        Relationships: [
          {
            foreignKeyName: 'EmployeeAttendanceReport_employee_id_fkey'
            columns: ['employee_id']
            isOneToOne: false
            referencedRelation: 'EmployeeProfile'
            referencedColumns: ['profile_id']
          }
        ]
      }
      EmployeeLeaveForm: {
        Row: {
          id: string
          leave_days: number | null
          leave_end: string
          leave_id: string
          leave_start: string
          leave_status: Database['public']['Enums']['LeaveStatus']
          leave_type: Database['public']['Enums']['LeaveType']
          requested_leave_date: string
        }
        Insert: {
          id?: string
          leave_days?: number | null
          leave_end: string
          leave_id?: string
          leave_start: string
          leave_status: Database['public']['Enums']['LeaveStatus']
          leave_type: Database['public']['Enums']['LeaveType']
          requested_leave_date: string
        }
        Update: {
          id?: string
          leave_days?: number | null
          leave_end?: string
          leave_id?: string
          leave_start?: string
          leave_status?: Database['public']['Enums']['LeaveStatus']
          leave_type?: Database['public']['Enums']['LeaveType']
          requested_leave_date?: string
        }
        Relationships: [
          {
            foreignKeyName: 'EmployeeLeaveForm_leave_id_fkey'
            columns: ['leave_id']
            isOneToOne: false
            referencedRelation: 'EmployeeProfile'
            referencedColumns: ['profile_id']
          }
        ]
      }
      EmployeePayRoll: {
        Row: {
          attendance_report: string
          base_salary: number
          bonuses: number | null
          gross_amount: number | null
          id: string
          labor_cost: number | null
          net_salary: number | null
          overtime: number | null
          pay_period_end: string
          pay_period_start: string
        }
        Insert: {
          attendance_report: string
          base_salary: number
          bonuses?: number | null
          gross_amount?: number | null
          id: string
          labor_cost?: number | null
          net_salary?: number | null
          overtime?: number | null
          pay_period_end: string
          pay_period_start: string
        }
        Update: {
          attendance_report?: string
          base_salary?: number
          bonuses?: number | null
          gross_amount?: number | null
          id?: string
          labor_cost?: number | null
          net_salary?: number | null
          overtime?: number | null
          pay_period_end?: string
          pay_period_start?: string
        }
        Relationships: [
          {
            foreignKeyName: 'EmployeePayRoll_attendance_report_fkey'
            columns: ['attendance_report']
            isOneToOne: false
            referencedRelation: 'EmployeeAttendanceReport'
            referencedColumns: ['employee_id']
          },
          {
            foreignKeyName: 'EmployeePayRoll_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'EmployeeProfile'
            referencedColumns: ['profile_id']
          }
        ]
      }
      EmployeeProfile: {
        Row: {
          allowed_leaves: number | null
          email: string | null
          first_name: string
          last_name: string
          org_id: string
          position: string
          profile_id: string
          profile_image: string | null
        }
        Insert: {
          allowed_leaves?: number | null
          email?: string | null
          first_name: string
          last_name: string
          org_id: string
          position: string
          profile_id: string
          profile_image?: string | null
        }
        Update: {
          allowed_leaves?: number | null
          email?: string | null
          first_name?: string
          last_name?: string
          org_id?: string
          position?: string
          profile_id?: string
          profile_image?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'EmployeeProfile_org_id_fkey'
            columns: ['org_id']
            isOneToOne: false
            referencedRelation: 'Organization'
            referencedColumns: ['OrganizationId']
          }
        ]
      }
      Organization: {
        Row: {
          addressCity: string
          addressCountry: string
          addressState: string
          addressStreet: string
          Email: string
          Industry: Database['public']['Enums']['Industry']
          isVerified: boolean
          OrganizationId: string
          OrganizationName: string
          organizationSize: Database['public']['Enums']['OrganizationSize']
          organizationType: Database['public']['Enums']['OrganizationType']
          Phone: string
          websiteUrl: string
        }
        Insert: {
          addressCity: string
          addressCountry: string
          addressState: string
          addressStreet: string
          Email: string
          Industry: Database['public']['Enums']['Industry']
          isVerified?: boolean
          OrganizationId: string
          OrganizationName: string
          organizationSize: Database['public']['Enums']['OrganizationSize']
          organizationType: Database['public']['Enums']['OrganizationType']
          Phone: string
          websiteUrl: string
        }
        Update: {
          addressCity?: string
          addressCountry?: string
          addressState?: string
          addressStreet?: string
          Email?: string
          Industry?: Database['public']['Enums']['Industry']
          isVerified?: boolean
          OrganizationId?: string
          OrganizationName?: string
          organizationSize?: Database['public']['Enums']['OrganizationSize']
          organizationType?: Database['public']['Enums']['OrganizationType']
          Phone?: string
          websiteUrl?: string
        }
        Relationships: []
      }
      OrganizationAttendanceKpi: {
        Row: {
          AbstenteeismRate: number
          EarlyAttendaceRate: number
          id: string
          LateAttedanceRate: number
          org_id: string
          TotalOvertime: number
          TotalSickLeaves: number
          TotalWorkhours: number
        }
        Insert: {
          AbstenteeismRate: number
          EarlyAttendaceRate: number
          id?: string
          LateAttedanceRate: number
          org_id: string
          TotalOvertime: number
          TotalSickLeaves: number
          TotalWorkhours: number
        }
        Update: {
          AbstenteeismRate?: number
          EarlyAttendaceRate?: number
          id?: string
          LateAttedanceRate?: number
          org_id?: string
          TotalOvertime?: number
          TotalSickLeaves?: number
          TotalWorkhours?: number
        }
        Relationships: [
          {
            foreignKeyName: 'OrganizationAttendanceKpi_org_id_fkey'
            columns: ['org_id']
            isOneToOne: false
            referencedRelation: 'Organization'
            referencedColumns: ['OrganizationId']
          }
        ]
      }
      PayrollData: {
        Row: {
          housing: number | null
          id: string
          INSS: number | null
          INSS_contribution: number | null
          INSS_payroll_risks: number | null
          IPR: number | null
          medical_insurance: number | null
          org_id: string
          transport: number | null
          userId: string | null
        }
        Insert: {
          housing?: number | null
          id?: string
          INSS?: number | null
          INSS_contribution?: number | null
          INSS_payroll_risks?: number | null
          IPR?: number | null
          medical_insurance?: number | null
          org_id: string
          transport?: number | null
          userId?: string | null
        }
        Update: {
          housing?: number | null
          id?: string
          INSS?: number | null
          INSS_contribution?: number | null
          INSS_payroll_risks?: number | null
          IPR?: number | null
          medical_insurance?: number | null
          org_id?: string
          transport?: number | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'PayrollData_org_id_fkey'
            columns: ['org_id']
            isOneToOne: false
            referencedRelation: 'Organization'
            referencedColumns: ['OrganizationId']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AttendanceTag: 'PRESENT' | 'ABSENT'
      CheckingStatus: 'APPROVED' | 'PENDING' | 'DECLINED'
      CheckingType: 'CHECKIN' | 'CHECKOUT'
      Industry:
        | 'Technology'
        | 'HealthCare'
        | 'Finance'
        | 'Education'
        | 'Retail'
        | 'Manufactoring'
        | 'Other'
      LeaveStatus: 'APPROVED' | 'PENDING' | 'DENIED'
      LeaveType: 'PERSONAL' | 'SICK' | 'HOLIDAY'
      OrganizationSize: 'Small' | 'Medium' | 'Large'
      OrganizationType: 'NonProfit' | 'ForProfit' | 'Government' | 'Other'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never
