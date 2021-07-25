import { User, MutationDeleteUserArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteUserArgs,
  req: any,
): Promise<boolean> => {
  let deletedRows ;
  if (!deletedRows) return false;

  return true;
};

export default Delete;