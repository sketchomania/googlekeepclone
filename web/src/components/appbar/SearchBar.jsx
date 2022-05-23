import { useRef, useState } from "react";
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
    <form
      onSubmit={fromSubmitHandler}
      className="relative flex w-6/12 h-11 p-0.5 mx-auto rounded-lg justify-between items-center bg-gray-200 shadow-sm shadow-gray-200"
    >
      <label>
        <Search
          className="stroke-2 p-0.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full"
          onClick={expandHandler}
        />
      </label>
      <input
        className="bg-inherit w-4/5 h-6 p-0 mx-4 my-0"
        id="search"
        type="text"
        placeholder="search"
        autoComplete="off"
        ref={searchInputRef}
        onClick={expandHandler}
        onChange={searchHandler}
      ></input>
      {isExpanded && (
        <button onClick={collapsHandler}>
          <Close className="stroke-2 p-0.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
