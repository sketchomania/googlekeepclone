import mongoose from "mongoose";

const labelSchema = mongoose.Schema({
  name: String,
});

const Label = mongoose.model("Label", labelSchema);

export default Label;
