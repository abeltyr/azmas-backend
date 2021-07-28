const GroupMember = /* GraphQL */ `
  extend type Query {
    groupMember(id: ID!): GroupMember
    groupMembers(filter: FilterInput!, groupId: ID!): [GroupMember!]
  }

  extend type Mutation {
    addGroupMember(data: CreateGroupMemberInput): GroupMember!
    updateGroupMember(data: UpdateGroupMemberInput, id: ID!): GroupMember!
    removeGroupMember(id: ID!): Boolean!
  }

  type GroupMember {
    id: ID!
    user: User
    userId: ID!
    group: Group
    groupId: ID!
    admin: Boolean
    banned: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateGroupMemberInput {
    userId: ID!
    groupId: ID!
    admin: Boolean
    banned: Boolean
  }

  input UpdateGroupMemberInput {
    userId: ID!
    groupId: ID!
    admin: Boolean
    banned: Boolean
  }
`;

export default GroupMember;
