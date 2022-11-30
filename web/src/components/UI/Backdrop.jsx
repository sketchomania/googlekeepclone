const Backdrop = (props) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-full bg-zinc-800 bg-opacity-75"
        onClick={() => {
          console.log("Backdrop clicked");
        }}
        // onClick={props.onCancel}
        // onMouseOver={(e) => {console.log("mouse-over")}}
      >
        My Backdrop
      </div>
    </>
  );
};
export default Backdrop;
