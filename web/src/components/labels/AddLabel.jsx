import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createLabel, updateLabel } from "../../redux/actions/labelActions";

const AddLabel = ({ currentId }) => {
  const [labelData, setLabelData] = useState({
    name: "",
  });
  const label = useSelector((state) =>
    currentId ? state.label.find((l) => l._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (label) setLabelData(label);
  }, [label]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Label Submit Clicked");

    if (currentId) {
      dispatch(updateLabel(currentId, labelData));
    } else {
      dispatch(createLabel(labelData));
    }
    clear();
  };

  const clear = () => {
    // setCurrentId(null);
    setLabelData({ name: "" });
  };

  return (
    <>
      <div className="border border-red-800 p-2">
        <form
          className="flex flex-col justify-center items-center overflow-hidden h-20 w-48 border border-orange-700 "
          onSubmit={submitHandler}
        >
          <p>
            <input
              id="label"
              name="label"
              type="text"
              placeholder="Add Label . . ."
              value={labelData.name}
              onChange={(e) => {
                setLabelData({ ...labelData, name: e.target.value });
              }}
              className="p-1 w-full border border-orange-700 text-sm text-gray-500"
            ></input>
          </p>
          <button
            className="m-1 w-16 rounded-full bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddLabel;
