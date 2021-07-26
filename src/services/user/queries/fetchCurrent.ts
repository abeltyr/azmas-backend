import { User } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchCurrentOne = async (
  req: any,
  prisma: PrismaClient
): Promise<Partial<User>> => {
  // let email = req.req.user.email.toLowerCase();
  let email = "abeltyr@gmail.com";
  let fetchedUser;
  return fetchedUser;
};

export default FetchCurrentOne;
