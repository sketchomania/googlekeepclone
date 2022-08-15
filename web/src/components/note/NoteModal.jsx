import { useState } from "react";

import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";
import Button from "../UI/Button";
// import EditableDiv from "../UI/EditableDiv";
// import { inputchangeHandler } from "../../constants/helper";

const NoteModal = (props) => {
  const [noteUpdateData, setNoteUpdateData] = useState({
    title: "",
    description: "",
    labels: null,
    creator: "",
    background: "",
    pinned: false,
    selected: false,
    listMode: false,
    archived: false,
    deleted: false,
    createdAt: "",
    updatedAt: "",
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

  const toggleAddLabel = (data) => {
    setNoteUpdateData({
      ...noteUpdateData,
      labels: data,
    });
    console.log("labels value was: ", noteUpdateData.labels);
  };

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

  const toggleDelete = () => {
    setNoteUpdateData({
      ...noteUpdateData,
      deleted: !noteUpdateData.deleted,
    });
    console.log("deleted value was: ", noteUpdateData.deleted);
  };

  // const updatedTimeHandler = () => {
  //   setNoteUpdateData({
  //     ...noteUpdateData,
  //     updatedAt: new Date().toLocaleString(),
  //   });
  // };

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 h-screen md:inset-0 w-full md:h-full">
        <div
          className={`top-16 mx-auto relative bg-white shadow-3xl max-w-2xl w-144 
          max-h-144 h-auto m-1 p-1 rounded-2xl border border-indigo-600 dark:bg-gray-500 
          overflow-y-scroll scroll-smooth scroll-2 scrollbar-sm
          `}
          onClick={() => {
            console.log("NoteModaal clicked");
          }}
        >
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button onClick={props.onConfirm}>Confirm</Button>
          <Button
            // contentEditable="false"
            onClick={() => {
              console.log(noteUpdateData);
            }}
          >
            log noteUpdateData
          </Button>
          <div className="border border-red-900 p-1.5">
            <Title
              title={props.note.title}
              togglePinNote={togglePinNote}
              inputChangeHandler={inputChangeHandler}
            />
            <Content
              description={props.note.description}
              inputChangeHandler={inputChangeHandler}
            />
            <p>{`ID: ${props.note._id}`}</p>
            <p>{`Archived: ${props.note.Archived}`}</p>
            <p>{`Background: ${props.note.background}`}</p>
            <p>{`Deleted: ${props.note.deleted}`}</p>
            <p>{`ListMode: ${props.note.listMode}`}</p>
            <p>{`Pinned: ${props.note.pinned}`}</p>
            <p>{`Selected: ${props.note.selected}`}</p>
            <p>{`Created at: ${props.note.createdAt}`}</p>
            <p>{`Updated at: ${props.note.updatedAt}`}</p>
            <p>{`Creator: ${props.note.creator._id}`}</p>
          </div>
          <div className="">
            <LabelBar labels={props.note.labels} />
          </div>
          <div className="">
            <ActionBar
              toggleArchive={toggleArchive}
              toggleCheckBoxMode={toggleCheckBoxMode}
              toggleDelete={toggleDelete}
              onConfirm={props.onConfirm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteModal;
