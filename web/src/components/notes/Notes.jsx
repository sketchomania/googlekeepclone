import { useSelector } from "react-redux";

import Note from "./note/Note";
import classes from "./Notes.module.css";

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className={classes.notes}>
      <p>Notes component</p>
      <>
        <div
          className="bg-green-300 border border-indigo-600 max-w-2xl w-6/12 h-auto m-1 p-1 rounded-2xl"
          onClick={() => {}}
        >
          <div className={classes.noteheader}>
            {/* <div> */}
            <h4>Note-1</h4>
            <span onClick={() => {}}>pin-icon</span>
            {/* </div> */}
          </div>
          <div className="">
            <p>description</p>
          </div>
          <div className="">
            <p>labels</p>
          </div>
          <div className="">
            <div>footer elements</div>
          </div>
        </div>
      </>
      <>
        <div className="bg-green-300 w-6/12" onClick={() => {}}>
          <div className={classes.noteheader}>
            {/* <div> */}
            <h4>Note-1</h4>
            <span onClick={() => {}}>pin-icon</span>
            {/* </div> */}
          </div>
          <div className="">
            <p>description</p>
          </div>
          <div className="">
            <p>labels</p>
          </div>
          <div className="">
            <div>footer elements</div>
          </div>
        </div>
      </>
      {notes.map((note) => (
        <div key={note._id}>
          <Note note={note} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
