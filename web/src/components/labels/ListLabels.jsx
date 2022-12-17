import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Spinner from "../UI/Spinner";
import EditLabelModal from "./editLabels/EditLabelModal";
import LabelComponent from "./label/Label";

import { ReactComponent as Lightbulb } from "../../icons/lightbulb_black_24dp.svg";
import { ReactComponent as Reminder } from "../../icons/notifications_black_24dp.svg";
import { ReactComponent as Edit } from "../../icons/edit_black_24dp.svg";
import { ReactComponent as Archive } from "../../icons/archive_black_24dp.svg";
import { ReactComponent as Bin } from "../../icons/bin_black_24dp.svg";
import Styles from "../../constants/Styles";

const ListLabels = ({ showLabel, setShowNotesByLabel }) => {
  const iconStyle = "fill-gray-600 h-11 w-11 p-2.5";
  const round = showLabel ? "rounded-r-3xl" : "rounded-3xl";

  const { isLoading, labels, isError } = useSelector((state) => state.labelReducer);
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

  return (
    <div>
      <>
        <div
          className={`${round} ${Styles.LabelContainerStyle}`}
          onClick={() => {
            setShowNotesByLabel("");
          }}
        >
          <div>
            <Lightbulb className={`${iconStyle}`} />
          </div>
          {showLabel && <p className={Styles.labelNameStyles}>{"Notes"}</p>}
        </div>

        <div
          className={`${round} ${Styles.LabelContainerStyle}`}
          onClick={() => {
            setShowNotesByLabel("");
          }}
        >
          <div>
            <Reminder className={`${iconStyle}`} />
          </div>
          {showLabel && <p className={Styles.labelNameStyles}>{"Reminder"}</p>}
        </div>
      </>

      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
      <>
        {showEditLabel && <EditLabelModal labels={labels} onCancel={modalCancelHandler} />}
        <div className={`${round} ${Styles.LabelContainerStyle}`} onClick={startCreateEventHandler}>
          <Edit className={`${iconStyle}`} />
          {showLabel && <p className={Styles.labelNameStyles}>{"Edit labels"}</p>}
        </div>
      </>

      <>
        <div className={`${round} ${Styles.LabelContainerStyle}`}>
          <div>
            <Archive className={`${iconStyle}`} />
          </div>
          {showLabel && <p className={Styles.labelNameStyles}>{"Archive"}</p>}
        </div>
        <div className={`${round} ${Styles.LabelContainerStyle}`}>
          <div>
            <Bin className={`${iconStyle}`} />
          </div>
          {showLabel && <p className={Styles.labelNameStyles}>{"Bin"}</p>}
        </div>
      </>
    </div>
  );
};

export default ListLabels;
