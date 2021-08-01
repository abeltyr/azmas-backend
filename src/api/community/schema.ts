const Community = /* GraphQL */ `
  extend type Query {
    community(id: ID!): Community
    communities(filter: FilterInput!): [Community!]
  }

  extend type Mutation {
    createCommunity(data: CreateCommunityInput): Community!
    updateCommunity(data: UpdateCommunityInput, id: ID!): Community!
    deleteCommunity(id: ID!): Boolean!
  }

  type Community {
    id: ID!
    communityName: String!
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
    # CommunityMembers CommunityMember[]
    # events       Event[]
    # tickets      Ticket[]
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateCommunityInput {
    communityName: String
    ownerId: ID!
    title: String
    description: String
    public: Boolean
    activated: Boolean
    verified: Boolean
    influencer: Boolean
    category: String
  }

  input UpdateCommunityInput {
    communityName: String
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

export default Community;
