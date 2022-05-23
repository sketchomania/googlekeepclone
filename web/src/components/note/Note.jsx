import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Title from "./Title";
import Content from "./Content";

const Note = (props) => {
  return (
    <>
      <div
        className="border border-indigo-600 max-w-2xl w-144 h-auto m-1 p-1 rounded-2xl"
        onClick={() => {}}
      >
        <div className="border border-red-900 p-1.5">
          <Title title={props.note.title} />
          <Content description={props.note.description} />
          <p>{`ID: ${props.note._id}`}</p>
          <p>{`Archived: ${props.note.Archived}`}</p>
          <p>{`Background: ${props.note.background}`}</p>
          <p>{`Deleted: ${props.note.deleted}`}</p>
          <p>{`ListMode: ${props.note.listMode}`}</p>
          <p>{`Pinned: ${props.note.pinned}`}</p>
          <p>{`Selected: ${props.note.selected}`}</p>
          <p>{`Created at: ${props.note.createdAt}`}</p>
          <p>{`Updated at: ${props.note.updatedAt}`}</p>
          <p>{`Creator: ${props.note.creator._id}`}</p>
        </div>
        <div className="">
          <LabelBar labels={props.note.labels} />
        </div>
        <div className="">
          <ActionBar />
        </div>
      </div>
    </>
  );
};

// note have a 1px border of selected colour
export default Note;
