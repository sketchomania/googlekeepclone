import React from "react";

import Styles from "../../../constants/Styles";
import AddLabel from "./AddLabel";

const EditLabelModal = ({ onCancel }) => {
  return (
    <div className={`${Styles.backdropContainer}`}>
      <div
        className={`${Styles.backdropStyle}  pt-36`}
        onClick={() => {
          console.log("Edit Label Backdrop clicked");
          onCancel();
        }}
      ></div>
      <AddLabel onCancel={onCancel} />
    </div>
  );
};

export default EditLabelModal;
