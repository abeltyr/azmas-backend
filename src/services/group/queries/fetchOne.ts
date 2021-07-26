import { Group, QueryGroupArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryGroupArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<Group>> => {
  return await prisma.group.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
