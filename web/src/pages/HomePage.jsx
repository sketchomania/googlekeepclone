import MainMenu from "../components/labels/MainMenu";
import NoteArea from "../components/main/NoteArea";

const HomePage = (props) => {
  return (
    <>
      <div className="flex flex-row w-full h-screen">
        <MainMenu showLabel={props.showLabel} />
        <NoteArea />
      </div>
    </>
  );
};

export default HomePage;
