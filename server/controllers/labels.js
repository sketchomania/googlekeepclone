import mongoose from "mongoose";

import Label from "../models/label.js";

export const getLabels = async (req, res) => {
  try {
    const label = await Label.find();

    res.status(200).json(label);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLabel = async (req, res) => {
  const label = req.body;

  const newLabel = new Label(label);

  try {
    await newLabel.save();

    res.status(201).json(newLabel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateLabel = async (req, res) => {
  const { id: _id } = req.params;

  const label = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No label with id: ${id}`);

  const updatedLabel = await Label.findByIdAndUpdate(_id, label, {
    new: true,
  });

  res.json(updatedLabel);
};
