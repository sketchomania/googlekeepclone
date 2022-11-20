import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchLabels } from "../../redux/actions/labelActions";
import AddLabel from "./AddLabel";
import Label from "./label/Label";
import ListLabels from "./ListLabels";

const MainMenu = ({ showLabel }) => {
  const dispatch = useDispatch();
  const sty1 = showLabel ? "w-96" : "w-20";

  useEffect(() => {
    dispatch(fetchLabels());
  }, [dispatch]);

  return (
    <>
      <div
        className={`${sty1} mt-16 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-sm`}
      >
        <p>Main menu (ListLabels)</p>
        <div>
          <Label name={"Notes"} showLabel={showLabel} />
          <Label name={"Reminder"} showLabel={showLabel} />
        </div>
        <div className="pt-4 border-y-2 border-blue-600">
          <div className="flex justify-between px-4 border text-xs">
            <h6>Labels</h6>
            <h6>Edit</h6>
          </div>
          <AddLabel />
          <Label name={"👇labels from DB"} showLabel={showLabel} />
          <ListLabels showLabel={showLabel} />
          <>
            <Label name={"Archive"} showLabel={showLabel} />
            <Label name={"Deleted"} showLabel={showLabel} />
            <Label name={"Settings"} showLabel={showLabel} />
            <Label name={"Help & feedback"} showLabel={showLabel} />
          </>
        </div>
        <div>
          <>
            <Label name={"--------------"} showLabel={showLabel} />
            <Label name={"Default ListLabels Starts"} showLabel={showLabel} />
            <Label name={"1"} showLabel={showLabel} />
            <Label name={"2"} showLabel={showLabel} />
            <Label name={"3"} showLabel={showLabel} />
            <Label name={"4"} showLabel={showLabel} />
            <Label name={"5"} showLabel={showLabel} />
            <Label name={"6"} showLabel={showLabel} />
            <Label name={"7"} showLabel={showLabel} />
            <Label name={"8"} showLabel={showLabel} />
            <Label name={"9"} showLabel={showLabel} />
            <Label name={"10"} showLabel={showLabel} />
            <Label name={"11"} showLabel={showLabel} />
            <Label name={"12"} showLabel={showLabel} />
            <Label name={"13"} showLabel={showLabel} />
            <Label name={"14"} showLabel={showLabel} />
            <Label name={"15"} showLabel={showLabel} />
            <Label name={"16"} showLabel={showLabel} />
            <Label name={"17"} showLabel={showLabel} />
            <Label name={"18"} showLabel={showLabel} />
            <Label name={"Default ListLabels Ends"} showLabel={showLabel} />
            <Label name={"--------------"} showLabel={showLabel} />
          </>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
