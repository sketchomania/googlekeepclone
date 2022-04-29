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
      labels: ["61d05f3104f2f5b7e6c5aa79"],
      creator: "6242270cd2fdcd84ac8b8b05",
    });
    let createdNote;
    try {
      const result = await note.save();
      createdNote = transformNote(result);
      const creator = await User.findById("6242270cd2fdcd84ac8b8b05");
      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdNotes.push(note);
      await creator.save();

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
      const creator = await User.findById("6242270cd2fdcd84ac8b8b05");
      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdNotes.pull(args.id);
      await creator.save();

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
