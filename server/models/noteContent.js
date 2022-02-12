import mongoose from "mongoose";

// const Schema = mongoose.Schema;

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  labels: [String],
  color: String,
  pinned: Boolean,
  createdAt: { type: Date, default: new Date() },
});

const NoteContent = mongoose.model("NoteContent", noteSchema);

export default NoteContent;
