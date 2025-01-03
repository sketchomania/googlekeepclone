import { useRef, useState } from "react";
import { ReactComponent as Search } from "../../icons/search_black_24dp.svg";
import { ReactComponent as Close } from "../../icons/close_black_24dp.svg";

const SearchBar = () => {
  // remove useRef
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
      className="relative flex w-6/12 h-12 p-0.5 px-2 mx-auto rounded-lg justify-between items-center bg-gray-100 dark:bg-zinc-500"
    >
      <label>
        <Search
          className={`${iconStyle}`}
          onClick={expandHandler}
        />
      </label>
      <input
        className="bg-inherit min-w-4/5 w-full h-7 my-0 outline-none"
        id="search"
        name="search"
        type="text"
        placeholder="Search"
        autoComplete="off"
        ref={searchInputRef}
        onClick={expandHandler}
        onChange={searchHandler}
      ></input>
      {isExpanded && (
        <button onClick={collapsHandler}>
          <Close className={`${iconStyle}`} />
        </button>
      )}
    </form>
  );
};

const iconStyle = "stroke-2 fill-gray-500 p-2 h-10 w-10 hover:bg-gray-200 dark:fill-white hover:rounded-full cursor-pointer"

export default SearchBar;
