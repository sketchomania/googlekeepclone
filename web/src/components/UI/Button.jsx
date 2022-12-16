import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className} font-medium text-zinc-800 text-sm rounded-md px-6 py-2 h-8 flex items-center hover:bg-zinc-500 hover:bg-opacity-5`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
