import NoteContent from "../../models/note";

module.exports = {
    getNotes: async (req, res) => {
        try {
          const noteContent = await NoteContent.find();
          return 
          res.status(200).json(noteContent);
        } catch (error) {
          res.status(404).json({ message: error.message });
        }
      },
}