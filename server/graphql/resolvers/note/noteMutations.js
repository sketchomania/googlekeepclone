import Note from "../../../models/note.js";
import User from "../../../models/user.js";
import { transformNote } from "../merge.js";

const noteMutations = {
  createNote: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    const note = new Note({
      title: args.noteCreateInput.title,
      description: args.noteCreateInput.description,
      creator: req.userId,
      // labels: [Label!],
      background: args.noteCreateInput.background,
      pinned: args.noteCreateInput.pinned,
      selected: args.noteCreateInput.selected,
      listMode: args.noteCreateInput.listMode,
      archived: args.noteCreateInput.archived,
      deleted: args.noteCreateInput.deleted,
      // createdAt: String!,
      // updatedAt: String!,
    });
    let createdNote;
    try {
      const result = await note.save();
      createdNote = transformNote(result);
      const noteCreator = await User.findById(req.userId);
      if (!noteCreator) {
        throw new Error("User not found.");
      }
      noteCreator.createdNotes.push(note);
      await noteCreator.save();

      return createdNote;
    } catch (err) {
      throw err;
    }
  },

  deleteNote: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      await Note.findByIdAndRemove({ _id: args.id });
      const noteCreator = await User.findById(req.userId);
      if (!noteCreator) {
        throw new Error("User not found.");
      }
      noteCreator.createdNotes.pull(args.id);
      await noteCreator.save();

      return true;
    } catch (err) {
      return false;
    }
  },

  updateNote: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    try {
      return await Note.findOneAndUpdate(
        { _id: args.id },
        {
          $set: {
            title: args.noteUpdateInput.title,
            description: args.noteUpdateInput.description,
          },
        },
        {
          new: true,
        }
      );
    } catch (err) {
      throw err;
    }
  },
};

export default noteMutations;
