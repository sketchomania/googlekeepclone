import { ReactComponent as Bulb } from "../../../icons/lightbulb_black_24dp.svg";
import { ReactComponent as Reminder } from "../../../icons/notifications_black_24dp.svg";
import { ReactComponent as Label } from "../../../icons/label_black_24dp.svg";
import { ReactComponent as Edit } from "../../../icons/edit_black_24dp.svg";
import { ReactComponent as Archive } from "../../../icons/archive_black_24dp.svg";
import { ReactComponent as Bin } from "../../../icons/bin_black_24dp.svg";

// const label = (props, { label, setCurrnetId }) => {
const LabelComponent = ({ label, showLabel }) => {
  const iconStyle = "fill-gray-600 h-11 w-11 p-2.5";
  const round = showLabel ? "rounded-r-3xl" : "rounded-3xl";

  return (
    <>
      <div
        className={`${round} pl-4 h-12 flex items-center hover:bg-gray-100 cursor-pointer`}
        onClick={() => console.log(label)}
      >
        <div>
          {/* {props.name === "Archive" ? (
            <Archive className={`${iconStyle}`} />
            ) : (
              <Label className={`${iconStyle}`} />
            )} */}
          <Label className={`${iconStyle}`} />
        </div>
        {showLabel && (
          <p className="ml-5 text-gray-800 font-medium">{label.name}</p>
        )}
      </div>
    </>
  );
};

export default LabelComponent;
