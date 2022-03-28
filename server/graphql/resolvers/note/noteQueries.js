import NoteContent from "../../../models/note.js";

const noteQueries = {
  notes: async (req, res) => {
    try {
      const noteContent = await NoteContent.find();
      return noteContent.map((note) => {
        return note;
      });
      // res.status(200).json(noteContent);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  //   note: async (req,res) => {},
};

export default noteQueries;
