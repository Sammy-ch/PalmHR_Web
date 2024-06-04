import type {
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables,
  FindOrganizations,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Organization/OrganizationsCell'

import OrganizationCard from '../../OrganizationCard/OrganizationCard'

const DELETE_ORGANIZATION_MUTATION: TypedDocumentNode<
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables
> = gql`
  mutation DeleteOrganizationMutation($OrganizationId: String!) {
    deleteOrganization(OrganizationId: $OrganizationId) {
      OrganizationId
      Organisation_tag
    }
  }
`

const OrganizationsList = ({ organizations }: FindOrganizations) => {
  const [deleteOrganization] = useMutation(DELETE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('Organization deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  // const onDeleteClick = (
  //   OrganizationId: DeleteOrganizationMutationVariables['OrganizationId']
  // ) => {
  //   if (
  //     confirm(
  //       'Are you sure you want to delete organization ' + OrganizationId + '?'
  //     )
  //   ) {
  //     deleteOrganization({ variables: { OrganizationId } })
  //   }
  // }

  return (
    <main className="flex ">
      <OrganizationCard organization={organizations} />
    </main>
  )
}

export default OrganizationsList
