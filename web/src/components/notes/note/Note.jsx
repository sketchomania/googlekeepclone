import "./Note.module.css";
import classes from "./Note.module.css";

const Note = ({ note, setCurrentId }) => {
  return (
    <>
      <div className={classes.note} onClick={() => {}}>
        <div className={classes.noteheader}>
          {/* <div> */}
            <h4>{note.title}</h4>
            <span onClick={() => {}}>pin-icon</span>
          {/* </div> */}
        </div>
        <div className={classes.desc}>
          <p>{note.description}</p>
        </div>
        <div className={classes.label}>
          <p>{note.labels}</p>
        </div>
        <div className={classes.notefooter}>
          <div>footer elements</div>
        </div>
      </div>
    </>
  );
};

export default Note;
