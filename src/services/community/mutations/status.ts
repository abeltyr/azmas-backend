import { PrismaClient } from "@prisma/client";
import {
  MutationStatusUpdateArgs,
  ResolversTypes,
} from "../../../types/graphql";

const statusCommunity = async (
  args: MutationStatusUpdateArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Community"]> => {
  let community = await prisma.community.findUnique({
    where: { id: args.id },
  });
  if (!community) throw new Error("Community id was invalid");
  let influencer = false;
  let artist = false;
  if ("Artist" === args.status) artist = true;
  else if ("Influencer" === args.status) influencer = true;
  return await prisma.community.update({
    where: { id: args.id },
    data: {
      ...community,
      influencer: influencer,
      artist: artist,
    },
  });
};
export default statusCommunity;
