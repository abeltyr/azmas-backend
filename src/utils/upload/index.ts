import { FileUpload } from "graphql-upload";
import { User } from "../../types/graphql";
import AWS from "aws-sdk";
import { upload } from "./space";
import { PrismaClient, UploadFile } from "@prisma/client";

export const uploadData: (
  fileData: FileUpload,
  user?: User
) => Promise<UploadFile> = async (fileData, user) => {
  const file: FileUpload = await fileData;
  const stream = await file.createReadStream();
  let fileSize = 0;
  stream.on("data", (chunk) => {
    fileSize += chunk.length;
  });
  const params: AWS.S3.PutObjectRequest = {
    Key: file.filename,
    Bucket: process.env.Aws_Bucket_NAME,
    Body: stream,
    ACL: "public-read",
  };
  const { Location } = await upload(params);

  const prisma = new PrismaClient();
  const uploadData = prisma.uploadFile.create({
    data: {
      name: file.filename,
      url: Location,
      size: fileSize / 1000,
      mime: file.mimetype,
      ext: `.${file.filename.split(".")[file.filename.split(".").length - 1]}`,
    },
  });
  return uploadData;
};