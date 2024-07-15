import type {
  FindEmployeePayRolls,
  FindEmployeePayRollsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Payrolls from '../../Payrolls/Payrolls'
import { Skeleton } from '../../ui/skeleton'

export const QUERY: TypedDocumentNode<
  FindEmployeePayRolls,
  FindEmployeePayRollsVariables
> = gql`
  query FindEmployeePayRolls {
    employeePayRolls {
      id
      pay_period_start
      pay_period_end
      base_salary
      overtime
      net_salary
      bonuses
      gross_amount
      labor_cost
      employee {
        profile_id
        first_name
        last_name
      }
    }
  }
`

export const Loading = () => {
  return (
    <div className="h-full">
      <Skeleton className=" h-24  bg-slate-400" />
      <div className="flex flex-col gap-5 py-10">
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
      </div>

      <div className="flex flex-col gap-5 rounded-md border p-10 py-10">
        <Skeleton className="h-10 w-36" />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
        <Skeleton className="h-5 " />
      </div>
    </div>
  )
}

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeePayRolls yet. '}
      <Link to={routes.newEmployeePayRoll()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindEmployeePayRolls>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeePayRolls,
}: CellSuccessProps<FindEmployeePayRolls, FindEmployeePayRollsVariables>) => {
  return <Payrolls employeePayRolls={employeePayRolls} />
}
