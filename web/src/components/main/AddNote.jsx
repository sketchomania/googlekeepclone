import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IconHolder from "../UI/IconHolder";
import { ReactComponent as CheckBox } from "../../icons/check_box_black_24dp.svg";
import { ReactComponent as Pin } from "../../icons/push_pin_black_filled_24dp.svg";
import { createNote, updateNote } from "../../redux/actions/noteActions";
import ActionBar from "../note/AtionBar";
import styles from "../../constants/Styles";

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }

    console.log("Note Submit clicked: ", noteData);
    clear();
    collapsHandler();
  };

  const clear = () => {
    // setCurrentId(null);
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

  useEffect(() => {
    if (note) setNoteData(note);
    console.log("AppBar useEffect: ", note);

    return () => {
      clear();
      console.log("AppBar cleanUp: ", note);
    };
  }, [note]);

  const para = "flex";
  const text =
    "px-4 py-3 rounded-md placeholder-gray-600 font-medium min-w-4/5 w-full h-11 overflow-hidden resize-none outline-none";

  return (
    <>
      <div className="p-2 flex items-center justify-center">
        <form
          className="w-144 my-6 flex items-center border rounded-md shadow-md shadow-gray-400"
          onSubmit={submitHandler}
        >
          <div className="flex-col w-full">
            {isExpanded && (
              <div className="flex">
                <p className={`${para} w-full`}>
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
                <IconHolder>
                  <Pin className={styles.iconStyleBig} />
                </IconHolder>
              </div>
            )}
            <div className="flex">
              <p className={`${para} w-full`}>
                <textarea
                  className={`${text} text-sm`}
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
              {!isExpanded && (
                <>
                  <IconHolder>
                    <CheckBox className={styles.iconStyleBig} />
                  </IconHolder>
                  <IconHolder>
                    <CheckBox className={styles.iconStyleBig} />
                  </IconHolder>
                  <IconHolder>
                    <CheckBox className={styles.iconStyleBig} />
                  </IconHolder>
                </>
              )}
            </div>
            {isExpanded && (
              <>
                <button
                  className="w-16 h-6 rounded-full bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
                  type="submit"
                  onClick={() => {
                    console.log(noteData);
                  }}
                >
                  Done
                </button>

                <ActionBar onConfirm={collapsHandler} />
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNote;
