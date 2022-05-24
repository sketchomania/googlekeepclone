import ActionBar from "./AtionBar";
import LabelBar from "./LabelBar";
import Content from "./Content";
import Title from "./Title";
import Button from "../UI/Button";

const NoteModal = (props) => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 h-screen w-full md:inset-0 md:h-full">
        <div
          className="top-16 mx-auto relative bg-white shadow-3xl max-w-2xl w-144 h-auto m-1 p-1 rounded-2xl border border-indigo-600 dark:bg-gray-500"
          onClick={() => {
            console.log("NoteModaal clicked");
          }}
        >
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button onClick={props.onConfirm}>Confirm</Button>
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
            <ActionBar onConfirm={props.onConfirm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteModal;
