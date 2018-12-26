import gql from 'graphql-tag';

export const ALL_USERS_QUERY = gql`query AllUsersQuery {
  allUsers {
    id
    firstName
    lastName
    email
    avatar
  }
}`;

export const ALL_POSTS_QUERY = gql`query AllPostsQuery {
  allPosts {
    id
    title
    body
    createdAt
    published
    author {
      id
      firstName
      lastName
      email
      avatar
    }
  }
}`;
