const EditableDiv = ({ id, inputChangeHandler, className, value }) => {
  return (
    <>
      {/* <textarea
        className={`${className} overflow-hidden resize-y outline-none border w-full`}
        id={id}
        name={id}
        // value={value}
        // rows={5}
        type="text"
        inputMode="text"
        onInput={(e) => {
          console.log(e);
          // console.log(e.target.name);
          inputChangeHandler(e);
        }}
        // onChange={(e) => {
        //   console.log(e.target.value);
        // }}
      >
        {value}
      </textarea> */}
      <div
        className={`${className} whitespace-pre-wrap overflow-hidden resize-none outline-none border w-full`}
        id={id}
        name={id}
        type="text"
        title={id}
        // value={value}
        role="textbox"
        inputMode="text"
        contenteditable="true"
        suppressContentEditableWarning={true}
        dir="ltr"
        // spellCheck="true"
        onInput={(e) => {
          inputChangeHandler(e);
        }}
      >
        {value}
      </div>
    </>
  );
};

export default EditableDiv;
