import {
  File,
  MutationMultipleUploadArgs,
  MutationSingleUploadArgs,
  MutationRemoveUploadArgs,
  QueryGetFileArgs,
  QueryGetMultipleFilesArgs,
  Resolver,
} from "types/graphql";
import { context } from "types/service";

const getFile: Resolver<Partial<File>, {}, context, QueryGetFileArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.File.fetchOne(args, prisma);
};

const getMultipleFiles: Resolver<
  Partial<File>[],
  {},
  context,
  QueryGetMultipleFilesArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.File.fetchMultiple(args, prisma);
};

const singleUpload: Resolver<
  Partial<File>,
  {},
  context,
  MutationSingleUploadArgs
> = async (_, args, { req, prisma, utils, services }) => {
  console.log("here");
  return await services.File.singleUpload(args, prisma);
};

const removeUpload: Resolver<boolean, {}, context, MutationRemoveUploadArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    return await services.File.removeUpload(args, prisma);
  };

const multipleUpload: Resolver<
  Partial<File>[],
  {},
  context,
  MutationMultipleUploadArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.File.multipleUpload(args, prisma);
};

export default {
  Query: {
    getFile,
    getMultipleFiles,
  },
  Mutation: {
    singleUpload,
    removeUpload,
    multipleUpload,
  },
};
