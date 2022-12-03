import { useEffect, useState } from "react";

import MainMenu from "../components/labels/MainMenu";
import NoteArea from "../components/main/NoteArea";

const HomePage = ({ showLabel }) => {
  const [showNotesByLabel, setShowNotesByLabel] = useState("");

  // useEffect(() => {
  //   console.log("shoNotesByLabel: ", showNotesByLabel);
  //   return () => {
  //     // console.log("shoNotesByLabel before cleanup: ", showNotesByLabel);
  //     setShowNotesByLabel("");
  //     console.log("shoNotesByLabel after cleanup: ", showNotesByLabel);
  //   };
  // }, [showNotesByLabel]);

  return (
    <>
      <div className="flex flex-row w-full h-screen">
        <MainMenu
          setShowNotesByLabel={setShowNotesByLabel}
          showLabel={showLabel}
        />
        <NoteArea showNotesByLabel={showNotesByLabel} />
      </div>
    </>
  );
};

export default HomePage;
