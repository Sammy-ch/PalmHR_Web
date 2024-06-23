// import type {
//   CreateEmployeeAttendanceMutation,
//   CreateEmployeeAttendanceInput,
//   CreateEmployeeAttendanceMutationVariables,
// } from 'types/graphql'

// import { navigate, routes } from '@redwoodjs/router'
// import { useMutation } from '@redwoodjs/web'
// import type { TypedDocumentNode } from '@redwoodjs/web'
// import { toast } from '@redwoodjs/web/toast'

// import EmployeeAttendanceForm from 'src/components/EmployeeAttendance/EmployeeAttendanceForm'

// // const CREATE_EMPLOYEE_ATTENDANCE_MUTATION: TypedDocumentNode<
// //   CreateEmployeeAttendanceMutation,
// //   CreateEmployeeAttendanceMutationVariables
// // > = gql`
// //   mutation CreateEmployeeAttendanceMutation(
// //     $input: CreateEmployeeAttendanceInput!
// //   ) {
// //     createEmployeeAttendance(input: $input) {
// //       attendance_id
// //     }
// //   }
// // `

// const NewEmployeeAttendance = () => {
//   const [createEmployeeAttendance, { loading, error }] = useMutation(
//     CREATE_EMPLOYEE_ATTENDANCE_MUTATION,
//     {
//       onCompleted: () => {
//         toast.success('EmployeeAttendance created')
//         navigate(routes.employeeAttendances())
//       },
//       onError: (error) => {
//         toast.error(error.message)
//       },
//     }
//   )

//   const onSave = (input: CreateEmployeeAttendanceInput) => {
//     createEmployeeAttendance({ variables: { input } })
//   }

//   return (
//     <div className="rw-segment">
//       <header className="rw-segment-header">
//         <h2 className="rw-heading rw-heading-secondary">
//           New EmployeeAttendance
//         </h2>
//       </header>
//       <div className="rw-segment-main">
//         <EmployeeAttendanceForm
//           onSave={onSave}
//           loading={loading}
//           error={error}
//         />
//       </div>
//     </div>
//   )
// }

// export default NewEmployeeAttendance
