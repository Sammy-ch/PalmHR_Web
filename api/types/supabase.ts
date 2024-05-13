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
        }
        Insert: {
          email: string
          first_name: string
          id?: string
          last_name: string
        }
        Update: {
          email?: string
          first_name?: string
          id?: string
          last_name?: string
        }
        Relationships: []
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
      CheckingRequest: {
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
            foreignKeyName: 'CheckingRequest_employee_id_fkey'
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
          checkin_time: string | null
          checking_date: string | null
          checkout_time: string | null
          employee_id: string
          presence_tag: Database['public']['Enums']['PresenceTag']
          working_time: string | null
        }
        Insert: {
          attendance_id?: string
          checkin_time?: string | null
          checking_date?: string | null
          checkout_time?: string | null
          employee_id: string
          presence_tag: Database['public']['Enums']['PresenceTag']
          working_time?: string | null
        }
        Update: {
          attendance_id?: string
          checkin_time?: string | null
          checking_date?: string | null
          checkout_time?: string | null
          employee_id?: string
          presence_tag?: Database['public']['Enums']['PresenceTag']
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
      EmployeeProfile: {
        Row: {
          allowed_leaves: number | null
          email: string | null
          first_name: string
          last_name: string
          position: string
          profile_id: string
          profile_image: string | null
        }
        Insert: {
          allowed_leaves?: number | null
          email?: string | null
          first_name: string
          last_name: string
          position: string
          profile_id: string
          profile_image?: string | null
        }
        Update: {
          allowed_leaves?: number | null
          email?: string | null
          first_name?: string
          last_name?: string
          position?: string
          profile_id?: string
          profile_image?: string | null
        }
        Relationships: []
      }
      LeaveCustom: {
        Row: {
          id: string
          leave_approval: boolean | null
          leave_days: number
          leave_id: string
          leave_type: Database['public']['Enums']['LeaveType']
          requested_leave_date: string
        }
        Insert: {
          id?: string
          leave_approval?: boolean | null
          leave_days: number
          leave_id?: string
          leave_type: Database['public']['Enums']['LeaveType']
          requested_leave_date: string
        }
        Update: {
          id?: string
          leave_approval?: boolean | null
          leave_days?: number
          leave_id?: string
          leave_type?: Database['public']['Enums']['LeaveType']
          requested_leave_date?: string
        }
        Relationships: [
          {
            foreignKeyName: 'LeaveCustom_leave_id_fkey'
            columns: ['leave_id']
            isOneToOne: false
            referencedRelation: 'EmployeeProfile'
            referencedColumns: ['profile_id']
          }
        ]
      }
      Organization: {
        Row: {
          Address: string
          Email: string
          OrganizationId: string
          OrganizationName: string
          Phone: string
        }
        Insert: {
          Address: string
          Email: string
          OrganizationId?: string
          OrganizationName: string
          Phone: string
        }
        Update: {
          Address?: string
          Email?: string
          OrganizationId?: string
          OrganizationName?: string
          Phone?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_working_hours: {
        Args: {
          checkin_time: string
          checkout_time: string
        }
        Returns: unknown
      }
    }
    Enums: {
      CheckingStatus: 'approved' | 'pending' | 'declined'
      CheckingType: 'checkin' | 'checkout'
      LeaveType: 'Personal' | 'Sick' | 'Holiday'
      PresenceTag:
        | 'PRESENT'
        | 'LATE'
        | 'JUSTIFIED_ABSENCE'
        | 'UNJUSTIFIED_ABSENCE'
        | 'UNNOTIFIED_ABSENCE'
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
