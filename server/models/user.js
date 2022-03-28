import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
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
  darkMode: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// need to export userSchema here......!!!
