import { useRef, useState } from "react";
import classes from "./SearchBar.module.css";
import { ReactComponent as Search } from "../../icons/search_black_24dp.svg";
import { ReactComponent as Close } from "../../icons/close_black_24dp.svg";

const SearchBar = () => {
  const searchInputRef = useRef();
  const [isExpanded, setExpanded] = useState(false);

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    searchInputRef.current.value = "";
  };

  const expandHandler = () => {
    setExpanded(true);
  };
  const collapsHandler = () => {
    setExpanded(false);
  };

  const searchHandler = (event) => {
    console.log(searchInputRef.current.value);
    const searchedTerm = searchInputRef.current.value;
    console.log(searchedTerm);
    // filtering, validity , search_part -> logic
  };

  return (
    <form onSubmit={fromSubmitHandler} className={classes.form}>
      <label>
        <Search className={classes.icon} onClick={expandHandler} />
      </label>
      <input
        id="search"
        type="text"
        placeholder="search"
        autocomplete="off"
        ref={searchInputRef}
        onClick={expandHandler}
        onChange={searchHandler}
      ></input>
      {isExpanded && (
        <button onClick={collapsHandler}>
          <Close className={classes.icon} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
