import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdNotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  createdLabels: [
    {
      type: Schema.Types.ObjectId,
      ref: "Label",
    },
  ],
});
