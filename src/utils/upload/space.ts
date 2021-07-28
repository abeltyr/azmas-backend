import AWS from "aws-sdk";

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint(process.env.SPACE_ENDPOINT),
  accessKeyId: process.env.SPACE_KEY,
  secretAccessKey: process.env.SPACE_SECRET,
});

export const sign = (params) => {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl("getObject", params, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

export const upload: (
  params: AWS.S3.PutObjectRequest
) => Promise<AWS.S3.ManagedUpload.SendData> = (params) => {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
