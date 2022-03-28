// import notesResolver from "./notes.js";
// import { noteQueries } from "./note";
// import { noteQueries } from "./note/index.js";
import noteQueries from "./note/noteQueries.js";
import labelQueries from "./label/labelQueries.js";
import authMutations from "./auth/authMutations.js";
// import labelResolver from "./labels.js";
// import { labelResolver } from "./labels";
// import notesResolver from "./notes";

const rootResolver = {
  ...noteQueries,
  ...labelQueries,
  ...authMutations,
  // query: {
  //   ...noteQueries,
  // },
  // mutation: {},
  // ...notesResolver,
  // ...labelResolver,
};

export default rootResolver;
