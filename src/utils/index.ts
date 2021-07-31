import { sign, upload, deleteData } from "./upload/space";
import { uploadData } from "./upload/index";
import { GetUser } from "./userMiddleware";
export default {
  space: {
    upload,
    sign,
    deleteData,
  },
  uploadData,
  GetUser,
};
