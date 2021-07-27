import { User, File, QueryGetFileArgs } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryGetFileArgs,
  prisma: PrismaClient
): Promise<Partial<File>> => {
  return {
    name: "abebe",
    url: "bla bla",
  };
};

export default FetchOne;
