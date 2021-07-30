import {
  User,
  MutationSignUpArgs,
  MutationLoginArgs,
  QueryUsersArgs,
  Resolver,
  MutationPersonalDataUpdateArgs,
  MutationAccountDataUpdateArgs,
  MutationSocailDataUpdateArgs,
  MutationSecurityDataUpdateArgs,
  MutationProfileUpdateArgs,
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

const signUp: Resolver<Partial<User>, {}, context, MutationSignUpArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.User.Create(args, prisma);
};

const login: Resolver<Partial<User>, {}, context, MutationLoginArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.User.Login(args, prisma);
};

const personalDataUpdate: Resolver<
  Boolean,
  {},
  context,
  MutationPersonalDataUpdateArgs
> = async (_, args, { req, prisma, utils, services }) => {
  await utils.GetUser(req, prisma);
  return await services.User.Personal(args, req, prisma);
};
const accountDataUpdate: Resolver<
  Boolean,
  {},
  context,
  MutationAccountDataUpdateArgs
> = async (_, args, { req, prisma, utils, services }) => {
  // await utils.GetUser(req, prisma);
  return await services.User.Account(args, req, prisma);
};
const socailDataUpdate: Resolver<
  Boolean,
  {},
  context,
  MutationSocailDataUpdateArgs
> = async (_, args, { req, prisma, utils, services }) => {
  await utils.GetUser(req, prisma);
  return await services.User.Socail(args, req, prisma);
};
const securityDataUpdate: Resolver<
  Partial<User>,
  {},
  context,
  MutationSecurityDataUpdateArgs
> = async (_, args, { req, prisma, utils, services }) => {
  await utils.GetUser(req, prisma);
  return await services.User.Security(args, req, prisma);
};

const profileUpdate: Resolver<Boolean, {}, context, MutationProfileUpdateArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    await utils.GetUser(req, prisma);
    return await services.User.ProfileUpdate(args, req, prisma);
  };

// await utils.GetUser(req, prisma);
const deleteUser: Resolver<boolean, {}, context, MutationDeleteUserArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    return await services.User.Delete(args, req, prisma);
  };

export default {
  Query: { user, currentUser, users },
  Mutation: {
    login,
    signUp,
    personalDataUpdate,
    accountDataUpdate,
    securityDataUpdate,
    socailDataUpdate,
    profileUpdate,
    deleteUser,
  },
};
