import {
  Resolver,
  Community,
  QueryCommunitiesArgs,
  QueryCommunityArgs,
  QueryFollowingCommunitiesArgs,
  MutationCreateCommunityArgs,
  MutationUpdateCommunityArgs,
  MutationDeleteCommunityArgs,
} from "../../types/graphql";
import { context } from "../../types/service";

const community: Resolver<
  Partial<Community>,
  {},
  context,
  QueryCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.FetchOne(args, prisma);
};

const communities: Resolver<
  Partial<Community>[],
  {},
  context,
  QueryCommunitiesArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.FetchAll(args, prisma);
};

const followingCommunities: Resolver<
  Partial<Community>[],
  {},
  context,
  QueryFollowingCommunitiesArgs
> = async (_, args, { req, prisma, utils, services }) => {
  //TODO: remove
  // await utils.GetUser(req, prisma);
  return await services.Community.Following(args, req, prisma);
};

const createCommunity: Resolver<
  Partial<Community>,
  {},
  context,
  MutationCreateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  //TODO: remove
  // await utils.GetUser(req, prisma);
  return await services.Community.Create(args, req, prisma);
};

const updateCommunity: Resolver<
  Partial<Community>,
  {},
  context,
  MutationUpdateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Update(args, req, prisma);
};

const statusUpdate: Resolver<
  Partial<Community>,
  {},
  context,
  MutationUpdateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Update(args, req, prisma);
};

const verifyCommunity: Resolver<
  Partial<Community>,
  {},
  context,
  MutationUpdateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Update(args, req, prisma);
};

const privateCommunity: Resolver<
  Partial<Community>,
  {},
  context,
  MutationUpdateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Update(args, req, prisma);
};

const deactivateCommunity: Resolver<
  boolean,
  {},
  context,
  MutationDeleteCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Delete(args, req, prisma);
};

const deleteCommunity: Resolver<
  boolean,
  {},
  context,
  MutationDeleteCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Delete(args, req, prisma);
};

export default {
  Query: { community, communities, followingCommunities },
  Mutation: {
    createCommunity,
    updateCommunity,
    statusUpdate,
    verifyCommunity,
    privateCommunity,
    deactivateCommunity,
    deleteCommunity,
  },
};
