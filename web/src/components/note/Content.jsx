import React from "react";

const Content = (props) => {
  return (
    <div className="border border-slate-900 p-1.5">
      <p>{props.description}</p>
    </div>
  );
};

export default Content;
