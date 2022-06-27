import Note from "../../models/note.js";
import Label from "../../models/label.js";
import User from "../../models/user.js";
import { dateToISOString } from "../../helper/date.js";

const notes = async (noteIds) => {
  try {
    const notes = await Note.find({ _id: { $in: noteIds } });
    return notes.map((note) => {
      return transformNote(note);
    });
  } catch (err) {
    throw err;
  }
};

const labels = async (labelIds) => {
  try {
    const labels = await Label.find({ _id: { $in: labelIds } });
    return labels.map((label) => {
      return transformLabel(label);
    });
  } catch (err) {
    throw err;
  }
};

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user._id,
      createdNotes: notes.bind(this, user._doc.createdNotes),
      createdLabels: labels.bind(this, user._doc.createdLabels),
    };
  } catch (err) {
    throw err;
  }
};

const transformNote = (note) => {
  return {
    ...note._doc,
    _id: note.id,
    createdAt: dateToISOString(note._doc.createdAt),
    updatedAt: dateToISOString(note._doc.updatedAt),
    labels: labels.bind(this, note._doc.labels),
    creator: user.bind(this, note.creator),
  };
};

const transformLabel = (label) => {
  return {
    ...label._doc,
    _id: label.id,
    assignedNotes: notes.bind(this, label.assignedNotes),
    creator: user.bind(this, label.creator),
  };
};

export { transformNote, transformLabel };
