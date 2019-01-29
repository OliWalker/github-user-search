import gql from 'graphql-tag';

export const USER_LIST_QUERY = gql`
  query USER_LIST_QUERY($name: String!) {
    search(query: $name, type: USER, first: 10) {
      userCount
      edges {
        node {
          ... on User {
            name
            avatarUrl
            login
            url
          }
        }
      }
    }
  }
`;