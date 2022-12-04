import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  createLabel,
  updateLabel,
  deleteLabel,
} from "../../redux/actions/labelActions";
import Spinner from "../UI/Spinner";
import LabelComponent from "./label/Label";

const AddLabel = ({ currentId, onCancel }) => {
  const dispatch = useDispatch();
  const [labelData, setLabelData] = useState({
    name: "",
  });
  const { isLoading, labels, isError } = useSelector(
    (state) => state.labelReducer
  );
  // const label = useSelector((state) =>
  //   currentId ? state.label.find((l) => l._id === currentId) : null
  // );

  // useEffect(() => {
  //   if (label) setLabelData(label);
  // }, [label]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateLabel(currentId, labelData));
    } else {
      dispatch(createLabel(labelData));
    }

    console.log("Label Submit Clicked", labelData);
    clear();
  };

  const clear = () => {
    // setCurrentId(null);
    setLabelData({ name: "" });
  };

  return (
    <>
      <div className="relative w-72 mx-auto bg-white">
        <form
          className="flex flex-col overflow-hidden h-128 w-72 border"
          onSubmit={submitHandler}
        >
          <div className="p-4 mb-10 overflow-y-scroll scroll-smooth scrollbar-sm">
            <h3 className="font-medium">{"Edit labels"}</h3>
            <input
              id="label"
              name="label"
              type="text"
              placeholder="Create new label"
              value={labelData.name}
              onChange={(e) => {
                setLabelData({ ...labelData, name: e.target.value });
              }}
              className="p-1 w-full border text-sm text-gray-500"
            ></input>

            {isLoading && <Spinner />}
            {labels.map((label) => (
              <div key={label._id}>
                {/* <p>{label.name}</p> */}
                <LabelComponent label={label} showLabel={true} />
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
