import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchNotes } from "../../redux/actions/noteActions";
import AddNote from "./AddNote";
import Notes from "../notes/Notes";

const MainArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="grow w-full mt-16 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-sm">
      {/* <h4 className="text-center">Main Area for note only</h4> */}
      <AddNote />
      <Notes />
    </div>
  );
};

export default MainArea;
