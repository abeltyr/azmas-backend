import { PrismaClient } from "@prisma/client";
import {
  MutationDeactivateCommunityArgs,
  ResolversTypes,
} from "../../../types/graphql";

const deactivateCommunity = async (
  args: MutationDeactivateCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<Boolean> => {
  let community = await prisma.community.findUnique({
    where: { id: args.id },
  });
  if (!community) throw new Error("Community id was invalid");
  let res = await prisma.community.update({
    where: { id: args.id },
    data: {
      ...community,
      activated: args.activated,
    },
  });
  return res.activated;
};
export default deactivateCommunity;
