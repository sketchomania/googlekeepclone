import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { fetchNotes } from "../../redux/actions/noteActions";
import Note from "../note/Note";

const Notes = () => {
  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  const notes = useSelector((state) => state.noteReducer.notes);
  // console.log(notes);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchNotes());
  // }, [dispatch]);

  return (
    <>
      <p className="text-center">Notes component</p>
      <div className="flex items-center justify-center flex-wrap w-full border-1 border-cyan-500">
        <br />
        {/* its working  and if it's not working just comment out the notes.map part and refresh */}
        {console.log(notes)}

        {notes.map((note) => (
          <div key={note._id}>
            <Note note={note} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
