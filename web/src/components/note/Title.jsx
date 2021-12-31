import React from "react";
import { ReactComponent as Pin } from "../../icons/push_pin_black_filled_24dp.svg";

const Title = ({ title }) => {
  return (
    <div className="flex items-center justify-between border border-slate-900 p-0.5">
      <h3 className="font-bold text-xl text-gray-800">{title}</h3>
      <span>
        <Pin className=" stroke-2 p-1.5 h-10 w-10 hover:bg-gray-300 hover:rounded-full" />
      </span>
    </div>
  );
};

export default Title;
