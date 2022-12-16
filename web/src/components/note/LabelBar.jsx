import React from "react";

const LabelBar = ({ labels, edited }) => {
  return (
    <div className="flex flex-wrap px-2.5 py-1 text-xs items-center justify-between">
      <div className="flex flex-wrap">
        {labels &&
          labels.map((label) => (
            <div
              className={`flex items-center justify-center bg-zinc-700 bg-opacity-10 
              text-zinc-700 font-medium px-2 py-1 m-0.5 rounded-xl cursor-pointer`}
              key={label._id}
            >
              <p>{label.name}</p>
            </div>
          ))}
      </div>
      <>
        {edited && (
          <p>{`Edited ${new Date(edited).toDateString().slice(4)}`}</p>
        )}
      </>
    </div>
  );
};

export default LabelBar;
