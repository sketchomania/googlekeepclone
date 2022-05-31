import { useState } from "react";

import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";

import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import NoteModal from "./NoteModal";

const Note = (props) => {
  const [creating, setCreating] = useState(false);

  const startCreateEventHandler = () => {
    setCreating(true);
  };

  const modalConfirmHandler = () => {
    setCreating(false);
  };

  const modalCancelHandler = () => {
    setCreating(false);
  };

  return (
    <>
      {creating && <Backdrop />}
      {creating && (
        <NoteModal
          note={props.note}
          onCancel={modalCancelHandler}
          onConfirm={modalConfirmHandler}
        >
          <p>note modal</p>
        </NoteModal>
      )}
      <div
        className="border max-w-2xl w-60 max-h-144 overflow-y-scroll overflow-x-hidden scroll-smooth scroll-2 scrollbar-sm m-1 p-1 rounded-2xl hover:bg-gray-200"
        // onMouseOver={(e) => {console.log("mouse-over")}}
        onClick={() => {
          console.log("Note clicked:", props.note._id);
        }}
      >
        <Button className="" onClick={startCreateEventHandler}>
          show note
        </Button>
        <div className="border border-red-900 p-1.5">
          {/* <div className="overflow-y-scroll overflow-x-hidden scroll-smooth"></div> */}
          <Title title={props.note.title} />
          <Content description={props.note.description} />
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
          <ActionBar />
        </div>
      </div>
    </>
  );
};

// note have a 1px border of selected colour
export default Note;
