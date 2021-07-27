import { PrismaClient } from "@prisma/client";
import { MutationRemoveUploadArgs } from "../../../types/graphql";

const removeUpload = async (
  args: MutationRemoveUploadArgs,
  prisma: PrismaClient
): Promise<boolean> => {
  try {
    // await fileMorphQuery()
    //   .where({
    //     upload_file_id: args.id,
    //   })
    //   .delete();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default removeUpload;
