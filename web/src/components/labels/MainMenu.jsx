import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLabels } from "../../actions/labels";
// import classes from "./MainMenu.module.css";
import AddLabel from "./AddLabel";
import Label from "./label/Label";
import Labels from "./Labels";

const MainMenu = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabels());
  }, [currentId, dispatch]);

  return (
    <>
      <div className="w-72 h-screen overflow-y-scroll overflow-x-hidden scroll-smooth border border-red-800">
        <p>Main menu (labels)</p>
        <div>
          <Label name={"Notes"} />
          <Label name={"Reminder"} />
        </div>
        <div className="pt-4 border-y-2 border-blue-600">
          <div className="flex justify-between px-4 border text-xs">
            <h6>Labels</h6>
            <h6>Edit</h6>
          </div>
          <AddLabel currentId={currentId} setCurrentId={setCurrentId} />
          <Label name={"👇labels"} />
          <Labels />
          <Label name={"Default Labels"} />
          <Label name={"Default Labels"} />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label />
          <Label name={"Default Labels"} />
          <Label name={"-------------"} />
        </div>
        <div>
          <Label name={"Archive"} />
          <Label name={"Deleted"} />
          <Label name={"Settings"} />
          <Label name={"Help & feedback"} />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
