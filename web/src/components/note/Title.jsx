import React from "react";
import { ReactComponent as Pin } from "../../icons/push_pin_black_filled_24dp.svg";
import EditableDiv from "../UI/EditableDiv";

const Title = ({ togglePinNote, title, inputChangeHandler }) => {
  return (
    <div className="px-4 pt-3 flex text-base font-semibold items-center justify-between">
      {/* <h3 className="font-bold text-xl text-gray-800" id="title">{props.title}</h3> */}
      {/* <p id="title">{title}</p> */}
      <EditableDiv
        id="title"
        inputChangeHandler={inputChangeHandler}
        value={title}
      />
      {/* {title}
      </EditableDiv> */}
      <span>
        <Pin
          className="p-1 h-7 w-7 hover:bg-gray-100 hover:rounded-full cursor-pointer"
          onClick={togglePinNote}
        />
      </span>
    </div>
  );
};

export default Title;
