import { useState, useEffect } from "react";

import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../../redux/actions/noteActions";
// import EditableDiv from "../UI/EditableDiv";
// import { inputchangeHandler } from "../../constants/helper";

const NoteModal = ({ note, onCancel, onConfirm }) => {
  const dispatch = useDispatch();

  const [noteUpdateData, setNoteUpdateData] = useState({
    id: note._id,
    title: note.title,
    description: note.description,
    labels: note.labels,
    creator: note.creator,
    background: note.background,
    pinned: note.pinned,
    selected: note.selected,
    listMode: note.listMode,
    archived: note.archived,
    deleted: note.deleted,
    createdAt: note.createdAt,
    updatedAt: note.updatedAt,
  });

  const inputChangeHandler = (e) => {
    setNoteUpdateData((prevState) => ({
      ...prevState,
      // [e.target.name]: e.target.value,
      // [`${e.target.id}`]: e.target.textContent,
      [`${e.target.id}`]: e.target.outerText,
      updatedAt: new Date().toLocaleString(),
    }));
    // updatedTimeHandler();
  };

  const togglePinNote = () => {
    setNoteUpdateData({
      ...noteUpdateData,
      pinned: !noteUpdateData.pinned,
    });
    console.log("pinned value was: ", noteUpdateData.pinned);
  };

  const toggleBackgroundChange = (data) => {
    setNoteUpdateData({
      ...noteUpdateData,
      background: data,
    });
    console.log("background value was: ", noteUpdateData.background);
  };

  // const toggleAddLabel = (data) => {
  //   setNoteUpdateData({
  //     ...noteUpdateData,
  //     labels: data,
  //   });
  //   console.log("labels value was: ", noteUpdateData.labels);
  // };

  const toggleArchive = () => {
    setNoteUpdateData({
      ...noteUpdateData,
      archived: !noteUpdateData.archived,
    });
    console.log("archived value was: ", noteUpdateData.archived);
  };

  const toggleCheckBoxMode = () => {
    setNoteUpdateData({
      ...noteUpdateData,
      listMode: !noteUpdateData.listMode,
    });
    console.log("listMode value was: ", noteUpdateData.listMode);
  };

  // const updatedTimeHandler = () => {
  //   setNoteUpdateData({
  //     ...noteUpdateData,
  //     updatedAt: new Date().toLocaleString(),
  //   });
  // };

  const noteUpdateHandler = () => {
    dispatch(updateNote(note._id, noteUpdateData));
    onConfirm();
  };

  const toggleDelete = () => {
    setNoteUpdateData({
      ...noteUpdateData,
      deleted: !noteUpdateData.deleted,
    });
    deleteHandler();
    onConfirm();
    console.log("deleted value was: ", noteUpdateData.deleted);
  };
  const deleteHandler = () => {
    dispatch(deleteNote(note._id));

    console.log("deleteHandler called", note._id);
  };

  return (
    <>
      {/* <div className={`fixed top-0 right-0 left-0 z-50 h-screen md:inset-0 w-full md:h-full`}> */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-zinc-800 bg-opacity-75`}
        onClick={() => {
          console.log("Backdrop clicked");
          // onCancel();
        }}
      >
        <div
          className={`top-16 mx-auto relative bg-white z-10 
          max-h-144 h-auto rounded-2xl max-w-2xl w-144 m-4
          overflow-y-scroll scroll-smooth scroll-2 scrollbar-sm
          `}
          // onClick={() => {
          //   console.log("NoteModaal clicked");
          // }}
        >
          <div className="border">
            <Title
              title={note.title}
              togglePinNote={togglePinNote}
              inputChangeHandler={inputChangeHandler}
            />
            <Content
              description={note.description}
              inputChangeHandler={inputChangeHandler}
            />
            {note.labels.length > 0 && <LabelBar labels={note.labels} />}
          </div>
          <div className="">
            <ActionBar
              toggleArchive={toggleArchive}
              toggleCheckBoxMode={toggleCheckBoxMode}
              toggleDelete={toggleDelete}
              onConfirm={onConfirm}
            />
            <>
              <Button onClick={onCancel}>Cancel</Button>
              <Button onClick={onConfirm}>Confirm</Button>
              <Button
                onClick={() => {
                  console.log(noteUpdateData);
                }}
              >
                log noteData
              </Button>
              <Button onClick={noteUpdateHandler}>Update</Button>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteModal;
