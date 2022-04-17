import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
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
    background: {
      type: String,
      default: "",
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pinned: { type: Boolean, default: false },
    selected: { type: Boolean, default: false },
    listMode: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    // createdAt: { type: Date, default: new Date() },
    // updatedAt: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
