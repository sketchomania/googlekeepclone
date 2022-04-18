import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: { type: String, required: true },
    labels: [String],
    background: {
      type: String,
      required: true,
      trim: true,
      default: "transparent",
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pinned: { type: Boolean, required: true, default: false },
    selected: { type: Boolean, required: true, default: false },
    listMode: { type: Boolean, required: true, default: false },
    archived: { type: Boolean, required: true, default: false },
    deleted: { type: Boolean, required: true, default: false },
    // createdAt: { type: Date, default: new Date() },
    // updatedAt: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
