import mongoose from "mongoose";

const Schema = mongoose.Schema;

const labelSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  assignedNotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // color: String,
  // pinned: { type: Boolean, default: false },
  // createdAt: { type: Date, default: new Date() },
});

const Label = mongoose.model("Label", labelSchema);

export default Label;
