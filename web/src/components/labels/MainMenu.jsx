import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchLabels } from "../../redux/actions/labelActions";
import AddLabel from "./AddLabel";
import Label from "./label/Label";
import ListLabels from "./ListLabels";

const MainMenu = ({ showLabel, setShowNotesByLabel }) => {
  const dispatch = useDispatch();
  const sty1 = showLabel ? "w-72" : "w-20";

  useEffect(() => {
    dispatch(fetchLabels());
  }, [dispatch]);
  // ${sty1}
  return (
    <>
      <div
        className={`${sty1} flex-none mt-16 pt-2 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-sm`}
      >
        <div
          onClick={() => {
            setShowNotesByLabel("");
          }}
        >
          <Label label={{ name: "Notes" }} showLabel={showLabel} />
          <Label label={{ name: "Remainder" }} showLabel={showLabel} />
        </div>
        <div>
          <div className="flex justify-between px-4 border text-xs">
            <h6>Labels</h6>
            <h6>Edit</h6>
          </div>
          <AddLabel />
          <ListLabels
            showLabel={showLabel}
            setShowNotesByLabel={setShowNotesByLabel}
          />
          <>
            <Label label={{ name: "Archive" }} showLabel={showLabel} />
            <Label label={{ name: "Deleted" }} showLabel={showLabel} />
            <Label label={{ name: "Settings" }} showLabel={showLabel} />
            <Label label={{ name: "Help & feedback" }} showLabel={showLabel} />
          </>
        </div>
        {/* <div>
          <>
            <Label label={{ name: "--------------"}} showLabel={showLabel} />
            <Label label={{ name: "Default ListLabels Starts"}} showLabel={showLabel} />
            <Label label={{ name: "1"}} showLabel={showLabel} />
            <Label label={{ name: "2"}} showLabel={showLabel} />
            <Label label={{ name: "3"}} showLabel={showLabel} />
            <Label label={{ name: "4"}} showLabel={showLabel} />
            <Label label={{ name: "5"}} showLabel={showLabel} />
            <Label label={{ name: "6"}} showLabel={showLabel} />
            <Label label={{ name: "7"}} showLabel={showLabel} />
            <Label label={{ name: "8"}} showLabel={showLabel} />
            <Label label={{ name: "9"}} showLabel={showLabel} />
            <Label label={{ name: "10"}} showLabel={showLabel} />
            <Label label={{ name: "11"}} showLabel={showLabel} />
            <Label label={{ name: "12"}} showLabel={showLabel} />
            <Label label={{ name: "13"}} showLabel={showLabel} />
            <Label label={{ name: "14"}} showLabel={showLabel} />
            <Label label={{ name: "15"}} showLabel={showLabel} />
            <Label label={{ name: "16"}} showLabel={showLabel} />
            <Label label={{ name: "17"}} showLabel={showLabel} />
            <Label label={{ name: "18"}} showLabel={showLabel} />
            <Label label={{ name: "Default ListLabels Ends"}} showLabel={showLabel} />
            <Label label={{ name: "--------------"}} showLabel={showLabel} />
          </>
        </div> */}
      </div>
    </>
  );
};

export default MainMenu;
