const Upload = /* GraphQL */ `
  extend type Query {
    getFile(fileId: ID!): File!
    getMultipleFiles(filesIds: [ID]): [File!]!
  }
  extend type Mutation {
    singleUpload(file: Upload!, directory: String): File!
    removeUpload(id: ID): Boolean
    multipleUpload(files: [Uploads]): [File!]!
  }
  type File {
    id: ID!
    name: String
    url: String
    mime: String
    ext: String
    size: Float
  }
`;

export default Upload;
