const Community = /* GraphQL */ `
  extend type Query {
    community(id: ID!): Community
    communities(filter: FilterInput!): [Community!]
    followingCommunities(filter: FilterInput!): [Community!]
  }

  extend type Mutation {
    createCommunity(data: CreateCommunityInput): Community!
    updateCommunity(data: UpdateCommunityInput, id: ID!): Community!
    statusUpdate(id: ID!, status: CommunityStatus!): Community!
    verifyCommunity(id: ID!, verified: Boolean): Community!
    privateCommunity(id: ID!, public: Boolean): Community!
    deactivateCommunity(id: ID!, activated: Boolean): Boolean!
    deleteCommunity(id: ID!): Boolean!
  }

  type Community {
    id: ID!
    communityName: String!
    ownerId: ID!
    title: String
    description: String
    public: Boolean
    activated: Boolean
    verified: Boolean
    influencer: Boolean
    artist: Boolean
    category: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateCommunityInput {
    communityName: String!
    title: String!
    description: String!
    public: Boolean
    category: String!
  }

  input UpdateCommunityInput {
    communityName: String!
    title: String!
    description: String!
    public: Boolean
    category: String!
  }
  enum CommunityStatus {
    Artist
    Influencer
  }
`;

export default Community;
