import Create from "./mutations/create";
import Update from "./mutations/update";
import Delete from "./mutations/delete";
import FetchAll from "./queries/fetchAll";
import MonthlyEvent from "./queries/monthlyEvent";
import FetchOne from "./queries/fetchOne";
import Community from "./custom/community";
import Tickets from "./custom/tickets";
import EventImage from "./custom/image";

export default {
  FetchOne,
  FetchAll,
  MonthlyEvent,
  Create,
  Update,
  Delete,
  Community,
  EventImage,
  Tickets,
};
