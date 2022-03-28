//  This file is not being used goto note/
import NoteContent from "../../models/note.js";

const notesResolver = {
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
};

export default notesResolver;
