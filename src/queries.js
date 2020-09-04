import { gql } from "@apollo/client";

export const GITHUB_PROFILE = gql`
  query {
    repositoryOwner(login: "gaearon") {
      avatarUrl
      login
      url
      ... on User {
        name
        bio
      }
      repositories(last: 15) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              createdAt
              forkCount
              url
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
