import Note from "../../../models/note.js";
import { transformNote } from "../merge.js";

const noteQueries = {
  notes: async (req, res) => {
    try {
      const allNotes = await Note.find();
      return allNotes.map((note) => {
        return transformNote(note);
      });
    } catch (err) {
      throw err;
    }
  },

  note: async (args) => {
    try {
      return await Note.findById(args.id);
    } catch (err) {
      throw err;
    }
  },
};

export default noteQueries;
