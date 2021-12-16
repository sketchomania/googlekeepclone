import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
// import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";

import classes from "./TakeNote.module.css";
import { createNote, updateNote } from "../../actions/notes";

const TakeNote = ({ currentId, setCurrentId }) => {
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
    color: "",
    labels: "",
    isPinned: "",
  });
  const note = useSelector((state) =>
    currentId ? state.notes.find((n) => n._id === currentId) : null
  );
  const dispatch = useDispatch();
  const [isExpanded, setExpanded] = useState(false);

  const expandHandler = () => {
    setExpanded(true);
  };

  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit clicked");

    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }
  };

  return (
    <>
      <Card className={classes.input}>
        <form className={classes.form} onSubmit={submitHandler}>
          {isExpanded && (
            <p>
              <textarea
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={noteData.title}
                onChange={(e) => {
                  setNoteData({ ...noteData, title: e.target.value });
                }}
              ></textarea>
            </p>
          )}
          <p>
            <textarea
              name="note-content"
              placeholder="Take a note..."
              onClick={expandHandler}
              value={noteData.description}
              onChange={(e) => {
                setNoteData({ ...noteData, description: e.target.value });
              }}
            ></textarea>
          </p>
          {isExpanded && (
            <p>
              <textarea
                name="note-labels"
                placeholder="Note labels..."
                value={noteData.labels}
                onChange={(e) => {
                  setNoteData({ ...noteData, labels: e.target.value });
                }}
              ></textarea>
            </p>
          )}
          <div>
            <button type="submit">Done</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default TakeNote;
