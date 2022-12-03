import React from "react";
import EditableDiv from "../UI/EditableDiv";

const Content = ({ description, inputChangeHandler }) => {
  return (
    <div className="px-4 pb-2">
      {/* <p >{props.description}</p> */}
      <EditableDiv
        id="description"
        inputChangeHandler={inputChangeHandler}
        value={description}
      />
      {/* {description}
      </EditableDiv> */}
    </div>
  );
};

export default Content;
