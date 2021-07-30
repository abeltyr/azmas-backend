import { Prisma, PrismaClient } from "@prisma/client";
import { MutationProfileUpdateArgs } from "../../../types/graphql";

const updateProfile = async (
  args: MutationProfileUpdateArgs,
  req: any,
  prisma: PrismaClient
): Promise<Boolean> => {
  try {
    let userData = await prisma.user.findFirst({
      where: { id: req.req.user.id },
    });
    let file = await prisma.uploadFile.findFirst({
      where: {
        id: args.uploadFileId,
      },
    });
    if (!file) {
      file = await prisma.uploadFile.findFirst({
        where: {
          name: "AzmasDefault.png.AZ",
        },
      });
    }

    let uploadFiles = await prisma.uploadFileRelation.findFirst({
      where: {
        tableType: "User",
        tableId: userData.id,
        Field: "avatar",
      },
    });

    let uploadFileRelation = await prisma.uploadFileRelation.update({
      data: {
        tableType: "User",
        tableId: userData.id,
        fileId: file.id,
        Field: "avatar",
      },
      where: {
        id: uploadFiles.id,
      },
    });
    if (uploadFileRelation) return true;
  } catch (e) {
    throw new Error(e);
  }
  return false;
};

export default updateProfile;
