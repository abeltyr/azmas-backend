import {
  GroupMember,
  MutationCreateGroupMemberArgs,
  QueryGroupMembersArgs,
  Resolver,
  MutationUpdateGroupMemberArgs,
  MutationDeleteGroupMemberArgs,
  QueryGroupMemberArgs,
} from "types/graphql";
import { context } from "../../types/service";

const groupMember: Resolver<
  Partial<GroupMember>,
  {},
  context,
  QueryGroupMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.GroupMember.FetchOne(args, prisma);
};

const groupMembers: Resolver<
  Partial<GroupMember>[],
  {},
  context,
  QueryGroupMembersArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.GroupMember.FetchAll(args, prisma);
};

const createGroupMember: Resolver<
  Partial<GroupMember>,
  {},
  context,
  MutationCreateGroupMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.GroupMember.Create(args, prisma);
};

const updateGroupMember: Resolver<
  Partial<GroupMember>,
  {},
  context,
  MutationUpdateGroupMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.GroupMember.Update(args, req, prisma);
};

const deleteGroupMember: Resolver<
  boolean,
  {},
  context,
  MutationDeleteGroupMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.GroupMember.Delete(args, req, prisma);
};

export default {
  Query: { groupMember, groupMembers },
  Mutation: {
    createGroupMember,
    deleteGroupMember,
    updateGroupMember,
  },
};
