import Note from "../../../models/note.js";

const noteQueries = {
  notes: async (req, res) => {
    try {
      const allNotes = await Note.find();
      return allNotes.map((note) => {
        return note;
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
/*
//   note: async (req,res) => {},

// res.status(200).json(noteContent);

catch (error) {
  res.status(404).json({ message: error.message });
}
*/
