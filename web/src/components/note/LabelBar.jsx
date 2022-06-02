import React from "react";

const LabelBar = (props) => {
  return (
    <div>
      {/* {console.log(props)} */}
      {props.labels
        ? props.labels.map((label) => {
            <div key={label._id} className="flex border border-red-900  p-0.5">
              {label._id}
            </div>;
          })
        : ""}
      {/* <div className="flex border border-red-900  p-0.5">{props.labels}</div> */}
    </div>
  );
};

export default LabelBar;
