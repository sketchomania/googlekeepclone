import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getNotes } from "../../actions/notes";
import "./MainArea.module.css";
import TakeNote from "./TakeNote";
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
      <TakeNote currentId={currentId} setCurrentId={setCurrentId} />
      <Notes />
    </div>
  );
};

export default MainArea;
