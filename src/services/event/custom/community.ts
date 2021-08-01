const community = async (parent, args, { req, prisma, utils, services }) => {
  return await prisma.Community.findFirst({
    where: { id: parent.communityId },
  });
};

export default community;
