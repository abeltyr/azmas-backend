const tickets = async (parent, args, { req, prisma, utils, services }) => {
  return await prisma.ticket.findMany({
    where: { communityId: parent.id },
  });
};

export default tickets;
