import { useSelector } from "react-redux";

import Label from "./label/Label";

const Labels = ({ setCurrentId, showLabel }) => {
  const labels = useSelector((state) => state.labels);
  const notes = useSelector((state) => state.notes);

  return (
    <div className="border border-green-500">
      <p>Labels component</p>
      {/* {console.log(labels)} */}
      {/* {console.log(notes)} */}
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
