import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";
import LabelComponent from "./label/Label";
// import Label from "./label/Label";

const ListLabels = ({ showLabel, setShowNotesByLabel }) => {
  const stateObj = useSelector((state) => state);
  // const labelData = useSelector((state) => state.labelReducer);
  const { isLoading, labels, isError } = useSelector(
    (state) => state.labelReducer
  );
  // console.log(labelData);

  useEffect(() => {
    console.log("listLabels page useEffect");
    console.log(stateObj);
    console.log("labelData: ", isLoading, labels, isError);

    return () => {
      console.log("listLabels page cleanup");
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="border">
      {labels.map((label) => (
        <div key={label._id}>
          <LabelComponent
            label={label}
            showLabel={showLabel}
            setShowNotesByLabel={setShowNotesByLabel}
          />
        </div>
      ))}
    </div>
  );
};

export default ListLabels;
