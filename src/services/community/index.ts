import Create from "./mutations/create";
import Update from "./mutations/update";
import Verify from "./mutations/verify";
import Private from "./mutations/private";
import Deactivate from "./mutations/deactivate";
import Delete from "./mutations/delete";
import FetchAll from "./queries/fetchAll";
import Following from "./queries/following";
import FetchOne from "./queries/fetchOne";

export default {
  FetchOne,
  FetchAll,
  Following,
  Create,
  Update,
  Verify,
  Private,
  Deactivate,
  Delete,
};
