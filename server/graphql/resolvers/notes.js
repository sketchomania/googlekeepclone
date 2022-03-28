import NoteContent from "../../models/note.js";

// module.exports = {
const notesResolver = {
  getNotes: async (req, res) => {
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
