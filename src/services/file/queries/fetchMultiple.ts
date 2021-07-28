import { PrismaClient } from "@prisma/client";
import { File, QueryGetMultipleFilesArgs } from "types/graphql";

const FetchAll = async (
  args: QueryGetMultipleFilesArgs,
  prisma: PrismaClient
): Promise<Partial<File>[]> => {
  return [{ name: "bla bla", url: "link" }];
};

export default FetchAll;
