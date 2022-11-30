import React from "react";

const LabelBar = ({labels}) => {
  return (
    <div>
      {/* {console.log(props)} */}
      {labels
        ? labels.map((label) => {
            <div key={label._id} className="flex border border-red-900  p-0.5 h-8">
              <p>
                {label._id}
              </p>
            </div>;
          })
        : ""}
      {/* <div className="flex border border-red-900  p-0.5">{props.labels}</div> */}
    </div>
  );
};

export default LabelBar;
