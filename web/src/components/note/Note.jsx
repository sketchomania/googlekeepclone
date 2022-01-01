import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Title from "./Title";
import Content from "./Content";
// import classes from "./Note.module.css";

const Note = ({ note, setCurrentId }) => {
  return (
    <>
      <div
        className="border border-indigo-600 max-w-2xl w-full h-auto m-1 p-1 rounded-2xl"
        onClick={() => {}}
      >
        <div className="border border-red-900 p-1.5">
          <Title title={note.title} />
          <Content description={note.description} />
        </div>
        <div className="">
          <LabelBar labels={note.labels} />
        </div>
        <div className="">
          <ActionBar />
        </div>
      </div>
      <div className="max-w-2xl w-full" onClick={() => {}}>hey</div>
    </>
  );
};

// note have a 1px border of selected colour
export default Note;
