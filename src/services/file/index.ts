import fetchMultiple from "./queries/fetchMultiple";
import fetchOne from "./queries/fetchOne";
import singleUpload from "./mutations/singleUpload";
import removeUpload from "./mutations/removeUpload";
import multipleUpload from "./mutations/multipleUpload";

export default {
  fetchOne,
  fetchMultiple,
  multipleUpload,
  singleUpload,
  removeUpload
};
