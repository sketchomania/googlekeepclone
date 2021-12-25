import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getNotes } from "../../actions/notes";
import classes from "./NoteArea.module.css";
import AddNote from "./AddNote";
import Notes from "../notes/Notes";

const MainArea = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);
  return (
    <div>
      <h4>Main Area</h4>
      <AddNote currentId={currentId} setCurrentId={setCurrentId} />
      <Notes setCurrentId={setCurrentId} />
    </div>
  );
};

export default MainArea;
