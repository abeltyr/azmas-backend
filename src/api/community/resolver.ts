import {
  Community,
  MutationCreateCommunityArgs,
  QueryCommunitiesArgs,
  Resolver,
  MutationUpdateCommunityArgs,
  MutationDeleteCommunityArgs,
  QueryCommunityArgs,
} from "types/graphql";
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

const createCommunity: Resolver<
  Partial<Community>,
  {},
  context,
  MutationCreateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Create(args, prisma);
};

const updateCommunity: Resolver<
  Partial<Community>,
  {},
  context,
  MutationUpdateCommunityArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Community.Update(args, req, prisma);
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
  Query: { community, communities },
  Mutation: {
    createCommunity,
    deleteCommunity,
    updateCommunity,
  },
};
