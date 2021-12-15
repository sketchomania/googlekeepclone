import classes from "./MainMenu.module.css";
import Label from "./label/Label";

const MainMenu = () => {
  return (
    <>
      <div className={classes.menu}>
        <p>This is main menu</p>
        <p>This is main menu</p>
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
      </div>
    </>
  );
};

export default MainMenu;
