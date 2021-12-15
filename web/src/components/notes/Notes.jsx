import Note from "./note/Note";
import classes from "./Notes.module.css";

const Notes = () => {
  return (
    <div className={classes.notes}>
      <p>Notes component</p>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default Notes;
