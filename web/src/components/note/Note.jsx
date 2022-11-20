import { useState, useEffect } from "react";

import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";

import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import NoteModal from "./NoteModal";

const Note = (props) => {
  const [creating, setCreating] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const startCreateEventHandler = () => {
    setCreating(true);
  };

  const modalConfirmHandler = () => {
    setCreating(false);
  };

  const modalCancelHandler = () => {
    setCreating(false);
  };

  const mouseOverHandler = () => {
    if (!isMouseOver) {
      // console.log("mouseOver", isMouseOver);
      // setIsMouseOver(true);
    }
  };

  const mouseLeaveHandler = () => {
    // console.log("mouseLeave", isMouseOver);
    // setIsMouseOver(false);
  };

  useEffect(() => {
    console.log("note component Cleanup");

    return () => {
      console.log("note component Cleanup");
      mouseLeaveHandler();
    };
  }, []);

  return (
    <>
      {creating && <Backdrop onCancel={modalCancelHandler} />}
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
        className={`border border-gray-200 m-1 max-w-2xl w-60 max-h-144 rounded-2xl hover:shadow-md hover:shadow-gray-400 
         overflow-hidden`}
        // className={
        //   `border max-w-2xl w-60 max-h-144 m-1.5 p-2 rounded-2xl hover:bg-gray-200
        //  overflow-x-hidden ${
        //    creating
        //      ? `overflow-y-scroll scroll-smooth scroll-2 scrollbar-sm`
        //      : `overflow-y-hidden `
        //  } `
        // }

        // onMouseOver={(e) => {console.log("mouse-over")}}
        // onClick={() => {
        //   console.log("Note clicked:", props.note._id);
        // }}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseOverHandler}
        onClick={startCreateEventHandler}
      >
        {/* <Button
          className=""
          // onClick={startCreateEventHandler}
        >
          show note
        </Button> */}
        <div className="text-sm">
          <div>
            {/* <div className="overflow-y-scroll overflow-x-hidden scroll-smooth"></div> */}
            <Title title={props.note.title} isMouseOver={isMouseOver} />
            <Content description={props.note.description} />
            {/* <>
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
            </> */}
          </div>
          <LabelBar labels={props.note.labels} />
          <ActionBar isMouseOver={isMouseOver} />
        </div>
      </div>
    </>
  );
};

// note have a 1px border of selected colour
export default Note;
