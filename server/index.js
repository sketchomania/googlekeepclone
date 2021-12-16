import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import noteRoutes from "./routes/notes.js";

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use("/notes", noteRoutes);

const CONNECTION_URL =
  "mongodb+srv://googlekeeep:googlekeep007@cluster0.nylpb.mongodb.net/g-keep?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error));

// mongoose.set("useFindAndModify", false);
