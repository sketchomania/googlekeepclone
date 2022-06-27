import mongoose from "mongoose";

const Schema = mongoose.Schema;

const labelSchema = new Schema({
  name: {
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
});

const Label = mongoose.model("Label", labelSchema);

export default Label;
