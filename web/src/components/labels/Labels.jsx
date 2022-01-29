import { useSelector } from "react-redux";

import Label from "./label/Label";

const Labels = ({ setCurrentId }) => {
  const labels = useSelector((state) => state.labels);

  return (
    <div>
      <p>Labels component</p>
      {labels.map((label) => (
        <div key={label._id}>
          <Label label={label} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Labels;
