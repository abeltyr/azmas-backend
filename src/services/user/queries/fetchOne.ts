import { User, QueryUserArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryUserArgs,
  prisma: PrismaClient
): Promise<Partial<User>> => {
  return await prisma.user.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
