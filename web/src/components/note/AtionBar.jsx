import React from "react";

import IconHolder from "../UI/IconHolder";
import { ReactComponent as Delete } from "../../icons/delete_black_24dp.svg";
import { ReactComponent as Label } from "../../icons/label_black_24dp.svg";
import { ReactComponent as Check } from "../../icons/check_box_black_24dp.svg";
import { ReactComponent as Person } from "../../icons/person_add_alt_black_24dp.svg";
import { ReactComponent as Archive } from "../../icons/archive_black_24dp.svg";
import { ReactComponent as Color } from "../../icons/color_lens_black_24dp.svg";

const AtionBar = (props) => {
  return (
    <div className="flex border border-red-900 justify-between p-0.5">
      <div className="flex">
        <IconHolder className={`${sty2}`}>
          <Delete className={`${sty1}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Archive className={`${sty1}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Color className={`${sty1}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Label className={`${sty1}`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Person className={`${sty1} cursor-not-allowed`} />
        </IconHolder>
        <IconHolder className={`${sty2}`}>
          <Check className={`${sty1}`} />
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

const sty1 =
  "stroke-2 p-1.5 h-8 w-8 border border-green-400 hover:bg-gray-300 hover:rounded-full";
const sty2 = "px-2";

export default AtionBar;
