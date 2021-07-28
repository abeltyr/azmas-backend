const group = async (parent, args, { req, prisma, utils, services }) => {
  return await prisma.group.findFirst({
    where: { id: parent.groupId },
  });
};

export default group;
