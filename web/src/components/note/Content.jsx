import React from "react";

const Content = ({ description }) => {
  return (
    <div className="border border-slate-900 p-1.5">
      <p>{description}</p>
    </div>
  );
};

export default Content;
