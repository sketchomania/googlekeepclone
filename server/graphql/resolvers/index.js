import noteQueries from "./note/noteQueries.js";
import noteMutations from "./note/noteMutations.js";
import labelQueries from "./label/labelQueries.js";
import labelMutations from "./label/labelMutations.js";
import authMutations from "./auth/authMutations.js";
import authQueries from "./auth/authQueries.js";

const rootResolver = {
  ...noteQueries,
  ...noteMutations,
  ...labelQueries,
  ...labelMutations,
  ...authMutations,
  ...authQueries,
};

export default rootResolver;
