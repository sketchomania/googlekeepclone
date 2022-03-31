import NoteContent from "../../../models/note.js";

const noteMutations = {
  createNote: async (args) => {
    try {
      const note = new NoteContent({
        title: args.noteCreateInput.title,
        description: args.noteCreateInput.description,
        labels: args.noteCreateInput.labels,
      });

      const result = await note.save();
      return { ...result._doc, _id: result.id };
    } catch (err) {
      throw err;
    }
  },

  deleteNote: async (args) => {
    try {
      await NoteContent.findByIdAndRemove({ _id: args.noteId });
    } catch (err) {
      throw err;
    }
  },
};

export default noteMutations;
