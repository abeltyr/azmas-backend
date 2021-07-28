const User = /* GraphQL */ `
  type Query {
    user(id: ID!): User
    currentUser: User
    users(filter: FilterInput!): [User!]
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    updateUser(data: UpdateUserInput, id: ID!): User!
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    fullName: String!
    phoneNumber: String!
    email: String!
    userName: String!
    bio: String
    birthDate: DateTime
    gender: String!
    instagram: String
    twitter: String
    telegram: String
    facebook: String
    verified: Boolean
    activated: Boolean
    # Groups  Group[]
    # GroupMembers GroupMember[]
    # events  Event[]
    # tickets Ticket[]
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateUserInput {
    fullName: String!
    phoneNumber: String!
    email: String!
    userName: String!
    birthDate: String
    bio: String
    gender: String
    instagram: String
    twitter: String
    telegram: String
    facebook: String
  }

  input UpdateUserInput {
    fullName: String!
    phoneNumber: String!
    email: String!
    birthDate: String
    userName: String!
    bio: String
    gender: String
    instagram: String
    twitter: String
    telegram: String
    facebook: String
  }

  schema {
    query: Query
    mutation: Mutation
  }

  enum Gender {
    Male
    Female
  }

  enum Category {
    Education
    Friends
    Community
    Business
    Entertainment
  }

  enum TablesName {
    User
    Group
    Event
  }
`;

export default User;
