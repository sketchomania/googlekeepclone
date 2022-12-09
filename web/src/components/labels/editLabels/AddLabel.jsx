import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  createLabel,
  updateLabel,
  deleteLabel,
} from "../../../redux/actions/labelActions";
import LabelUnit from "./LabelUnit";
import Spinner from "../../UI/Spinner";
import { ReactComponent as CloseIcon } from "../../../icons/close_black_24dp.svg";
import { ReactComponent as DoneIcon } from "../../../icons/done_black_24dp.svg";

const AddLabel = ({ currentId, onCancel }) => {
  const dispatch = useDispatch();
  const [labelData, setLabelData] = useState({
    name: "",
  });
  const { isLoading, labels, isError } = useSelector(
    (state) => state.labelReducer
  );

  const iconContainer =
    "p-0.5 rounded-full flex items-center justify-center fill-zinc-500 hover:fill-black hover:bg-zinc-200 cursor-pointer";
  // const label = useSelector((state) =>
  //   currentId ? state.label.find((l) => l._id === currentId) : null
  // );

  // useEffect(() => {
  //   if (label) setLabelData(label);
  // }, [label]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!(labelData.name.trim() === "")) {
      if (currentId) {
        dispatch(updateLabel(currentId, labelData));
      } else {
        dispatch(createLabel(labelData));
      }

      console.log("Label Submit Clicked", labelData);
    }
    clear();
  };

  const clear = () => {
    // setCurrentId(null);
    setLabelData({ name: "" });
  };

  return (
    <>
      <div className="relative max-w-min mx-auto bg-white">
        <form
          className="flex flex-col overflow-hidden h-128 border"
          onSubmit={submitHandler}
        >
          <div className="p-4 mb-10 overflow-y-scroll scroll-smooth scrollbar-sm">
            <h3 className="font-medium h-6 flex items-center">
              {"Edit labels"}
            </h3>
            <div className="flex justify-between h-11 items-center">
              <div
                className={`${iconContainer}`}
                title="Cancel"
                onClick={clear}
              >
                <CloseIcon className="fill-zinc-500 hover:fill-black scale-75" />
              </div>
              <input
                id="label"
                name="label"
                type="text"
                placeholder="Create new label"
                value={labelData.name}
                onChange={(e) => {
                  setLabelData({ ...labelData, name: e.target.value });
                }}
                className="px-3 w-52 text-sm text-gray-500 outline-none"
              />
              <div
                className={`${iconContainer}`}
                title="Create label"
                onClick={submitHandler}
              >
                <DoneIcon className="scale-75" />
              </div>
            </div>

            {isLoading && <Spinner />}
            {labels.map((label) => (
              <div key={label._id}>
                <LabelUnit label={label} />
              </div>
            ))}
          </div>

          <div
            className={`flex flex-row-reverse p-2.5 absolute border-t bottom-0 right-0 w-full h-14 bg-white`}
          >
            <button
              className="m-1 w-16 rounded-full bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
              type="submit"
            >
              Create
            </button>
            <button
              className="m-1 w-16 rounded-full bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
              onClick={onCancel}
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddLabel;
