import mongoose from "mongoose";

import NoteContent from "../models/noteContent.js";

export const getNotes = async (req, res) => {
  try {
    const noteContent = await NoteContent.find();

    req.status(200).json(noteContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("There you go!"); // remove in future
};

export const createNote = async (req, res) => {
  const note = req.body;

  const newNote = new NoteContent(note);

  try {
    await newNote.save();

    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  res.send("Created Successfully!"); // remove in future
};
