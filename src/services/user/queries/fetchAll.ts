import { User, QueryUsersArgs } from "../../../types/graphql";
const FetchAll = async (
    args: QueryUsersArgs,
): Promise<Partial<User>[]> => {
    return null;
};

export default FetchAll;