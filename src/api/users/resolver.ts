const user = async (_, args, { req, model }) => {};

const users = async (_, args, { req, model }) => {};

const createUser = async (_, args, { req, model }) => {};

const updateUser = async (_, args, { req, model }) => {};

const deleteUser = async (_, args, { req, model }) => {};

export default {
  Query: { user, users },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};
