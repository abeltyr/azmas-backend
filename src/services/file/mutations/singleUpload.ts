import { FileUpload } from "graphql-upload";
import { File, MutationSingleUploadArgs, User } from "../../../types/graphql";
import { PrismaClient, UploadFile } from "@prisma/client";

const singleUpload = async (
  args: MutationSingleUploadArgs,
  req: any,
  uploadData: (
    fileData: FileUpload,
    user?: User,
    directory?: String
  ) => Promise<UploadFile>
): Promise<File> => {
  let createdFile: File = await uploadData(
    args.file,
    req.req.user,
    args.directory
  );

  return createdFile;
};

export default singleUpload;
