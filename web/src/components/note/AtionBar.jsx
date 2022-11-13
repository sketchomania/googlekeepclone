import React from "react";

import { ReactComponent as Alert } from "../../icons/add_alert_black_24dp.svg";
import { ReactComponent as Delete } from "../../icons/delete_black_24dp.svg";
import { ReactComponent as Label } from "../../icons/label_black_24dp.svg";
import { ReactComponent as CheckBox } from "../../icons/check_box_black_24dp.svg";
import { ReactComponent as Person } from "../../icons/person_add_alt_black_24dp.svg";
import { ReactComponent as Archive } from "../../icons/archive_black_24dp.svg";
import { ReactComponent as Color } from "../../icons/color_lens_black_24dp.svg";

const AtionBar = (props) => {
  // useEffect(() => {
  //   console.log("....NoteActionBar uesEffect");

  //   return () => {
  //     console.log("...NoteActionBar CleanUp");
  //   };
  // }, []);

  const mouseOverStyle = props.isMouseOver ? "fill-gray-500" : "fill-none";
  const iconStyle =
    // mouseOverStyle +
    "stroke-2 mx-2 p-2 h-8 w-8 hover:fill-black hover:bg-gray-100 hover:rounded-full cursor-pointer";

  return (
    <div className="flex  justify-between my-1">
      <div className="flex">
        <Alert className={iconStyle} />
        <Person className={`${iconStyle} cursor-not-allowed fill-gray-500`} />
        <Color className={`${iconStyle}`} />
        <Label className={`${iconStyle}`} />
        <Archive className={`${iconStyle}`} onClick={props.toggleArchive} />
        <CheckBox
          className={`${iconStyle}`}
          onClick={props.toggleCheckBoxMode}
        />
        <Delete className={`${iconStyle}`} onClick={props.toggleDelete} />
      </div>
      <div className="flex mr-3">
        <button
          className="font-medium text-gray-800 text-sm rounded-md w-20 hover:bg-gray-100"
          onClick={props.onConfirm}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AtionBar;
