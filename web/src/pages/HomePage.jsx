import MainMenu from "../components/labels/MainMenu";
import NoteArea from "../components/main/NoteArea";

const HomePage = (props) => {
  return (
    <>
      <h1 className="border border-orange-500 m-1">Home page component 👇</h1>
      <div className="flex flex-row w-full border border-violet-700 p-1">
        <MainMenu
          showLabel={props.showLabel}
        />
        <NoteArea />
      </div>
    </>
  );
};
// remove h1 and padding from div
export default HomePage;
