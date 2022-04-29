import Note from "../../../models/note.js";
import { transformNote } from "../merge.js";

const noteQueries = {
  notes: async (args, req) => {
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    try {
      const allNotes = await Note.find();
      return allNotes.map((note) => {
        return transformNote(note);
      });
    } catch (err) {
      throw err;
    }
  },

  note: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      return await Note.findById(args.id);
    } catch (err) {
      throw err;
    }
  },
};

export default noteQueries;
