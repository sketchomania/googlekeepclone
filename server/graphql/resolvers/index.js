import noteQueries from "./note/noteQueries.js";
import noteMutations from "./note/noteMutations.js";
import labelQueries from "./label/labelQueries.js";
import labelMutations from "./label/labelMutations.js";
import authMutations from "./auth/authMutations.js";

const rootResolver = {
  ...noteQueries,
  ...noteMutations,
  ...labelQueries,
  ...labelMutations,
  ...authMutations,
};

export default rootResolver;
