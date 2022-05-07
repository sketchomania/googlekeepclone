import { useSelector } from "react-redux";

import Note from "../note/Note";
// import classes from "./Notes.module.css";

const Notes = ({ setCurrentId }) => {
  const stateObj = useSelector((state) => state);
  console.log(stateObj);
  const  notes = useSelector((state) => state.noteReducer.notes);
  console.log(notes);

  return (
    <div className="flex items-center justify-center flex-wrap w-full border-2 border-cyan-500">
      <p>Notes component</p>
      <br />
      {/* its working  and if it's not working just comment out the notes.map part and refresh */}
      {/* {console.log(notes)} */}
      {/* {notes.map((note) => (
        <div key={note._id}>
          <br/>
          <p>{note._id}</p>
          <p>{note.title}</p>
        </div>
        // console.log(note)
        // <Note key={note._id} note={note} setCurrentId={setCurrentId} />
        // <div key={note._id}>note {console.log(note._id)} {console.log(note)}</div>
      ))} */}
    </div>
  );
};

export default Notes;
// <div key={note._id}>
// console.log(note)
// <Note key={note._id} note={note} setCurrentId={setCurrentId} />
// </div>

// <div key={note._id}>note {console.log(note._id)} {console.log(note)}</div>
