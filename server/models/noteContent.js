import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  labels: [String],
  color: String,
  pinned: Boolean,
  stared: Boolean,
  createdAt: { type: Date, default: new Date() },
});

const NoteContent = mongoose.model("NoteContent", noteSchema);

export default NoteContent;
