import MainMenu from "../components/labels/MainMenu";
import NoteArea from "../components/main/NoteArea";

const HomePage = (props) => {
  return (
    <>
      <div className="flex flex-row w-full border border-violet-700 p-1 mt-16">
        <MainMenu showLabel={props.showLabel} />
        <NoteArea />
      </div>
    </>
  );
};
// remove h1 and padding from div
export default HomePage;
