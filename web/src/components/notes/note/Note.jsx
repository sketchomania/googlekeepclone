import "./Note.module.css";
import classes from "./Note.module.css";

const Note = ({ note, setCurrentId }) => {
  return (
    <>
      <div className={classes.note} onClick={() => {}}>
        <div>
          <div>
            <h4>{note.title}</h4>
            <span onClick={() => {}}>pin-icon</span>
          </div>
        </div>
        <div>
          <p>{note.description}</p>
        </div>
        <div>
          <p>{note.labels}</p>
        </div>
        <div>
          <div>footer elements</div>
        </div>
      </div>
    </>
  );
};

export default Note;
