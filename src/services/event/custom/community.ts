const community = async (parent, args, { req, prisma, utils, services }) => {
  return await prisma.community.findUnique({
    where: { id: parent.communityId },
  });
};

export default community;
