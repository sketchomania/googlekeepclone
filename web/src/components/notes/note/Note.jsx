import "./Note.module.css";
import classes from "./Note.module.css";

const Note = () => {
  return (
    <>
      <div className={classes.note}>
        <div>
          <div>
            <p>title</p>
            <span>pin</span>
          </div>
        </div>
        <div>
          <p>note description</p>
        </div>
        <div>
          <div>footer elements</div>
        </div>
      </div>
    </>
  );
};

export default Note;
