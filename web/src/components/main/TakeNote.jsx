import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./TakeNote.module.css";

const TakeNote = () => {
  const [isExpanded, setExpanded] = useState(false);

  const expandHandler = () => {
    setExpanded(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit clicked");
  };

  return (
    <>
      <Card className={classes.input}>
        <form className={classes.form} onSubmit={submitHandler}>
          {isExpanded && (
            <input
              // value={}
              id="title"
              type="text"
              placeholder="Title"
              name="title"
              onChange={() => {}}
            />
          )}
          <p>
            <textarea
              // value={}
              onClick={expandHandler}
              name="note-content"
              placeholder="Take a note..."
              onChange={() => {}}
            ></textarea>
          </p>
          <button type="submit">Done</button>
        </form>
      </Card>
    </>
  );
};

export default TakeNote;
