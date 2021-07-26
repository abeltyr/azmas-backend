const Group = /* GraphQL */ `
  extend type Query {
    group(id: ID!): Group
    groups(filter: FilterInput!): [Group!]
  }

  extend type Mutation {
    createGroup(data: CreateGroupInput): Group!
    updateGroup(data: UpdateGroupInput, id: ID!): Group!
    deleteGroup(id: ID!): Boolean!
  }

  type Group {
    id: ID!
    groupName: String!
    user: User!
    ownerId: ID!
    title: String
    description: String
    public: Boolean
    activated: Boolean
    verified: Boolean
    influencer: Boolean
    category: String
    # Todo: add the avatar and background
    # GroupMembers GroupMember[]
    # events       Event[]
    # tickets      Ticket[]
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateGroupInput {
    groupName: String
    ownerId: ID!
    title: String
    description: String
    public: Boolean
    activated: Boolean
    verified: Boolean
    influencer: Boolean
    category: String
  }

  input UpdateGroupInput {
    groupName: String
    ownerId: ID!
    title: String
    description: String
    public: Boolean
    activated: Boolean
    verified: Boolean
    influencer: Boolean
    category: String
  }
`;

export default Group;
