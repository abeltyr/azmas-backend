import { FileUpload } from "graphql-upload";
import { File, MutationMultipleUploadArgs, User } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const multipleUpload = async (
  args: MutationMultipleUploadArgs,
  prisma: PrismaClient,
  uploadData: (fileData: [FileUpload], user: User) => Promise<File>
): Promise<Partial<File>[]> => {
  // let user = await userModel().findById(args.userId);
  // if (!user) throw new Error();
  // let createdFiles = [];

  // for (let f of args.files) {
  //   let createdFile = await uploadData(f, user);

  //   createdFiles = [...createdFiles, createdFile];
  // }
  return null;
};

export default multipleUpload;
