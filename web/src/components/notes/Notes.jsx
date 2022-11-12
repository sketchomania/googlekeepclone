import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { fetchNotes } from "../../redux/actions/noteActions";
import Note from "../note/Note";
import Spinner from "../UI/Spinner";

const Notes = () => {
  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  // const notesData = useSelector((state) => state.noteReducer);
  const { isLoading, notes, isError } = useSelector(
    (state) => state.noteReducer
  );
  // console.log(notesData);

  // const dispatch = useDispatch();

  useEffect(() => {
    console.log("notes component useEffect");
    console.log("notesData: ", isLoading, notes, isError);
    // dispatch(fetchNotes());
    return () => {
      console.log("notes Component cleanUp");
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <p className="text-center">Notes component</p>
      <div className="flex items-center justify-center flex-wrap w-full border-1 border-cyan-500">
        <br />
        {/* its working  and if it's not working just comment out the notes.map part and refresh */}
        {/* {console.log("notesData: ", isLoading, notes, isError)} */}

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
