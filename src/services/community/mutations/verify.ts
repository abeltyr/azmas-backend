import { PrismaClient } from "@prisma/client";
import {
  MutationVerifyCommunityArgs,
  ResolversTypes,
} from "../../../types/graphql";

const verifyCommunity = async (
  args: MutationVerifyCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Community"]> => {
  let community = await prisma.community.findUnique({
    where: { id: args.id },
  });
  if (!community) throw new Error("Community id was invalid");
  return await prisma.community.update({
    where: { id: args.id },
    data: {
      ...community,
      verified: args.verified,
    },
  });
};
export default verifyCommunity;
