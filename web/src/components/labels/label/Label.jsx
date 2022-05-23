import { ReactComponent as Bulb } from "../../../icons/lightbulb_black_24dp.svg";
import { ReactComponent as Reminder } from "../../../icons/notifications_black_24dp.svg";
import { ReactComponent as Label } from "../../../icons/label_black_24dp.svg";
import { ReactComponent as Edit } from "../../../icons/edit_black_24dp.svg";
import { ReactComponent as Archive } from "../../../icons/archive_black_24dp.svg";
import { ReactComponent as Bin } from "../../../icons/bin_black_24dp.svg";

// const label = (props, { label, setCurrnetId }) => {
const label = (props) => {
  return (
    <>
      <div className="flex items-center m-2 ml-0 p-1 bg-gray-200 rounded-r-3xl">
        <div className={`${sty2}`}>
          {/* {props.name === "Archive" ? (
            <Archive className={`${sty1}`} />
            ) : (
              <Label className={`${sty1}`} />
            )} */}
          <Label className={`${sty1}`} />
        </div>
        {/* {console.log(label)} */}
        {props.showLabel &&<div><p>{props.name}</p></div>}
        {/* <p>{props.name ? props.name : "from database"}</p> */}
      </div>
    </>
  );
};

const sty1 = "stroke-2 p-1.5 h-10 w-10 hover:bg-gray-300 hover:rounded-full";
const sty2 = "px-2";

export default label;
