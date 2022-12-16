import React, { useState } from "react";

import { ReactComponent as Alert } from "../../icons/add_alert_black_24dp.svg";
import { ReactComponent as Delete } from "../../icons/delete_black_24dp.svg";
import { ReactComponent as Label } from "../../icons/label_black_24dp.svg";
import { ReactComponent as CheckBox } from "../../icons/check_box_black_24dp.svg";
import { ReactComponent as Person } from "../../icons/person_add_alt_black_24dp.svg";
import { ReactComponent as Archive } from "../../icons/archive_black_24dp.svg";
import { ReactComponent as Color } from "../../icons/color_lens_black_24dp.svg";
import Button from "../UI/Button";

const AtionBar = (props) => {
  // useEffect(() => {
  //   console.log("....NoteActionBar uesEffect");

  //   return () => {
  //     console.log("...NoteActionBar CleanUp");
  //   };
  // }, []);
  const [showColorModal, setShowColorModal] = useState(false);

  const mouseOverStyle = props.isMouseOver ? "fill-gray-500" : "fill-none";
  const iconStyle =
    // mouseOverStyle +
    "stroke-2 mx-2 p-2 h-8 w-8 hover:fill-black hover:bg-gray-100 hover:rounded-full cursor-pointer";

  return (
    <div className="flex items-center justify-between my-1">
      <div className="flex">
        <Alert className={iconStyle} />
        <Person className={`${iconStyle} cursor-not-allowed fill-gray-500`} />
        <li className="list-none relative z-0">
          <Color
            className={`${iconStyle}`}
            onClick={() => {
              console.log("color Backdrop chilcked");
              setShowColorModal(true);
            }}
          />
          {showColorModal && (
            <>
              <div
                className="fixed bg-bgray-200 opacity-30 h-full w-full top-0 left-0"
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
                    className="bg-zinc-700  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-zinc-500");
                    }}
                  ></div>
                  <div
                    className="bg-red  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-red");
                    }}
                  ></div>
                  <div
                    className="bg-orange  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-orange");
                    }}
                  ></div>
                  <div
                    className="bg-yellow-50  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-yellow-50");
                    }}
                  ></div>
                  <div
                    className="bg-green  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-green");
                    }}
                  ></div>
                  <div
                    className="bg-teal   rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-teal");
                    }}
                  ></div>
                  <div
                    className="bg-blue  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-blue");
                    }}
                  ></div>
                  <div
                    className="bg-darkblue  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-darkblue");
                    }}
                  ></div>
                  <div
                    className="bg-purple  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-purple");
                    }}
                  ></div>
                  <div
                    className="bg-pink  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-pink");
                    }}
                  ></div>
                  <div
                    className="bg-brown  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-brown");
                    }}
                  ></div>
                  <div
                    className="bg-grey  rounded-full m-0.5 p-3.5 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-grey");
                    }}
                  ></div>
                </div>
                <div className="flex justify-center py-1.5 border-t">
                  <div
                    className="bg-zinc-700  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-zinc-500");
                    }}
                  ></div>
                  <div
                    className="bg-red  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-red");
                    }}
                  ></div>
                  <div
                    className="bg-orange  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-orange");
                    }}
                  ></div>
                  <div
                    className="bg-yellow-50  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-yellow-50");
                    }}
                  ></div>
                  <div
                    className="bg-green  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-green");
                    }}
                  ></div>
                  <div
                    className="bg-teal   rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-teal");
                    }}
                  ></div>
                  <div
                    className="bg-blue  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-blue");
                    }}
                  ></div>
                  <div
                    className="bg-darkblue  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-darkblue");
                    }}
                  ></div>
                  <div
                    className="bg-purple  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-purple");
                    }}
                  ></div>
                  <div
                    className="bg-pink  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-pink");
                    }}
                  ></div>
                  <div
                    className="bg-brown  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-brown");
                    }}
                  ></div>
                  <div
                    className="bg-grey  rounded-full m-px p-4 cursor-pointer"
                    onClick={() => {
                      props.noteBackgrounchange("bg-grey");
                    }}
                  ></div>
                </div>
              </div>
            </>
          )}
        </li>
        <Label className={`${iconStyle}`} />
        <Archive className={`${iconStyle}`} onClick={props.toggleArchive} />
        <CheckBox
          className={`${iconStyle}`}
          onClick={props.toggleCheckBoxMode}
        />
        <Delete className={`${iconStyle}`} onClick={props.toggleDelete} />
      </div>
      <div className="flex mr-3">
        {/* <button
          className="font-medium text-gray-800 text-sm rounded-md w-20 h-8 hover:bg-zinc-500 hover:bg-opacity-5"
          onClick={props.onConfirm}
        >
          Close
        </button> */}
        <Button onClick={props.onConfirm}>Close</Button>
      </div>
    </div>
  );
};

export default AtionBar;
