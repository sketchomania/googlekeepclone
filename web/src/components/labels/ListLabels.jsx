import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";
import Label from "./label/Label";

const ListLabels = ({ showLabel }) => {
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
    <div className="border border-green-500">
      <p>ListLabels component</p>
      {/* its working  and if it's not working just comment out the LABELs.map part and refresh */}
      {/* {console.log("labelData: ", isLoading, labels, isError)} */}

      {labels.map((label) => (
        <div key={label._id}>
          <Label label={label} name={label.name} showLabel={showLabel} />
        </div>
      ))}
    </div>
  );
};

export default ListLabels;
