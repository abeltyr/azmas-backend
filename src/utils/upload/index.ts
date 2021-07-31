import { FileUpload } from "graphql-upload";
import { User } from "../../types/graphql";
import AWS from "aws-sdk";
import { upload } from "./space";
import { PrismaClient, UploadFile } from "@prisma/client";

export const uploadData: (
  fileData: FileUpload,
  user?: User,
  directory?: string
) => Promise<UploadFile> = async (fileData, user, directory) => {
  const file: FileUpload = await fileData;
  const stream = await file.createReadStream();
  let fileSize = 0;
  stream.on("data", (chunk) => {
    fileSize += chunk.length;
  });
  let bucket = process.env.Aws_Bucket_NAME;
  if (directory) bucket = `${process.env.Aws_Bucket_NAME}/${directory}`;
  const params: AWS.S3.PutObjectRequest = {
    Key: file.filename,
    Bucket: bucket,
    Body: stream,
    ACL: "public-read",
  };
  const { Location } = await upload(params);
  const location = Location;
  const data = location.split("fra1.");
  let previewUrl;
  if (data.length > 0) previewUrl = `${data[0]}fra1.cdn.${data[1]}`;
  const prisma = new PrismaClient();
  const uploadData = await prisma.uploadFile.create({
    data: {
      name: file.filename,
      url: Location,
      directory: directory,
      previewUrl: previewUrl,
      size: fileSize / 1000,
      mime: file.mimetype,
      ext: `.${file.filename.split(".")[file.filename.split(".").length - 1]}`,
      userId: user?.id,
    },
  });
  return uploadData;
};
