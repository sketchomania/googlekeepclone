import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  labels: [String],
  // color: String,
  // pinned: { type: Boolean, default: false },
  // createdAt: { type: Date, default: new Date() },
});

const NoteContent = mongoose.model("NoteContent", noteSchema);

export default NoteContent;
