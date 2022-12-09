import { useState } from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as DeleteFillIcon } from "../../../icons/delete_fill_black_24dp.svg";
import { ReactComponent as EditFillIcon } from "../../../icons/edit_fill_black_24dp.svg";
import { ReactComponent as LabelFillIcon } from "../../../icons/label_fill_black_24dp.svg";
import { ReactComponent as DoneIcon } from "../../../icons/done_black_24dp.svg";
import { deleteLabel, updateLabel } from "../../../redux/actions/labelActions";

const LabelUnit = ({ label }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [labelUpdateData, setLabelUpdateData] = useState({
    name: label.name,
  });

  const iconContainer =
    "p-0.5 rounded-full flex items-center justify-center fill-zinc-500 hover:fill-black hover:bg-zinc-200 cursor-pointer";

  const labelDeleteHandler = () => {
    dispatch(deleteLabel(label._id));
    console.log("labelDeleteHandler called: ", label);
  };

  const labelStartEditingHandler = () => {
    setIsEditingLabel(true);
  };

  const labelUpdateHandler = () => {
    setIsEditingLabel(false);
    if (!(label.name === labelUpdateData.name)) {
      dispatch(updateLabel(label._id, labelUpdateData));
      console.log(labelUpdateData);
    }
  };

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
        <div
          className={`${iconContainer}`}
          title="Delete label"
          onClick={labelDeleteHandler}
        >
          {hover ? (
            <DeleteFillIcon className="scale-75" />
          ) : (
            <LabelFillIcon className="scale-75" />
          )}
        </div>
        {/* {isEditingLabel ? : } */}
        {/* <p className="px-3 w-52 text-zinc-800 text-sm font-medium">
          {label.name}
        </p> */}
        <input
          id={label.name}
          name={label.name}
          type="text"
          value={labelUpdateData.name}
          onChange={(e) => {
            setIsEditingLabel(true);
            setLabelUpdateData({ name: e.target.value });
          }}
          className="px-3 w-52 text-zinc-800 text-sm font-medium outline-none"
        />
        <div className={`${iconContainer}`} title="Rename label">
          {isEditingLabel ? (
            <DoneIcon className="scale-75" onClick={labelUpdateHandler} />
          ) : (
            <EditFillIcon
              className="scale-75"
              onClick={labelStartEditingHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default LabelUnit;
