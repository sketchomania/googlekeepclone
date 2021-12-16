import { useSelector } from "react-redux";

import Note from "./note/Note";
import classes from "./Notes.module.css";

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className={classes.notes}>
      <p>Notes component</p>
      {notes.map((note) => (
        <div key={note._id}>
          <Note note={note} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
