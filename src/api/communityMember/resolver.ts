import {
  CommunityMember,
  MutationAddCommunityMemberArgs,
  QueryCommunityMembersArgs,
  Resolver,
  MutationUpdateCommunityMemberArgs,
  MutationRemoveCommunityMemberArgs,
  QueryCommunityMemberArgs,
} from "../../types/graphql";
import { context } from "../../types/service";

const communityMember: Resolver<
  Partial<CommunityMember>,
  {},
  context,
  QueryCommunityMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.CommunityMember.FetchOne(args, prisma);
};

const communityMembers: Resolver<
  Partial<CommunityMember>[],
  {},
  context,
  QueryCommunityMembersArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.CommunityMember.FetchAll(args, prisma);
};

const addCommunityMember: Resolver<
  Partial<CommunityMember>,
  {},
  context,
  MutationAddCommunityMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.CommunityMember.Create(args, prisma);
};

const updateCommunityMember: Resolver<
  Partial<CommunityMember>,
  {},
  context,
  MutationUpdateCommunityMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.CommunityMember.Update(args, req, prisma);
};

const removeCommunityMember: Resolver<
  boolean,
  {},
  context,
  MutationRemoveCommunityMemberArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.CommunityMember.Delete(args, req, prisma);
};

export default {
  Query: { communityMember, communityMembers },
  Mutation: {
    addCommunityMember,
    updateCommunityMember,
    removeCommunityMember,
  },
};
