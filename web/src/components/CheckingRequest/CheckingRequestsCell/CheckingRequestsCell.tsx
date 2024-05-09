import type {
  FindCheckingRequests,
  FindCheckingRequestsVariables,
} from 'types/graphql'
import { Skeleton } from 'web/src/components/ui/skeleton'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import CheckingRequests from '../../CheckingRequests/CheckingRequests'

export const QUERY: TypedDocumentNode<
  FindCheckingRequests,
  FindCheckingRequestsVariables
> = gql`
  query FindCheckingRequests {
    checkingRequests {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
      employee {
        first_name
        last_name
        profile_image
      }
    }
  }
`

export const Loading = () => {
  return (
    <main className={'flex flex-col gap-y-4'}>
      <Skeleton className="h-[80px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
      <Skeleton className="h-[30px] w-full rounded-md" />
    </main>
  )
}

export const Empty = () => {
  return <div className="rw-text-center">{'No checkingRequests yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps<FindCheckingRequests>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequests,
}: CellSuccessProps<FindCheckingRequests, FindCheckingRequestsVariables>) => {
  return <CheckingRequests checkingRequests={checkingRequests} />
}
