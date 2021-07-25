import {
  MutationUpdateUserArgs,
  ResolversTypes
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateUserArgs,
  req: any,
): Promise<ResolversTypes["User"]> => {

  let update;
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;