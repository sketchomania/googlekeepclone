const EditableDiv = ({ id, inputChangeHandler, className, value }) => {
  return (
    <div
      className={`${className} outline-transparent bg-transparent outline-0 border w-full`}
      id={id}
      name={id}
      type="text"
      title={id}
      // value={value}
      onChange={(e) => inputChangeHandler(e)}
      contentEditable
      suppressContentEditableWarning={true}
      role="textbox"
      inputMode="text"
      dir="ltr"
      // tabIndex={0}
      spellCheck="true"
      //   onKeyUp={(e) => {console.log(e)}}
      onInput={(e) => {
        // console.log("e.target.outerText: ", e.target.outerText);
        inputChangeHandler(e);

        // console.log(e.target.id, props.id);
        // props.setStateValue({ ...stateValue, title: e.target.outerText });
        // console.log(stateValue);
        // setStateT({ ...stateT, desc: e.currentTarget.textContent });
        // console.log(stateT);
      }}
    >
      {value}
    </div>
  );
};

export default EditableDiv;
