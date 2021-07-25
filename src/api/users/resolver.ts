
// import { Prisma } from '@prisma/client'

// const user = async (_, args, { req, prisma }) => {};

// const users = async (_, args, { req, prisma }) => {};

// const createUser = async (_, args, { req, prisma }) => {
//   const user = await prisma.user.create({
//     data: {

//     },
//   });
// };

// const updateUser = async (_, args, { req, prisma }) => {};

// const deleteUser = async (_, args, { req, prisma }) => {};

// export default {
//   Query: { user, users },
//   Mutation: {
//     createUser,
//     updateUser,
//     deleteUser,
//   },
// };

import {
  User,
  MutationCreateUserArgs,
  QueryUsersArgs,
  Resolver,
  MutationUpdateUserArgs,
  MutationDeleteUserArgs,
} from "types/graphql";
import { context } from "../../types/service";


const user: Resolver<Partial<User>, {}, context> = async (
  _,
  args,
  { req, prisma, utils, services },
) => {
  return await services.User.FetchOne(req);
};

const currentUser: Resolver<Partial<User>, {}, context> = async (
  _,
  args,
  { req, prisma, utils, services },
) => {
  return await services.User.FetchOne(req);
};

const users: Resolver<Partial<User>[], {}, context, QueryUsersArgs> = async (
  _,
  args,
  { req, prisma, utils, services },
) => {
  return await services.User.FetchAll(args);
};

const createUser: Resolver<
  Partial<User>,
  {},
  context,
  MutationCreateUserArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.User.Create(args);
};


const updateUser: Resolver<
  Partial<User>,
  {},
  context,
  MutationUpdateUserArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.User.Update(args, req);
};

const deleteUser: Resolver<
  boolean,
  {},
  context,
  MutationDeleteUserArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.User.Delete(args, req);
};

export default {
  Query: { user, currentUser, users },
  Mutation: {
    createUser,
    deleteUser,
    updateUser,
  },
};