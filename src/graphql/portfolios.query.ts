// Dependencies
import { gql } from '@apollo/client'

export default gql`
  query portfolios($first: Int, $skip: Int, $after: String) {
    portfolios: portfoliosConnection(
      first: $first
      skip: $skip
      after: $after
      orderBy: updatedAt_DESC
    ) {
      edges {
        node {
          id
          title
          slug
          cover {
            handle
            width
            height
          }
          content
        }
        cursor
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
    count: portfoliosConnection {
      aggregate {
        count
      }
    }
  }
`
