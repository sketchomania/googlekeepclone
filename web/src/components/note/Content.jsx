import React from "react";
import EditableDiv from "../UI/EditableDiv";

const Content = (props) => {
  return (
    <div className="border border-slate-900 p-1.5">
      {/* <p className="w-full">{props.description}</p> */}
      <EditableDiv id="description" inputChangeHandler={props.inputChangeHandler}>
        {props.description}
      </EditableDiv>
    </div>
  );
};

export default Content;
