// import Label from "../../models/label.js";
// import User from "../../models/user.js";
import { dateToISOString } from "../../helper/date.js";

const transformNote = (note) => {
  return {
    ...note._doc,
    _id: note.id,
    createdAt: dateToISOString(note._doc.createdAt),
    updatedAt: dateToISOString(note._doc.updatedAt),
  };
};

const transformLabel = (label) => {
  return {
    ...label._doc,
    _id: label.id,
  };
};

export { transformNote, transformLabel };
