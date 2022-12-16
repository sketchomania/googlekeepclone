import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchNotes } from "../../redux/actions/noteActions";
import AddNote from "./AddNote";
import Notes from "../notes/Notes";

const NoteArea = ({ showNotesByLabel }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="grow w-full mt-16 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-sm">
      <AddNote />
      <Notes showNotesByLabel={showNotesByLabel} />
    </div>
  );
};

export default NoteArea;
