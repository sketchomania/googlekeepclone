import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchNotes } from "../../redux/actions/noteActions";
// import classes from "./NoteArea.module.css";
import AddNote from "./AddNote";
import Notes from "../notes/Notes";

const MainArea = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [currentId, dispatch]);

  return (
    <div className="grow w-full border-2 border-amber-700">
      <h4>Main Area</h4>
      <AddNote currentId={currentId} setCurrentId={setCurrentId} />
      <Notes setCurrentId={setCurrentId} />
    </div>
  );
};

export default MainArea;
