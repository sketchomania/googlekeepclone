import React from "react";

import EditableDiv from "../UI/EditableDiv";
import { ReactComponent as Pin } from "../../icons/push_pin_black_24dp.svg";
import { ReactComponent as PinFilled } from "../../icons/push_pin_black_filled_24dp.svg";
import Styles from "../../constants/Styles";

const Title = ({ togglePinNote, pinned, title, isMouseOver, inputChangeHandler }) => {
  const iconStyle = `${isMouseOver ? "fill-zinc-700" : "fill-none"} scale-90 ${
    Styles.iconCommonStyle
  }`;
  return (
    <div className="px-4 pt-3 flex text-base font-semibold  justify-between">
      {/* <h3 className="font-bold text-xl text-gray-800" id="title">{props.title}</h3> */}
      {/* <p id="title">{title}</p> */}
      <EditableDiv id="title" inputChangeHandler={inputChangeHandler} value={title} />
      {/* {title}
      </EditableDiv> */}
      <span onClick={togglePinNote}>
        {pinned ? (
          <PinFilled title="Unpin note" className={`${iconStyle}`} />
        ) : (
          <Pin title="Pin note" className={`${iconStyle}`} />
        )}
      </span>
    </div>
  );
};

export default Title;
