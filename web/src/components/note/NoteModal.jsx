import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteNote, updateNote } from "../../redux/actions/noteActions";

import ActionBar from "./ActionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";
import Button from "../UI/Button";
import Styles from "../../constants/Styles";
// import { inputchangeHandler } from "../../constants/helper";

const NoteModal = ({ note, onCancel, onConfirm }) => {
  const dispatch = useDispatch();

  const [noteUpdateData, setNoteUpdateData] = useState({
    id: note._id,
    title: note.title,
    description: note.description,
    labels: note.labels,
    creator: note.creator,
    background: "bg-white",
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

  const toggleBackgroundChange = (color) => {
    setNoteUpdateData({
      ...noteUpdateData,
      background: color,
    });
    console.log("background value was: ", noteUpdateData.background);
    // dispatch(updateNote(note._id, noteUpdateData));
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

  const noteUpdateHandler = () => {
    dispatch(updateNote(note._id, noteUpdateData));
    onConfirm();
  };

  return (
    <div className={`${Styles.backdropContainer}`}>
      <div
        className={Styles.backdropStyle}
        onClick={() => {
          console.log("Note Modal clicked");
          onCancel();
        }}
      ></div>
      <div
        className={`absolute top-16 ${noteUpdateData.background} z-10 
          overflow-y-visible h-max rounded-lg max-w-2xl w-144
          `}
        // className={`top-16 mx-auto relative bg-white z-10
        // max-h-144 h-auto rounded-2xl max-w-2xl w-144 m-4
        // overflow-y-scroll scroll-smooth scroll-2 scrollbar-sm
        // `}
        // onClick={() => {
        //   console.log("NoteModaal clicked");
        // }}
      >
        <div className="bg-grocery-pattern bg-cover rounded-t-lg overflow-y-scroll scroll-smooth scrollbar-sm overflow-x-hidden max-h-144">
          <Title
            title={note.title}
            togglePinNote={togglePinNote}
            inputChangeHandler={inputChangeHandler}
            pinned={noteUpdateData.pinned}
            isMouseOver={true}
          />
          <Content description={note.description} inputChangeHandler={inputChangeHandler} />
          <LabelBar labels={note.labels} edited={note.updatedAt} />
        </div>
        <ActionBar
          toggleArchive={toggleArchive}
          toggleCheckBoxMode={toggleCheckBoxMode}
          toggleDelete={toggleDelete}
          noteBackgrounchange={toggleBackgroundChange}
          archived={noteUpdateData.archived}
          onConfirm={onConfirm}
          isMouseOver={true}
          creating={true}
        />
        <div className="flex border-t">
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
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
