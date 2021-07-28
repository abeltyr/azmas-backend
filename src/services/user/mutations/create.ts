import { Prisma, PrismaClient } from "@prisma/client";
import { User, MutationCreateUserArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateUserArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<User>> => {
  args.data.birthDate = new Date(args.data.birthDate);
  const create = await prisma.user.create({
    data: {
      ...args.data,
    },
  });
  return create;
};

export default Create;
