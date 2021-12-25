import mongoose from "mongoose";

import NoteContent from "../models/noteContent.js";

export const getNotes = async (req, res) => {
  try {
    const noteContent = await NoteContent.find();

    res.status(200).json(noteContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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
};

export const updateNote = async (req, res) => {
  const { id: _id } = req.params;
  const note = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No note with id: ${id}`);

  const updatedNote = await NoteContent.findByIdAndUpdate(_id, note, {
    new: true,
  });

  res.json(updatedNote);
};
