const tickets = async (parent, args, { req, prisma, utils, services }) => {
  return await prisma.ticket.findMany({
    where: { groupId: parent.id },
  });
};

export default tickets;
