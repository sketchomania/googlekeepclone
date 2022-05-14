import { useSelector } from "react-redux";

// import { fetchNotes } from "../../actions/noteActions";
import Note from "../note/Note";
// import classes from "./Notes.module.css";

const Notes = ({ setCurrentId }) => {
  const stateObj = useSelector((state) => state);
  console.log(stateObj);
  const notes = useSelector((state) => state.noteReducer.notes);
  // console.log(notes);

  // const dispatch = useDispatch();
  // dispatch(fetchNotes());

  return (
    <div className="flex items-center justify-center flex-wrap w-full border-2 border-cyan-500">
      <p>Notes component</p>
      <br />
      {/* its working  and if it's not working just comment out the notes.map part and refresh */}
      {console.log(notes)}

      {notes.map((note) => (
        <div key={note._id}>
          <Note note={note} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
