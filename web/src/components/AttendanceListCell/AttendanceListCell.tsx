import type {
  FindAttendanceListQuery,
  FindAttendanceListQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindAttendanceListQuery,
  FindAttendanceListQueryVariables
> = gql`
  query FindAttendanceListQuery($id: Int!) {
    attendanceList: attendanceList(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAttendanceListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  attendanceList,
}: CellSuccessProps<
  FindAttendanceListQuery,
  FindAttendanceListQueryVariables
>) => {
  return <div>{JSON.stringify(attendanceList)}</div>
}
