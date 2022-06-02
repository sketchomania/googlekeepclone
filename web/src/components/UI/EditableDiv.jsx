const EditableDiv = (props) => {
  return (
    <div
      className={`${props.className} outline-transparent bg-transparent outline-0 border w-full`}
      id={props.id}
      name={props.id}
      title={props.id}
      contentEditable
      suppressContentEditableWarning={true}
      type="text"
      role="textbox"
      inputMode="text"
      dir="ltr"
      tabIndex={0}
      spellCheck="true"
      //   value={props.value}
      //   onKeyUp={(e) => {console.log(e)}}
      onInput={(e) => {
        // console.log("e.target.outerText: ", e.target.outerText);
        props.inputChangeHandler(e);

        // console.log(e.target.id, props.id);
        // props.setStateValue({ ...stateValue, title: e.target.outerText });
        // console.log(stateValue);
        // setStateT({ ...stateT, desc: e.currentTarget.textContent });
        // console.log(stateT);
      }}
    >
      {props.children}
    </div>
  );
};

export default EditableDiv;
