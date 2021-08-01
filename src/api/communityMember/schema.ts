const CommunityMember = /* GraphQL */ `
  extend type Query {
    communityMember(id: ID!): CommunityMember
    communityMembers(filter: FilterInput!, communityId: ID!): [CommunityMember!]
  }

  extend type Mutation {
    addCommunityMember(data: CreateCommunityMemberInput): CommunityMember!
    updateCommunityMember(
      data: UpdateCommunityMemberInput
      id: ID!
    ): CommunityMember!
    removeCommunityMember(id: ID!): Boolean!
  }

  type CommunityMember {
    id: ID!
    user: User
    userId: ID!
    community: Community
    communityId: ID!
    admin: Boolean
    banned: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateCommunityMemberInput {
    userId: ID!
    communityId: ID!
    admin: Boolean
    banned: Boolean
  }

  input UpdateCommunityMemberInput {
    userId: ID!
    communityId: ID!
    admin: Boolean
    banned: Boolean
  }
`;

export default CommunityMember;
