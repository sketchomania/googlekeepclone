import { useSelector } from "react-redux";

import Label from "./label/Label";

const ListLabels = ({ showLabel }) => {
  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  const labelData = useSelector((state) => state.labelReducer);
  // console.log(labelData);

  return (
    <div className="border border-green-500">
      <p>ListLabels component</p>
      {/* its working  and if it's not working just comment out the LABELs.map part and refresh */}
      {console.log("labelData: ", labelData)}

      {labelData.labels.map((label) => (
        <div key={label._id}>
          <Label
            label={label}
            name={label.name}
            showLabel={showLabel}
          />
        </div>
      ))}
    </div>
  );
};

export default ListLabels;
