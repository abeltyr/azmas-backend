import { User } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchCurrentOne = async (
  req: any,
  prisma: PrismaClient
): Promise<Partial<User>> => {
  let user = await prisma.user.findUnique({
    where: {
      id: req.req.user.id,
    },
  });
  let tokenData = await prisma.userToken.findFirst({
    where: {
      userId: user.id,
      active: true,
    },
  });

  return { ...user, token: tokenData.token };
};

export default FetchCurrentOne;
