import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Spinner from "../UI/Spinner";
import EditLabelModal from "./editLabels/EditLabelModal";
import LabelComponent from "./label/Label";

const ListLabels = ({ showLabel, setShowNotesByLabel }) => {
  const { isLoading, labels, isError } = useSelector(
    (state) => state.labelReducer
  );
  const [showEditLabel, setShowEditLabel] = useState(false);

  const startCreateEventHandler = () => {
    setShowEditLabel(true);
  };
  const modalCancelHandler = () => {
    setShowEditLabel(false);
  };

  useEffect(() => {
    // console.log("listLabels page useEffect");
    console.log("labelData: ", isLoading, labels, isError);

    return () => {
      console.log("listLabels page cleanup (no action taken!)");
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="border">
      <>
        {labels.map((label) => (
          <div key={label._id}>
            <LabelComponent
              label={label}
              showLabel={showLabel}
              setShowNotesByLabel={setShowNotesByLabel}
            />
          </div>
        ))}
      </>
      <>
        {showEditLabel && (
          <EditLabelModal labels={labels} onCancel={modalCancelHandler} />
        )}
        <div
          className={`rounded-r-3xl pl-4 h-12 flex items-center hover:bg-gray-100 cursor-pointer`}
          onClick={startCreateEventHandler}
        >
          {showLabel && (
            <p className="ml-5 text-gray-800 font-medium">{`Edit labels`}</p>
          )}
        </div>
      </>
    </div>
  );
};

export default ListLabels;
