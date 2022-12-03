import { useState, useEffect } from "react";

import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";

import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import NoteModal from "./NoteModal";

const Note = ({ note }) => {
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
      {/* {creating && <Backdrop onCancel={modalCancelHandler} />} */}
      {creating && (
        <NoteModal
          note={note}
          onCancel={modalCancelHandler}
          onConfirm={modalConfirmHandler}
        >
          <p>note modal</p>
        </NoteModal>
      )}
      <div
        className={`border border-gray-200 m-1 max-w-2xl w-60 max-h-144 rounded-2xl hover:shadow-md hover:shadow-gray-400 
         overflow-hidden`}
        // onMouseOver={(e) => {console.log("mouse-over")}}
        // onClick={() => {
        //   console.log("Note clicked:", note._id);
        // }}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseOverHandler}
        onClick={startCreateEventHandler}
      >
        <div className="text-sm">
          <div>
            {/* <div className="overflow-y-scroll overflow-x-hidden scroll-smooth"></div> */}
            <Title title={note.title} isMouseOver={isMouseOver} />
            <Content description={note.description} />
          </div>
          <LabelBar labels={note.labels} />
          <ActionBar isMouseOver={isMouseOver} />
        </div>
      </div>
    </>
  );
};

// note have a 1px border of selected colour
export default Note;
