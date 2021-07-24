const User = /* GraphQL */ `
  scalar Uploads

  type Query {
    user: User
    users(filter: FilterInput!): [User!]!
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    updateUser(data: UpdateUserInput, id: ID!): User!
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    fullName: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateUserInput {
    fullName: String!
  }

  input UpdateUserInput {
    fullName: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default User;
