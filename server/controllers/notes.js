import NoteContent from "../models/noteContent.js";

export const getNotes = async (req, res) => {
  try {
    const noteContent = await NoteContent.find();

    req.status(200).json(noteContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("There you go!");
};
