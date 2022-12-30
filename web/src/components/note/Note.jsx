import { useState, useEffect } from "react";

import NoteModal from "./NoteModal";
import ActionBar from "./ActionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";

import { ReactComponent as CheckFilled } from "../../icons/check_circle_filled_black_24dp.svg";
import Styles from "../../constants/Styles";

const Note = ({ note }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const startCreateEventHandler = () => {
    setIsCreating(true);
  };
  const modalConfirmHandler = () => {
    setIsCreating(false);
  };
  const modalCancelHandler = () => {
    setIsCreating(false);
  };

  const mouseMoveHandler = () => {
    if (!isMouseOver) {
      // console.log("mouseMove: ", isMouseOver);
      setIsMouseOver(true);
    }
  };
  const mouseLeaveHandler = () => {
    // console.log("mouseLeave", isMouseOver);
    setIsMouseOver(false);
  };

  // useEffect(() => {
  //   console.log("note component Cleanup");

  //   return () => {
  //     console.log("note component Cleanup");
  //     // listen on change
  //     // note update time
  //     mouseLeaveHandler();
  //   };
  // }, []);

  const iconStyle = `${isMouseOver ? "fill-black" : "fill-none"} ${Styles.iconCommonStyle}`;

  return (
    <>
      {isCreating && (
        <NoteModal note={note} onCancel={modalCancelHandler} onConfirm={modalConfirmHandler} />
      )}
      <div
        className={`${note.background} border border-gray-200 m-1 max-w-2xl w-60 max-h-144 rounded-lg 
        hover:shadow-md hover:shadow-gray-400 relative flex flex-col  text-sm bg-travel bg-cover bg-no-repeat`}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={startCreateEventHandler}
      >
        <div className="absolute -left-2 -top-2">
          <CheckFilled className={`${iconStyle}`} />
        </div>
        <div
          className="mb-10 overflow-hidden "
          // onClick={startCreateEventHandler}
        >
          <Title title={note.title} isMouseOver={isMouseOver} />
          <Content description={note.description} />
          <LabelBar labels={note.labels} />
        </div>
        <div className="absolute bottom-0 left-0 overflow-hidden max-w-min">
          <ActionBar isMouseOver={isMouseOver} isCreating={isCreating} />
        </div>
      </div>
    </>
  );
};

export default Note;
