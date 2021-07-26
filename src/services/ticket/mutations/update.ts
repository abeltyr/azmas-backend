import { PrismaClient } from "@prisma/client";
import {
  MutationUpdateTicketArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateTicketArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Ticket"]> => {
  let update = await prisma.ticket.update({
    where: { id: args.id },
    data: {
      ...args.data,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
