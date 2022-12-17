import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchLabels } from "../../redux/actions/labelActions";
import Label from "./label/Label";
import ListLabels from "./ListLabels";

const MainMenu = ({ showLabel, setShowNotesByLabel }) => {
  const dispatch = useDispatch();
  const sty1 = showLabel ? "w-72" : "w-20";

  useEffect(() => {
    dispatch(fetchLabels());
  }, [dispatch]);

  return (
    <>
      <div
        className={`${sty1} flex-none mt-16 pt-2 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-sm`}
      >
        <>
          <ListLabels showLabel={showLabel} setShowNotesByLabel={setShowNotesByLabel} />
        </>

        <div className="border py-4 text-xs flex flex-col items-center justify-center">
          <p>{"Open-source licences"}</p>
          <p>{"Made by Vaibhav Kushwaha"}</p>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
