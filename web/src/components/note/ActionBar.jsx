import React, { useState } from "react";

import { ReactComponent as Alert } from "../../icons/add_alert_black_24dp.svg";
import { ReactComponent as Delete } from "../../icons/delete_black_24dp.svg";
import { ReactComponent as Label } from "../../icons/label_black_24dp.svg";
import { ReactComponent as CheckBox } from "../../icons/check_box_black_24dp.svg";
import { ReactComponent as Person } from "../../icons/person_add_alt_black_24dp.svg";
import { ReactComponent as Archive } from "../../icons/archive_black_24dp.svg";
import { ReactComponent as Unarchive } from "../../icons/unarchive_black_24dp.svg";
import { ReactComponent as Color } from "../../icons/color_lens_black_24dp.svg";
import { ReactComponent as RemoveColor } from "../../icons/color_reset_black_24dp.svg";
import { ReactComponent as RemoveImage } from "../../icons/hide_image_black_24dp.svg";
import Button from "../UI/Button";
import Styles from "../../constants/Styles";

const ActionBar = ({
  archived,
  toggleArchive,
  toggleCheckBoxMode,
  toggleDelete,
  noteBackgrounchange,
  toggleThemeChange,
  onConfirm,
  isMouseOver,
  isCreating,
}) => {
  const [showColorModal, setShowColorModal] = useState(false);

  const iconStyle = `p-2 h-8 w-8 ${isMouseOver ? "fill-zinc-700" : "fill-none"} ${
    isCreating ? "mx-2" : "mx-px"
  } ${Styles.iconCommonStyle}`;

  const BackgroundContainer = ({ background }) => {
    const changeNoteBackground = () => {
      noteBackgrounchange(`bg-${background}`);
    };
    return (
      <div
        title={`${background}`}
        onClick={changeNoteBackground}
        className={`bg-${background} border-${background} m-0.5 p-3.5 border-2 hover:border-black rounded-full cursor-pointer`}
      ></div>
    );
  };
  const ThemeContainer = ({ theme }) => {
    const changeNoteTheme = () => {
      toggleThemeChange(`bg-${theme}`);
    };
    return (
      <div
        title={`${theme}`}
        onClick={changeNoteTheme}
        className={`bg-${theme}-thumb bg-cover m-0.5 p-5 hover:shadow-xl rounded-full cursor-pointer`}
      ></div>
    );
  };

  return (
    <div className="flex items-center justify-between my-1">
      <div className="flex">
        <Alert title="Remind me" className={iconStyle} />
        <Person title="Collaborator" className={`${iconStyle} cursor-not-allowed fill-gray-500`} />
        <li className="list-none relative z-0">
          <Color
            title="Background options"
            className={`${iconStyle}`}
            onClick={() => {
              if (isCreating) {
                console.log("color Backdrop chilcked");
                setShowColorModal(true);
              }
            }}
          />
          {showColorModal && (
            <>
              <div
                className="fixed h-full w-full top-0 left-0"
                onClick={() => {
                  console.log("color Backdrop chilcked");
                  setShowColorModal(false);
                }}
              ></div>
              <div
                className="absolute m-2 shadow-md border-t border-t-zinc-100 w-max bg-white rounded-lg"
                onClick={() => {
                  console.log("Note color change Modal clicked");
                }}
              >
                <div className="flex p-2">
                  <div
                    className="border-2 hover:border-black rounded-full m-0.5 cursor-pointer flex items-center justify-center"
                    onClick={() => {
                      noteBackgrounchange("bg-white");
                    }}
                  >
                    <RemoveColor title="Default" className={"scale-75 h-6 w-7 "} />
                  </div>
                  <BackgroundContainer background={"red"} />
                  <BackgroundContainer background={"orange"} />
                  <BackgroundContainer background={"yellow"} />
                  <BackgroundContainer background={"green"} />
                  <BackgroundContainer background={"teal"} />
                  <BackgroundContainer background={"blue"} />
                  <BackgroundContainer background={"darkblue"} />
                  <BackgroundContainer background={"purple"} />
                  <BackgroundContainer background={"pink"} />
                  <BackgroundContainer background={"brown"} />
                  <BackgroundContainer background={"grey"} />
                </div>
                <div className="flex justify-center py-1.5 border-t">
                  <div
                    className="border-2 hover:border-black flex items-center rounded-full m-px cursor-pointer"
                    onClick={() => {
                      noteBackgrounchange("bg-white");
                    }}
                  >
                    <RemoveImage
                      title="Default"
                      className={"pl-1.5 hover:shadow-xl h-6 w-9 mx-0.5 "}
                    />
                  </div>
                  <ThemeContainer theme={"grocery"} />
                  <ThemeContainer theme={"food"} />
                  <ThemeContainer theme={"music"} />
                  <ThemeContainer theme={"recipe"} />
                  <ThemeContainer theme={"notes"} />
                  <ThemeContainer theme={"places"} />
                  <ThemeContainer theme={"travel"} />
                  <ThemeContainer theme={"video"} />
                  <ThemeContainer theme={"celebration"} />
                </div>
              </div>
            </>
          )}
        </li>
        <Label title="Edit Labels" className={`${iconStyle}`} />
        {archived ? (
          <Unarchive title={"Unarchive"} className={`${iconStyle}`} onClick={toggleArchive} />
        ) : (
          <Archive title={"Archive"} className={`${iconStyle}`} onClick={toggleArchive} />
        )}
        <CheckBox title="Checkbox mode" className={`${iconStyle}`} onClick={toggleCheckBoxMode} />
        <Delete title="Delete Note" className={`${iconStyle}`} onClick={toggleDelete} />
      </div>
      {isCreating && (
        <div className="flex mr-3">
          <Button onClick={onConfirm}>Close</Button>
        </div>
      )}
    </div>
  );
};

export default ActionBar;
