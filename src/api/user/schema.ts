const User = /* GraphQL */ `
  type Query {
    user(id: ID!): User
    currentUser: User
    users(filter: FilterInput!): [User!]
  }

  type Mutation {
    login(data: LoginInput): User
    signUp(data: SignUpInput): User!
    personalDataUpdate(data: PersonalDataUpdateInput): Boolean!
    accountDataUpdate(data: AccountDataUpdateInput): Boolean!
    socailDataUpdate(data: SocailDataUpdateInput): Boolean!
    securityDataUpdate(data: SecurityDataUpdateInput): User
    profileUpdate(uploadFileId: ID!): Boolean!
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    fullName: String!
    phoneNumber: String!
    email: String!
    userName: String!
    avatar: File
    bio: String
    birthDate: DateTime
    gender: String!
    instagram: String
    twitter: String
    telegram: String
    facebook: String
    verified: Boolean
    activated: Boolean
    token: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SignUpInput {
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
    password: String!
    device: String!
  }

  input LoginInput {
    userName: String!
    password: String!
    device: String!
  }

  input PersonalDataUpdateInput {
    fullName: String!
    birthDate: String
    bio: String
    gender: String
  }

  input AccountDataUpdateInput {
    email: String!
    phoneNumber: String!
    userName: String!
  }

  input SocailDataUpdateInput {
    instagram: String
    twitter: String
    telegram: String
    facebook: String
  }

  input SecurityDataUpdateInput {
    oldPassword: String!
    password: String!
    device: String!
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
