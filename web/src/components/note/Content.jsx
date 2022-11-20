import React from "react";
// import EditableDiv from "../UI/EditableDiv";

const Content = (props) => {
  return (
    <div className="px-4 pb-2">
      <p >{props.description}</p>
      {/* <EditableDiv id="description" inputChangeHandler={props.inputChangeHandler}>
        {props.description}
      </EditableDiv> */}
    </div>
  );
};

export default Content;
