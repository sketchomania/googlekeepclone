import React from "react";

const LabelBar = ({ labels }) => {
  return (
    <div className="flex flex-wrap px-2.5 py-1 text-xs">
      {labels.map((label) => (
        <>
          <div
            className={`flex items-center justify-center  border bg-zinc-200 
            px-1 py-0.5 m-0.5 rounded-xl`}
            key={label._id}
          >
            <p>{label.name}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default LabelBar;
