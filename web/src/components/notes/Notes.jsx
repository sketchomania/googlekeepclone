import { useSelector } from "react-redux";
import { useEffect } from "react";

import Note from "../note/Note";
import Spinner from "../UI/Spinner";

const Notes = ({ showNotesByLabel }) => {
  const { isLoading, notes, isError } = useSelector(
    (state) => state.noteReducer
  );

  useEffect(() => {
    console.log("notes component useEffect: ", isLoading, notes, isError);

    // return () => {
    //   console.log("notes Component cleanUp");
    // };
  }, []);

  useEffect(() => {
    console.log("showNotesByLabel: ", showNotesByLabel);

    // return () => {
    //   console.log("notes Component cleanup - 2");
    // };
  }, [showNotesByLabel]);

  if (isLoading) {
    return <Spinner />;
  }

  const RenderNote = ({ value }) => {
    if (value === "") {
      return notes.map((note) => <Note note={note} key={note._id} />);
    } else {
      const noteByLabelArr = notes.filter((notesObj) =>
        showNotesByLabel.assignedNotes?.find(
          (labelObj) => labelObj._id === notesObj._id
        )
      );
      return noteByLabelArr.map((note) => <Note note={note} key={note._id} />);
    }
  };

  // const noteByLabelArr = notes.filter((val) =>
  //   showNotesByLabel.assignedNotes?.find((notesObj) => notesObj._id === val._id)
  // );

  return (
    <>
      <div className="flex items-center border-t justify-center flex-wrap p-2 w-full">
        <RenderNote value={showNotesByLabel} />
      </div>
    </>
  );
};

export default Notes;
