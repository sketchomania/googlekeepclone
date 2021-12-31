import React from "react";

const LabelBar = ({ labels }) => {
  return (
    <div>
      <div className="flex border border-red-900  p-0.5">{labels}</div>
    </div>
  );
};

export default LabelBar;
