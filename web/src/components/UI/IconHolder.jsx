import React from "react";

const IconHolder = (props) => {
  return (
    <div className={`${props.className} `}>
      {props.children}
    </div>
  );
};

export default IconHolder;
