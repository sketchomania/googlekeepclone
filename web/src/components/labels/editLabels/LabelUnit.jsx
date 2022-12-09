import { useState } from "react";

import { ReactComponent as DeleteFillIcon } from "../../../icons/delete_fill_black_24dp.svg";
import { ReactComponent as EditFillIcon } from "../../../icons/edit_fill_black_20dp.svg";
import { ReactComponent as LabelFillIcon } from "../../../icons/label_fill_black_24dp.svg";
import { ReactComponent as DoneIcon } from "../../../icons/done_black_24dp.svg";

const LabelUnit = ({ label }) => {
  const iconContainer =
    "p-0.5 rounded-full flex items-center justify-center fill-zinc-500 hover:fill-black hover:bg-zinc-200 cursor-pointer";
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="flex justify-between h-11 items-center"
        onMouseEnter={() => {
          // console.log("mouse Enter");
          setHover(true);
        }}
        onMouseLeave={() => {
          // console.log("mouse Leave");
          setHover(false);
        }}
      >
        <div className={`${iconContainer}`} title="Delete label">
          {hover ? (
            <DeleteFillIcon className="scale-75" />
          ) : (
            <LabelFillIcon className="scale-75" />
          )}
        </div>
        <p className="px-3 w-52 text-zinc-800 text-sm font-medium">
          {label.name}
        </p>
        <div className={`${iconContainer}`} title="Rename label">
          <EditFillIcon className="scale-75" />
          {/* <DoneIcon className="scale-75" /> */}
        </div>
      </div>
    </>
  );
};

export default LabelUnit;
