import Styles from "../../../constants/Styles";
import { ReactComponent as Label } from "../../../icons/label_black_24dp.svg";

const LabelComponent = ({ label, showLabel, setShowNotesByLabel }) => {
  const iconStyle = "fill-gray-600 h-11 w-11 p-2.5";
  const round = showLabel ? "rounded-r-3xl" : "rounded-3xl";

  const handleClick = () => {
    console.log(label);
    setShowNotesByLabel(label);
    // error because of static label values
  };

  return (
    <>
      <div
        className={`${round} ${Styles.LabelContainerStyle}`}
        onClick={handleClick}
      >
        <div>
          <Label className={`${iconStyle}`} />
        </div>
        {showLabel && (
          <p className={Styles.labelNameStyles}>{label.name}</p>
        )}
      </div>
    </>
  );
};

export default LabelComponent;
