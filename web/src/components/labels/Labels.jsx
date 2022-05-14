import { useSelector } from "react-redux";

import Label from "./label/Label";

const Labels = ({ setCurrentId, showLabel }) => {
  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  const labels = useSelector((state) => state.labelReducer.labels);
  // console.log(labels);

  return (
    <div className="border border-green-500">
      <p>Labels component</p>
      {/* its working  and if it's not working just comment out the LABELs.map part and refresh */}
      {console.log(labels)}

      {labels.map((label) => (
        <div key={label._id}>
          {console.log(label.name)}
          <Label
            label={label}
            name={label.name}
            setCurrentId={setCurrentId}
            showLabel={showLabel}
          />
        </div>
      ))}
    </div>
  );
};

export default Labels;
