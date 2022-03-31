import NoteContent from "../../../models/note.js";

const noteQueries = {
  notes: async (req, res) => {
    try {
      const noteContent = await NoteContent.find();
      return noteContent.map((note) => {
        return note;
      });
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
