import React from "react";
import { ReactComponent as Pin } from "../../icons/push_pin_black_filled_24dp.svg";
import EditableDiv from "../UI/EditableDiv";

const Title = (props) => {
  return (
    <div className="flex text-base font-semibold items-center justify-between border p-0.5 bg-yellow-300">
      {/* <h3 className="font-bold text-xl text-gray-800">{props.title}</h3> */}
      <EditableDiv id="title" inputChangeHandler={props.inputChangeHandler}>
        {props.title}
      </EditableDiv>
      <span>
        <Pin
          className=" stroke-2 p-1.5 h-9 w-9 border hover:bg-gray-200 hover:rounded-full cursor-pointer"
          onClick={props.togglePinNote}
        />
      </span>
    </div>
  );
};

export default Title;
