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
    labels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Label",
      },
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    background: {
      type: String,
      required: true,
      trim: true,
      default: "transparent",
    },
    pinned: { type: Boolean, required: true, default: false },
    selected: { type: Boolean, required: true, default: false },
    listMode: { type: Boolean, required: true, default: false },
    archived: { type: Boolean, required: true, default: false },
    deleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
