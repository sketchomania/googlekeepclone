import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IconHolder from "../UI/IconHolder";
import { ReactComponent as CheckBox } from "../../icons/check_box_black_24dp.svg";
import { createNote, updateNote } from "../../redux/actions/noteActions";

const AddNote = ({ currentId, setCurrentId }) => {
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

  const collapsHandler = () => {
    setExpanded(false);
  };

  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("🟢 Submit clicked");

    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }
    clear();
    setExpanded(false);
  };

  const clear = () => {
    setCurrentId(null);
    setNoteData({
      title: "",
      description: "",
      color: "",
      labels: "",
      isPinned: "",
    });
  };

  const inputchangeHandler = (e) => {
    setNoteData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="my-8 p-2 border border-green-400 flex items-center justify-center">
        <form
          className="w-144 p-2 h-full flex border rounded-md shadow-md shadow-gray-300"
          onSubmit={submitHandler}
        >
          <div className="flex-col w-full">
            {isExpanded && (
              <p className={`${para}`}>
                <textarea
                  className={`${text}`}
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={noteData.title}
                  onChange={(e) => inputchangeHandler(e)}
                  // onChange={(e) => {
                  //   setNoteData({ ...noteData, title: e.target.value });
                  // }}
                ></textarea>
              </p>
            )}
            <p className={`${para}`}>
              <textarea
                className={`${text}`}
                id="description"
                name="description"
                type="description"
                placeholder="Take a note..."
                onClick={expandHandler}
                value={noteData.description}
                onChange={(e) => inputchangeHandler(e)}
                // onChange={(e) => {
                // setNoteData({ ...noteData, description: e.target.value });
                // }}
              ></textarea>
            </p>
            {isExpanded && (
                <textarea
                  className={`${text}`}
                  id="labels"
                  name="labels"
                  type="text"
                  placeholder="Note labels..."
                  value={noteData.labels}
                  onChange={(e) => inputchangeHandler(e)}
                  // onChange={(e) => {
                  //   setNoteData({ ...noteData, labels: e.target.value });
                  // }}
                ></textarea>
            )}
          </div>
          <div className="flex">
            <button
              className="m-1 w-16 h-6 rounded-full bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
              type="submit"
              onClick={() => {
                console.log(noteData);
              }}
            >
              Done
            </button>
            <p
              className="m-1 w-16 h-6 items-center rounded-full bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
              onClick={collapsHandler}
            >
              Close
            </p>
          </div>
          <IconHolder>
            <CheckBox className="stroke-2 p-1.5 h-8 w-8 hover:bg-gray-300 hover:rounded-full" />
          </IconHolder>
        </form>
      </div>
    </>
  );
};

const para = "border outline-none";
const text = "w-full h-6 border outline-none";

export default AddNote;
