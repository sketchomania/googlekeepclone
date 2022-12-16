import React from "react";

import styles from "../../../constants/Styles";
import AddLabel from "./AddLabel";

const EditLabelModal = ({ onCancel }) => {
  return (
    <div className={`${styles.backdropContainer}`}>
      <div
        className={`${styles.backdropStyle}  pt-36`}
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
