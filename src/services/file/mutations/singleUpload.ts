import { FileUpload } from "graphql-upload";
import { File, MutationSingleUploadArgs, User } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const singleUpload = async (
  args: MutationSingleUploadArgs,
  prisma: PrismaClient,
  uploadData: (fileData: FileUpload, user?: User) => Promise<File>
): Promise<File> => {
  // let user = await userModel().findById(args.userId);
  // if (!user) throw new Error();
  let createdFile = await uploadData(args.file);

  return createdFile;
};

export default singleUpload;
