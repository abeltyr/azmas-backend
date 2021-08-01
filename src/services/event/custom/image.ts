const EventImage = async (parent, _, { req, prisma, utils, services }) => {
  let relation = await prisma.uploadFileRelation.findFirst({
    where: {
      tableType: "Event",
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
          tableType: "Event",
          tableId: parent.id,
          fileId: defaultFile.id,
          Field: "image",
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

export default EventImage;
