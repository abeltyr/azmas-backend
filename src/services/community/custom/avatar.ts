const CommunityImage = async (parent, _, { req, prisma, utils, services }) => {
  let relation = await prisma.uploadFileRelation.findFirst({
    where: {
      tableType: "Community",
      tableId: parent.id,
    },
  });
  if (!relation) {
    let defaultFile = await prisma.uploadFile.findFirst({
      where: {
        name: "AzmasDefault.png.AZ",
      },
    });
    if (defaultFile) {
      await prisma.uploadFileRelation.create({
        data: {
          tableType: "Community",
          tableId: parent.id,
          fileId: defaultFile.id,
          Field: "avatar",
        },
      });
      return defaultFile;
    } else return null;
  }
  return await prisma.uploadFile.findFirst({
    where: {
      id: relation.fileId,
    },
  });
};

export default CommunityImage;
