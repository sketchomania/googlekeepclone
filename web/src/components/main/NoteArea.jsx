import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchNotes } from "../../redux/actions/noteActions";
// import classes from "./NoteArea.module.css";
import AddNote from "./AddNote";
import Notes from "../notes/Notes";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const MainArea = () => {
  const [currentId, setCurrentId] = useState(null);
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const showModal = () => {
    setErr({
      title: "Modal",
      message: "This is a modal component. good luck",
    });
    return;
  };
  const errorHandler = () => {
    setErr(null);
  };

  useEffect(() => {
    dispatch(fetchNotes());

    const escKeyPressHandler = (e) => {
      // console.log(e);
      if (e.keyCode === 27) {
        console.log("Escape is pressed!");
        errorHandler();
      }
    };
    // if (err != null) {
      window.addEventListener("keydown", escKeyPressHandler);
      return () => {
        window.removeEventListener("keydown", escKeyPressHandler);
      };
    // }
  }, [currentId, dispatch]);

  return (
    <div className="grow w-full border-2 border-amber-700">
      <h4>Main Area for note only</h4>
      {err && (
        <ErrorModal
          // title={err.title}
          // message={err.message}
          // onConfirm={errorHandler}
          
          // onKeyPress={(e) => {
          //   escKeyPressHandler(e);
          // }}
        />
      )}
      <Button onClick={showModal}>Show modal</Button>
      <AddNote currentId={currentId} setCurrentId={setCurrentId} />
      <Notes setCurrentId={setCurrentId} />
    </div>
  );
};

export default MainArea;
