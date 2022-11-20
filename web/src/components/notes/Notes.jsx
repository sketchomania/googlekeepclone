import { useSelector } from "react-redux";
import { useEffect } from "react";

import Note from "../note/Note";
import Spinner from "../UI/Spinner";

const Notes = () => {
  const { isLoading, notes, isError } = useSelector(
    (state) => state.noteReducer
  );

  useEffect(() => {
    console.log("notes component useEffect: ", isLoading, notes, isError);
    return () => {
      console.log("notes Component cleanUp");
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex items-center justify-center flex-wrap p-2 w-full border border-cyan-500">
        {notes.map((note) => (
          // <div key={note._id}>
            <Note note={note} key={note._id} />
          // </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
