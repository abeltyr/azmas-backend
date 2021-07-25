import {
  User,
  MutationCreateUserArgs,
  QueryUsersArgs,
  Resolver,
  MutationUpdateUserArgs,
  MutationDeleteUserArgs,
  QueryUserArgs,
} from "types/graphql";
import { context } from "../../types/service";

const user: Resolver<Partial<User>, {}, context, QueryUserArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.User.FetchOne(args, prisma);
};

const currentUser: Resolver<Partial<User>, {}, context> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.User.fetchCurrent(req, prisma);
};

const users: Resolver<Partial<User>[], {}, context, QueryUsersArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.User.FetchAll(args, prisma);
};

const createUser: Resolver<
  Partial<User>,
  {},
  context,
  MutationCreateUserArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.User.Create(args, prisma);
};

const updateUser: Resolver<
  Partial<User>,
  {},
  context,
  MutationUpdateUserArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.User.Update(args, req, prisma);
};

const deleteUser: Resolver<boolean, {}, context, MutationDeleteUserArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    return await services.User.Delete(args, req, prisma);
  };

export default {
  Query: { user, currentUser, users },
  Mutation: {
    createUser,
    deleteUser,
    updateUser,
  },
};
