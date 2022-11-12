import React, { useEffect } from "react";

import IconHolder from "../UI/IconHolder";
import { ReactComponent as Alert } from "../../icons/add_alert_black_24dp.svg";
import { ReactComponent as Delete } from "../../icons/delete_black_24dp.svg";
import { ReactComponent as Label } from "../../icons/label_black_24dp.svg";
import { ReactComponent as CheckBox } from "../../icons/check_box_black_24dp.svg";
import { ReactComponent as Person } from "../../icons/person_add_alt_black_24dp.svg";
import { ReactComponent as Archive } from "../../icons/archive_black_24dp.svg";
import { ReactComponent as Color } from "../../icons/color_lens_black_24dp.svg";

const AtionBar = (props) => {
  useEffect(() => {
    console.log("uesEffect NoteActionBar");

    return () => {
      console.log("NoteActionBar CleanUp");
    };
  }, []);


  return (
    <div className="flex border justify-between">
      <div className="flex">
        <IconHolder className={`${sty2}`}>
          <Alert className={`${iconStyle}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Person className={`${iconStyle} cursor-not-allowed`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Color className={`${iconStyle}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Label className={`${iconStyle}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Archive className={`${iconStyle}`} onClick={props.toggleArchive} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <CheckBox
            className={`${iconStyle}`}
            onClick={props.toggleCheckBoxMode}
          />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Delete className={`${iconStyle}`} onClick={props.toggleDelete} />
        </IconHolder>
      </div>
      <div className="border border-red-600 flex">
        <button
          className="font-bold rounded-md w-16 p-0.5 hover:bg-gray-300"
          onClick={props.onConfirm}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const iconStyle =
  "stroke-2 p-2 h-8 w-8 hover:bg-gray-200 hover:rounded-full cursor-pointer";
const sty2 = "";
export default AtionBar;
