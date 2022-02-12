import { useSelector } from "react-redux";

import Label from "./label/Label";

const Labels = ({ setCurrentId }) => {
  const labels = useSelector((state) => state.labels);
  const notes = useSelector((state) => state.notes);

  return (
    <div className="border border-green-500">
      <p>Labels component</p>
      {/* {console.log(labels)} */}
      {/* {console.log(notes)} */}
      {labels.map((label) => (
        <div key={label._id}>
          <Label label={label} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Labels;
