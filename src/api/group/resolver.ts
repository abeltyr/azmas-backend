import {
  Group,
  MutationCreateGroupArgs,
  QueryGroupsArgs,
  Resolver,
  MutationUpdateGroupArgs,
  MutationDeleteGroupArgs,
  QueryGroupArgs,
} from "types/graphql";
import { context } from "../../types/service";

const group: Resolver<Partial<Group>, {}, context, QueryGroupArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.Group.FetchOne(args, prisma);
};

const groups: Resolver<Partial<Group>[], {}, context, QueryGroupsArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.Group.FetchAll(args, prisma);
};

const createGroup: Resolver<
  Partial<Group>,
  {},
  context,
  MutationCreateGroupArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Group.Create(args, prisma);
};

const updateGroup: Resolver<
  Partial<Group>,
  {},
  context,
  MutationUpdateGroupArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Group.Update(args, req, prisma);
};

const deleteGroup: Resolver<boolean, {}, context, MutationDeleteGroupArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    return await services.Group.Delete(args, req, prisma);
  };

export default {
  Query: { group, groups },
  Mutation: {
    createGroup,
    deleteGroup,
    updateGroup,
  },
};
