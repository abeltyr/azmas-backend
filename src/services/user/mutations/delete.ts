import { Prisma, PrismaClient } from "@prisma/client";
import { User, MutationDeleteUserArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteUserArgs,
  req: any,
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>,
): Promise<boolean> => {
  try {

    let user = await prisma.user.findFirst({
      where: { id: args.id },
    });
    if (null === user)
      return false;
    let deletedRows = await prisma.user.delete({
      where: { id: args.id },
    });
    if (deletedRows) return true;
  } catch (e) {
    return false;
  }
};

export default Delete;